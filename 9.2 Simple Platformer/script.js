const startBtn = document.getElementById("start-btn");
const canvas = document.getElementById("canvas");
const startScreen = document.querySelector(".start-screen");
const checkpointScreen = document.querySelector(".checkpoint-screen");
const checkpointMessage = document.querySelector(".checkpoint-screen > p");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

// Improved physics
const gravity = 0.6; 
let isCheckpointCollisionDetectionActive = true;
let animationId;

const proportionalSize = (size) => {
  return innerHeight < 500 ? Math.ceil((size / 500) * innerHeight) : size;
}

class Player {
  constructor() {
    this.position = {
      x: proportionalSize(10),
      y: proportionalSize(400),
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = proportionalSize(40);
    this.height = proportionalSize(40);
    this.jumps = 0; // Added for double-jump logic
  }
  
  draw() {
    // Drawn to look like Gryffindor Robes
    ctx.fillStyle = "#740001"; // Gryffindor Red
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.fillStyle = "#d3a625"; // Gold stripe
    ctx.fillRect(this.position.x + this.width/3, this.position.y, this.width/3, this.height);
  }
  
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Boundary check for falling off the map
    if (this.position.y > canvas.height) {
      resetLevel(); // Restart the level instead of bouncing on the bottom
    } else {
      this.velocity.y += gravity;
    }

    if (this.position.x < this.width) {
      this.position.x = this.width;
    }

    if (this.position.x >= canvas.width - this.width * 2) {
      this.position.x = canvas.width - this.width * 2;
    }
  }
}

class Platform {
  constructor(x, y) {
    this.position = { x, y };
    this.width = 200;
    this.height = proportionalSize(30);
  }
  draw() {
    // Castle stone look
    ctx.fillStyle = "#4a4a4a";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.fillStyle = "#333333";
    ctx.fillRect(this.position.x, this.position.y + this.height - 5, this.width, 5);
  }
}

class CheckPoint {
  constructor(x, y, z) {
    this.position = { x, y };
    this.width = proportionalSize(40);
    this.height = proportionalSize(40);
    this.claimed = false;
  };

  draw() {
    if (this.claimed) return;
    
    // Draw Golden Snitch
    const centerX = this.position.x + this.width / 2;
    const centerY = this.position.y + this.height / 2;
    
    // Snitch Wings
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.beginPath();
    ctx.ellipse(centerX - 15, centerY - 5, 12, 4, Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(centerX + 15, centerY - 5, 12, 4, -Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();

    // Snitch Body
    ctx.fillStyle = "#d3a625";
    ctx.beginPath();
    ctx.arc(centerX, centerY, 10, 0, Math.PI * 2);
    ctx.fill();
  }
  
  claim() {
    this.claimed = true;
  }
};

let player = new Player();
let platforms = [];
let checkpoints = [];

const initGameObjects = () => {
  player = new Player();
  isCheckpointCollisionDetectionActive = true;
  
  const platformPositions = [
    { x: 100, y: proportionalSize(450) }, // Added starting platform
    { x: 500, y: proportionalSize(450) },
    { x: 750, y: proportionalSize(380) },
    { x: 1000, y: proportionalSize(300) },
    { x: 1300, y: proportionalSize(400) },
    { x: 1700, y: proportionalSize(450) },
    { x: 2100, y: proportionalSize(380) },
    { x: 2500, y: proportionalSize(300) },
    { x: 2900, y: proportionalSize(250) },
    { x: 3400, y: proportionalSize(350) },
    { x: 3800, y: proportionalSize(450) },
    { x: 4200, y: proportionalSize(400) },
    { x: 4600, y: proportionalSize(250) }
  ];

  platforms = platformPositions.map(
    (platform) => new Platform(platform.x, platform.y)
  );

  const checkpointPositions = [
    { x: 1400, y: proportionalSize(330), z: 1 },
    { x: 2980, y: proportionalSize(180), z: 2 },
    { x: 4700, y: proportionalSize(180), z: 3 },
  ];

  checkpoints = checkpointPositions.map(
    (checkpoint) => new CheckPoint(checkpoint.x, checkpoint.y, checkpoint.z)
  );
};

const resetLevel = () => {
  initGameObjects();
  showCheckpointScreen("You fell off your broom! Try again.");
};

const animate = () => {
  animationId = requestAnimationFrame(animate);
  
  // Draw starry night background
  ctx.fillStyle = "#0b132b";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  platforms.forEach((platform) => platform.draw());
  checkpoints.forEach(checkpoint => checkpoint.draw());
  player.update();

  let movementSpeed = 6;

  if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {
    player.velocity.x = movementSpeed;
  } else if (keys.leftKey.pressed && player.position.x > proportionalSize(100)) {
    player.velocity.x = -movementSpeed;
  } else {
    player.velocity.x = 0;

    if (keys.rightKey.pressed && isCheckpointCollisionDetectionActive) {
      platforms.forEach((platform) => platform.position.x -= movementSpeed);
      checkpoints.forEach((checkpoint) => checkpoint.position.x -= movementSpeed);
    } else if (keys.leftKey.pressed && isCheckpointCollisionDetectionActive) {
      platforms.forEach((platform) => platform.position.x += movementSpeed);
      checkpoints.forEach((checkpoint) => checkpoint.position.x += movementSpeed);
    }
  }

  // Platform collision logic
  platforms.forEach((platform) => {
    const collisionDetectionRules = [
      player.position.y + player.height <= platform.position.y,
      player.position.y + player.height + player.velocity.y >= platform.position.y,
      player.position.x >= platform.position.x - player.width / 2,
      player.position.x <= platform.position.x + platform.width - player.width / 3,
    ];

    if (collisionDetectionRules.every((rule) => rule)) {
      player.velocity.y = 0;
      player.jumps = 0; // Reset jumps when landing
      return;
    }

    const platformDetectionRules = [
      player.position.x >= platform.position.x - player.width / 2,
      player.position.x <= platform.position.x + platform.width - player.width / 3,
      player.position.y + player.height >= platform.position.y,
      player.position.y <= platform.position.y + platform.height,
    ];

    if (platformDetectionRules.every(rule => rule)) {
      player.position.y = platform.position.y + player.height;
      player.velocity.y = gravity;
    };
  });

  // Checkpoint logic
  checkpoints.forEach((checkpoint, index, checkpointsArray) => {
    if (checkpoint.claimed) return;

    const checkpointDetectionRules = [
      player.position.x >= checkpoint.position.x,
      player.position.y >= checkpoint.position.y - 20, // Adjusted for Snitch bounding box
      player.position.y + player.height <= checkpoint.position.y + checkpoint.height + 20,
      isCheckpointCollisionDetectionActive,
      player.position.x - player.width <= checkpoint.position.x - checkpoint.width + player.width * 0.9,
      index === 0 || checkpointsArray[index - 1].claimed === true,
    ];

    if (checkpointDetectionRules.every((rule) => rule)) {
      checkpoint.claim();

      if (index === checkpointsArray.length - 1) {
        isCheckpointCollisionDetectionActive = false;
        showCheckpointScreen("Hogwarts Awaits! You caught them all.");
        movePlayer("ArrowRight", 0, false);
      } else {
        showCheckpointScreen("Snitch Caught!");
      }
    };
  });
}

const keys = {
  rightKey: { pressed: false },
  leftKey: { pressed: false }
};

const movePlayer = (key, xVelocity, isPressed) => {
  if (!isCheckpointCollisionDetectionActive) {
    player.velocity.x = 0;
    player.velocity.y = 0;
    return;
  }

  switch (key) {
    case "ArrowLeft":
      keys.leftKey.pressed = isPressed;
      break;
    case "ArrowUp":
    case " ":
    case "Spacebar":
      if (isPressed && player.jumps < 2) { // Double jump logic
        player.velocity.y = -10;
        player.jumps++;
      }
      break;
    case "ArrowRight":
      keys.rightKey.pressed = isPressed;
      break;
  }
}

const startGame = () => {
  initGameObjects();
  canvas.style.display = "block";
  startScreen.style.display = "none";
  animate();
}

const showCheckpointScreen = (msg) => {
  checkpointScreen.style.display = "block";
  checkpointMessage.textContent = msg;
  if (isCheckpointCollisionDetectionActive) {
    setTimeout(() => (checkpointScreen.style.display = "none"), 2000);
  }
};

startBtn.addEventListener("click", startGame);

window.addEventListener("keydown", ({ key }) => {
  movePlayer(key, 8, true);
});

window.addEventListener("keyup", ({ key }) => {
  movePlayer(key, 0, false);
});