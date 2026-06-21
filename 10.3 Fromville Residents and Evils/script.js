const characterData = [
  // THE HUMANS
  { id: 1, name: "Boyd Stevens", faction: "Human", bio: "The self-appointed Sheriff. Found the talismans and kept the town from tearing itself apart.", strength: 80, survival: 95, sanity: 65, speed: 70 },
  { id: 2, name: "Donna Pines", faction: "Human", bio: "Fierce leader of Colony House. Rules with an iron fist but deeply cares for her people.", strength: 75, survival: 90, sanity: 70, speed: 50 },
  { id: 3, name: "Jim Matthews", faction: "Human", bio: "Rollercoaster engineer. Obsessed with building a radio tower to contact the outside world.", strength: 65, survival: 75, sanity: 50, speed: 60 },
  { id: 4, name: "Tabitha Matthews", faction: "Human", bio: "Followed the wires into the tunnels. Constantly plagued by visions of the Anghkooey children.", strength: 55, survival: 80, sanity: 45, speed: 65 },
  { id: 5, name: "Victor", faction: "Human", bio: "Has been trapped in Fromville since he was a little boy. Measures the trees and hides the cars.", strength: 40, survival: 100, sanity: 30, speed: 55 },
  { id: 6, name: "Jade Herrera", faction: "Human", bio: "Arrogant software developer driven mad by visions of a strange symbol in the roots.", strength: 45, survival: 60, sanity: 20, speed: 60 },
  { id: 7, name: "Fatima Hassan", faction: "Human", bio: "The heart and soul of Colony House. Pregnant, but craving something much darker than food.", strength: 50, survival: 70, sanity: 40, speed: 65 },
  { id: 8, name: "Ellis Stevens", faction: "Human", bio: "Boyd's estranged son. Lives in Colony House and tries to maintain the peace.", strength: 70, survival: 75, sanity: 80, speed: 75 },
  { id: 9, name: "Kenny Liu", faction: "Human", bio: "Boyd's loyal deputy. Carries the weight of his father's death and the town's safety.", strength: 65, survival: 80, sanity: 75, speed: 70 },
  { id: 10, name: "Kristi Miller", faction: "Human", bio: "The town's only medic. Patches up everyone while dealing with the arrival of her fiancé.", strength: 55, survival: 85, sanity: 60, speed: 65 },
  { id: 11, name: "Tian-Chen Liu", faction: "Human", bio: "Kenny's mother. Runs the diner and keeps everyone fed with what little they have.", strength: 40, survival: 75, sanity: 85, speed: 45 },
  { id: 12, name: "Sara Myers", faction: "Human", bio: "The voices told her to kill the boy. A pariah who knows more about the woods than she should.", strength: 50, survival: 85, sanity: 15, speed: 70 },
  { id: 13, name: "Father Khatri", faction: "Human", bio: "The former town priest. Kept a bloody bag buried and gave questionable moral advice.", strength: 60, survival: 40, sanity: 70, speed: 55 },
  { id: 14, name: "Elgin", faction: "Human", bio: "Arrived on the bus. Dreamed about this nightmare town before he ever got on the road.", strength: 60, survival: 65, sanity: 40, speed: 65 },
  { id: 15, name: "Randall", faction: "Human", bio: "Volatile and dangerous. Refuses to follow the rules and lives alone in the abandoned bus.", strength: 85, survival: 70, sanity: 35, speed: 75 },
  { id: 16, name: "Marielle", faction: "Human", bio: "Kristi's fiancé who arrived on the bus. Struggling with severe withdrawal and hallucinations.", strength: 40, survival: 50, sanity: 25, speed: 55 },
  { id: 17, name: "Julie Matthews", faction: "Human", bio: "Jim and Tabitha's teenage daughter. Found her place in Colony House amidst the chaos.", strength: 45, survival: 65, sanity: 55, speed: 70 },
  { id: 18, name: "Ethan Matthews", faction: "Human", bio: "Views the terrifying town as a 'quest'. Sees the Boy in White.", strength: 20, survival: 85, sanity: 90, speed: 40 },
  { id: 19, name: "Martin", faction: "Human", bio: "A Marine chained to the wall in the ruins. Transferred the bloodworms to Boyd.", strength: 80, survival: 10, sanity: 20, speed: 0 },
  { id: 20, name: "Tom", faction: "Human", bio: "The pragmatic former bartender who helped keep the town's spirits up before the house collapsed.", strength: 60, survival: 30, sanity: 80, speed: 50 },
  { id: 21, name: "Abby Stevens", faction: "Human", bio: "Boyd's wife. Broke under the pressure of the town and started firing into the crowd.", strength: 60, survival: 0, sanity: 5, speed: 60 },

  // THE MONSTERS & VISIONS
  { id: 22, name: "Smiley", faction: "Monster", bio: "The most iconic creature. Always wears a terrifying grin and a vintage suit. The first to die.", strength: 95, survival: 95, sanity: 0, speed: 20 },
  { id: 23, name: "Yellowjacket Monster", faction: "Monster", bio: "A creature masquerading as a high schooler in a vintage yellow letterman jacket.", strength: 90, survival: 100, sanity: 0, speed: 20 },
  { id: 24, name: "The Scarecrow", faction: "Monster", bio: "A hollow, eerie entity dressed in ragged flannel. Waits patiently at the treeline.", strength: 90, survival: 100, sanity: 0, speed: 20 },
  { id: 25, name: "The Milkman", faction: "Monster", bio: "Dressed in a crisp, white 1950s milkman uniform. Whispers outside the windows at night.", strength: 90, survival: 100, sanity: 0, speed: 20 },
  { id: 26, name: "The Ballerina", faction: "Vision", bio: "Manifests from the cursed music box. Plagues the dreams of those infected by the cicadas.", strength: 100, survival: 100, sanity: 0, speed: 100 },
  { id: 27, name: "The Cicadas", faction: "Vision", bio: "A swarm that physically attacks in the real world based on the victims' nightmares.", strength: 80, survival: 100, sanity: 0, speed: 100 },
  { id: 28, name: "The Boy in White", faction: "Vision", bio: "A spectral child who appears to guide (or manipulate) certain residents of the town.", strength: 0, survival: 100, sanity: 100, speed: 100 },
  { id: 29, name: "Anghkooey Children", faction: "Vision", bio: "Ghastly, emaciated children appearing to Tabitha, chanting a word no one understands.", strength: 0, survival: 100, sanity: 0, speed: 50 },
  { id: 30, name: "The Entity", faction: "Vision", bio: "The unseen, malevolent force manipulating the weather, the forest, and the inhabitants.", strength: 999, survival: 999, sanity: 0, speed: 999 },
  // ADDITIONAL HUMANS
  { id: 31, name: "Acosta", faction: "Human", bio: "A newly arrived police officer. Struggling to enforce the law and maintain her grip on reality in a town that defies it.", strength: 75, survival: 70, sanity: 50, speed: 65 },
  { id: 32, name: "Henry", faction: "Human", bio: "Victor's father. Arrived in Fromville after decades of searching for the family he lost to the anomaly.", strength: 50, survival: 60, sanity: 60, speed: 45 },
  { id: 33, name: "Tillie", faction: "Human", bio: "An eccentric older woman from the bus. Finds a strange, morbid peace in the nightmare and dances in the rain.", strength: 30, survival: 70, sanity: 85, speed: 35 },
  { id: 34, name: "Nathan", faction: "Human", bio: "Sara's deeply protective brother. Worked with the animals and desperately tried to keep his sister safe.", strength: 65, survival: 40, sanity: 70, speed: 60 },
  { id: 35, name: "Dale", faction: "Human", bio: "A grumpy, cynical veteran of Colony House who has very little patience for new arrivals or changing the rules.", strength: 60, survival: 75, sanity: 55, speed: 50 },
  { id: 36, name: "Claire", faction: "Human", bio: "A resident of Fromville doing her best to keep her head down and survive the endless nightmares of the town.", strength: 45, survival: 60, sanity: 60, speed: 55 },

  // SPECIFIC MONSTERS
  { id: 37, name: "Jasmine", faction: "Monster", bio: "A manipulative creature who used her deceptive, romantic charm to trick Kevin into opening the Colony House window.", strength: 90, survival: 100, sanity: 0, speed: 20 },
  { id: 38, name: "Old Lady", faction: "Monster", bio: "Masqueraded as a sweet, lonely grandmother to coax young Meagan into unlocking her bedroom window on the first night.", strength: 85, survival: 100, sanity: 0, speed: 20 },
  { id: 39, name: "Cowboy", faction: "Monster", bio: "A frequent face among the night stalkers. Dressed in classic western attire with a horrific, frozen smile.", strength: 90, survival: 100, sanity: 0, speed: 20 },
  // THE NEW ARRIVALS & THE FALLEN
  { id: 40, name: "Bakta", faction: "Human", bio: "The pragmatic driver of the Grand Rapids bus. Carries the heavy guilt of driving so many unsuspecting passengers into the nightmare.", strength: 60, survival: 65, sanity: 60, speed: 55 },
  { id: 41, name: "Bing-Qian Liu", faction: "Human", bio: "Kenny's father, suffering from severe dementia. His declining mind made him vulnerable to the monsters' whispers, leading to a tragic end.", strength: 30, survival: 10, sanity: 15, speed: 30 },
  { id: 42, name: "Frank Pratt", faction: "Human", bio: "A grieving father and husband. His drunken night in the Box left his family unprotected, resulting in their brutal massacre.", strength: 50, survival: 0, sanity: 10, speed: 50 },
  { id: 43, name: "Lauren Pratt", faction: "Human", bio: "Meagan's mother. Tried desperately to shield her daughter when the monsters breached the house, but stood no chance.", strength: 40, survival: 0, sanity: 50, speed: 45 },
  { id: 44, name: "Meagan Pratt", faction: "Human", bio: "A sweet young girl who made the fatal mistake of opening her bedroom window for the 'Old Lady' monster.", strength: 10, survival: 0, sanity: 50, speed: 35 }
];

const gridContainer = document.getElementById("character-grid");
const searchInput = document.getElementById("search-input");

// Dynamically generate the color for the background based on faction
const getAvatarColor = (faction) => {
  if (faction === "Human") return "2c3e50"; // Dark Blue/Grey
  if (faction === "Monster") return "8b0000"; // Blood Red
  return "4a235a"; // Deep Purple
};

const renderCards = (data) => {
  gridContainer.innerHTML = "";
  
  if (data.length === 0) {
    gridContainer.innerHTML = `<p style="text-align:center; grid-column: 1/-1; color: #8b0000;">No entities found. They are hiding.</p>`;
    return;
  }

  data.forEach(char => {
    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(char.name)}&background=${getAvatarColor(char.faction)}&color=fff&size=150`;
    const factionClass = `faction-${char.faction.toLowerCase()}`;
    
    // Add specific CSS class if it's a monster/vision to make stats glow red
    const statClass = char.faction !== "Human" ? "monster-stat" : "";

    const cardHTML = `
      <div class="card">
        <div class="card-header">
          <img src="${avatarUrl}" alt="${char.name}" class="card-img">
          <div class="card-title">
            <h2>${char.name}</h2>
            <span class="faction-badge ${factionClass}">${char.faction}</span>
          </div>
        </div>
        <div class="card-body">
          <p class="bio">${char.bio}</p>
          <div class="stats">
            <div class="stat">Strength: <span class="${statClass}">${char.strength}</span></div>
            <div class="stat">Survival: <span class="${statClass}">${char.survival}</span></div>
            <div class="stat">Sanity: <span class="${statClass}">${char.sanity}</span></div>
            <div class="stat">Speed: <span class="${statClass}">${char.speed}</span></div>
          </div>
        </div>
      </div>
    `;
    gridContainer.innerHTML += cardHTML;
  });
};

// Initial Render
renderCards(characterData);

// Real-time Search Logic
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();
  
  const filteredData = characterData.filter(char => {
    return char.name.toLowerCase().includes(query) || 
           char.faction.toLowerCase().includes(query) ||
           char.id.toString() === query;
  });
  
  renderCards(filteredData);
});