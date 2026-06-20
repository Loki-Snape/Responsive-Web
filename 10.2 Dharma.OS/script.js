// --- Terminal Logic (With Crash Fix) ---
const terminalScreen = document.getElementById("terminal-screen");
const dashboardContainer = document.getElementById("dashboard-container");
const terminalInput = document.getElementById("terminal-input");

// Only run this if the terminal elements actually exist in the HTML
if (terminalScreen && terminalInput && dashboardContainer) {
  
  // Keep focus on input if user clicks screen
  terminalScreen.addEventListener("click", () => {
    terminalInput.focus();
  });

  // Listen for Enter Key
  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const inputVal = terminalInput.value.trim();
      
      if (inputVal === "4 8 15 16 23 42") {
        terminalScreen.classList.add("hidden");
        dashboardContainer.classList.remove("hidden");
      } else {
        // Wrong sequence, clear screen
        terminalInput.value = "";
      }
    }
  });
}
// ----------------------

// --- Dashboard Logic ---
const postsContainer = document.getElementById("posts-container");
const personnelContainer = document.getElementById("personnel-container"); // NEW

const allCategories = {
  101: { category: "Station 3: The Swan", className: "swan" },
  102: { category: "Station 5: The Pearl", className: "pearl" },
  103: { category: "Station 1: The Hydra", className: "hydra" },
  104: { category: "Station 6: The Orchid", className: "orchid" },
  105: { category: "Station 2: The Arrow", className: "arrow" },
  106: { category: "Station 4: The Staff", className: "staff" },
  107: { category: "Station ? : The Looking Glass", className: "looking-glass" },
  108: { category: "Station 9: The Flame", className: "flame" },
};

const mockDharmaData = {
  users: [
    { id: 1, name: "Jack Shephard", avatar_url: "https://ui-avatars.com/api/?name=Jack+Shephard&background=000&color=fff" },
    { id: 2, name: "John Locke", avatar_url: "https://ui-avatars.com/api/?name=John+Locke&background=000&color=fff" },
    { id: 3, name: "Kate Austen", avatar_url: "https://ui-avatars.com/api/?name=Kate+Austen&background=000&color=fff" },
    { id: 4, name: "James Ford", avatar_url: "https://ui-avatars.com/api/?name=Sawyer+Ford&background=000&color=fff" },
    { id: 5, name: "Hugo Reyes", avatar_url: "https://ui-avatars.com/api/?name=Hugo+Reyes&background=000&color=fff" },
    { id: 6, name: "Benjamin Linus", avatar_url: "https://ui-avatars.com/api/?name=Ben+Linus&background=000&color=fff" },
    { id: 7, name: "Desmond Hume", avatar_url: "https://ui-avatars.com/api/?name=Desmond+Hume&background=000&color=fff" },
    { id: 8, name: "Juliet Burke", avatar_url: "https://ui-avatars.com/api/?name=Juliet+Burke&background=000&color=fff" },
    { id: 9, name: "Sayid Jarrah", avatar_url: "https://ui-avatars.com/api/?name=Sayid+Jarrah&background=000&color=fff" },
    { id: 10, name: "Charlie Pace", avatar_url: "https://ui-avatars.com/api/?name=Charlie+Pace&background=000&color=fff" },
    { id: 11, name: "Sun-Hwa Kwon", avatar_url: "https://ui-avatars.com/api/?name=Sun+Kwon&background=000&color=fff" },
    { id: 12, name: "Jin-Soo Kwon", avatar_url: "https://ui-avatars.com/api/?name=Jin+Kwon&background=000&color=fff" },
    { id: 13, name: "Claire Littleton", avatar_url: "https://ui-avatars.com/api/?name=Claire+Littleton&background=000&color=fff" },
    { id: 14, name: "Michael Dawson", avatar_url: "https://ui-avatars.com/api/?name=Michael+Dawson&background=000&color=fff" },
    { id: 15, name: "Walt Lloyd", avatar_url: "https://ui-avatars.com/api/?name=Walt+Lloyd&background=000&color=fff" },
    { id: 16, name: "Boone Carlyle", avatar_url: "https://ui-avatars.com/api/?name=Boone+Carlyle&background=000&color=fff" },
    { id: 17, name: "Shannon Rutherford", avatar_url: "https://ui-avatars.com/api/?name=Shannon+Rutherford&background=000&color=fff" },
    { id: 18, name: "Ana Lucia Cortez", avatar_url: "https://ui-avatars.com/api/?name=Ana+Lucia&background=000&color=fff" },
    { id: 19, name: "Mr. Eko", avatar_url: "https://ui-avatars.com/api/?name=Mr+Eko&background=000&color=fff" },
    { id: 20, name: "Libby Smith", avatar_url: "https://ui-avatars.com/api/?name=Libby+Smith&background=000&color=fff" },
    { id: 21, name: "Daniel Faraday", avatar_url: "https://ui-avatars.com/api/?name=Daniel+Faraday&background=000&color=fff" },
    { id: 22, name: "Miles Straume", avatar_url: "https://ui-avatars.com/api/?name=Miles+Straume&background=000&color=fff" },
    { id: 23, name: "Charlotte Lewis", avatar_url: "https://ui-avatars.com/api/?name=Charlotte+Lewis&background=000&color=fff" },
    { id: 24, name: "Frank Lapidus", avatar_url: "https://ui-avatars.com/api/?name=Frank+Lapidus&background=000&color=fff" },
    { id: 25, name: "Richard Alpert", avatar_url: "https://ui-avatars.com/api/?name=Richard+Alpert&background=000&color=fff" },
    { id: 26, name: "Pierre Chang", avatar_url: "https://ui-avatars.com/api/?name=Pierre+Chang&background=000&color=fff" },
    { id: 27, name: "Rose Nadler", avatar_url: "https://ui-avatars.com/api/?name=Rose+Nadler&background=000&color=fff" },
    { id: 28, name: "Bernard Nadler", avatar_url: "https://ui-avatars.com/api/?name=Bernard+Nadler&background=000&color=fff" }
  ],
  topic_list: {
    topics: [
      {
        id: 108,
        title: "SYSTEM FAILURE: Execute Protocol 108 minutes.",
        views: 4815,
        posts_count: 109,
        posters: [{ user_id: 7 }, { user_id: 2 }],
        category_id: 101,
        bumped_at: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
      },
      {
        id: 42,
        title: "Radio Tower transmission interference (French loop)",
        views: 1623,
        posts_count: 43,
        posters: [{ user_id: 9 }, { user_id: 17 }, { user_id: 1 }],
        category_id: 108,
        bumped_at: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
      },
      {
        id: 15,
        title: "Temporal displacement anomaly in Sector 7",
        views: 815,
        posts_count: 16,
        posters: [{ user_id: 21 }, { user_id: 7 }, { user_id: 23 }],
        category_id: 104,
        bumped_at: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
      },
      {
        id: 16,
        title: "Not Penny's Boat: Signal Jamming Equipment Status",
        views: 2342,
        posts_count: 8,
        posters: [{ user_id: 10 }, { user_id: 7 }],
        category_id: 107,
        bumped_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
      },
      {
        id: 23,
        title: "Pregnancy progression monitoring: Subject Sun-Hwa",
        views: 4200,
        posts_count: 24,
        posters: [{ user_id: 8 }, { user_id: 11 }, { user_id: 12 }],
        category_id: 106,
        bumped_at: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
      },
      {
        id: 4,
        title: "Tail Section survivors integration protocol",
        views: 481,
        posts_count: 5,
        posters: [{ user_id: 18 }, { user_id: 19 }, { user_id: 20 }, { user_id: 28 }],
        category_id: 105,
        bumped_at: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
      },
      {
        id: 8,
        title: "Orientation Film recording schedule update",
        views: 1516,
        posts_count: 12,
        posters: [{ user_id: 26 }],
        category_id: 101,
        bumped_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
      },
      {
        id: 99,
        title: "Special child phenomena: Bird manifestation",
        views: 108,
        posts_count: 4,
        posters: [{ user_id: 14 }, { user_id: 15 }],
        category_id: 102,
        bumped_at: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
      },
      {
        id: 316,
        title: "Unauthorized aircraft on runway (Ajira 316)",
        views: 3160,
        posts_count: 32,
        posters: [{ user_id: 24 }, { user_id: 1 }, { user_id: 3 }],
        category_id: 103,
        bumped_at: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
      },
      {
        id: 77,
        title: "Hostile movement near Black Rock coordinates",
        views: 8150,
        posts_count: 50,
        posters: [{ user_id: 25 }, { user_id: 2 }, { user_id: 6 }],
        category_id: 102,
        bumped_at: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString(),
      },
      {
        id: 111,
        title: "Medical supply inventory: Vaccines depleted",
        views: 420,
        posts_count: 15,
        posters: [{ user_id: 1 }, { user_id: 8 }, { user_id: 27 }],
        category_id: 106,
        bumped_at: new Date(Date.now() - 1000 * 60 * 60 * 120).toISOString(),
      },
      {
        id: 415,
        title: "Airdrop pallet recovery logistics",
        views: 1542,
        posts_count: 18,
        posters: [{ user_id: 5 }, { user_id: 4 }, { user_id: 16 }],
        category_id: 101,
        bumped_at: new Date(Date.now() - 1000 * 60 * 60 * 168).toISOString(),
      },
      {
        id: 501,
        title: "E.M.P. activity reading from the heart of the island",
        views: 9999,
        posts_count: 108,
        posters: [{ user_id: 22 }, { user_id: 6 }, { user_id: 21 }],
        category_id: 104,
        bumped_at: new Date(Date.now() - 1000 * 60 * 60 * 200).toISOString(),
      }
    ]
  }
};

const forumCategory = (id) => {
  let selectedCategory = {};

  if (allCategories.hasOwnProperty(id)) {
    const { className, category } = allCategories[id];
    selectedCategory.className = className;
    selectedCategory.category = category;
  } else {
    selectedCategory.className = "general";
    selectedCategory.category = "Unknown Sector";
  }
  
  const linkClass = `category ${selectedCategory.className}`;
  return `<span class="${linkClass}">${selectedCategory.category}</span>`;
};

const timeAgo = (time) => {
  const currentTime = new Date();
  const lastPost = new Date(time);

  const timeDifference = currentTime - lastPost;
  const msPerMinute = 1000 * 60;

  const minutesAgo = Math.floor(timeDifference / msPerMinute);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  if (minutesAgo < 60) return `${minutesAgo}m ago`;
  if (hoursAgo < 24) return `${hoursAgo}h ago`;
  return `${daysAgo}d ago`;
};

const viewCount = (views) => {
  const thousands = Math.floor(views / 1000);
  if (views >= 1000) return `${thousands}k`;
  return views;
};

const avatars = (posters, users) => {
  return posters
    .map((poster) => {
      const user = users.find((user) => user.id === poster.user_id);
      if (user) {
        return `<img src="${user.avatar_url}" alt="${user.name}" title="${user.name}" />`;
      }
    })
    .join("");
};

const loadLostData = () => {
  showLatestPosts(mockDharmaData);
};

const showLatestPosts = (data) => {
  const { topic_list, users } = data;
  const { topics } = topic_list;

  // 1. Render Table Rows
  postsContainer.innerHTML = topics.map((item) => {
    const { id, title, views, posts_count, posters, category_id, bumped_at } = item;

    return `
    <tr>
      <td>
        <a class="post-title" href="#">${title}</a>
        ${forumCategory(category_id)}
      </td>
      <td>
        <div class="avatar-container">
          ${avatars(posters, users)}
        </div>
      </td>
      <td>${posts_count - 1}</td>
      <td>${viewCount(views)}</td>
      <td>${timeAgo(bumped_at)}</td>
    </tr>`;
  }).join("");

  // 2. NEW: Render Personnel Roster
  if (personnelContainer) {
    personnelContainer.innerHTML = users.map((user) => {
      // Formatting ID to look like '001', '012', etc.
      const formattedId = user.id.toString().padStart(3, '0');
      return `
        <div class="personnel-card">
          <img src="${user.avatar_url}" alt="${user.name}">
          <div class="personnel-name">${user.name}</div>
          <div class="personnel-id">ID: ${formattedId}</div>
        </div>
      `;
    }).join("");
  }
};

// Start the dashboard data population in the background
loadLostData();