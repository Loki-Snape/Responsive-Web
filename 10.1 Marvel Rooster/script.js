const characterContainer = document.getElementById('character-container');
const loadMoreBtn = document.getElementById('load-more-btn');

let startingIndex = 0;
let endingIndex = 10; 

// Roster with Wikipedia Slugs AND Image Overrides for restricted pages
const characterDataArr = [
  {
    name: "Iron Man",
    wikiSlug: "Iron_Man",
    imageUrl: "https://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg",
    bio: "Genius. Billionaire. Playboy. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities."
  },
  {
    name: "Spider-Man",
    wikiSlug: "Spider-Man",
    imageUrl: "https://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg",
    bio: "Bitten by a radioactive spider, Peter Parker utilizes his amazing powers to help others."
  },
  {
    name: "Captain America",
    wikiSlug: "Captain_America",
    imageUrl: "https://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087.jpg",
    bio: "Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals."
  },
  {
    name: "Black Widow",
    wikiSlug: "Black_Widow_(Natasha_Romanova)",
    imageUrl: "https://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f395b.jpg",
    bio: "Despite a dark past, Natasha Romanoff has become one of S.H.I.E.L.D.'s most deadly assassins."
  },
  {
    name: "Thor",
    wikiSlug: "Thor_(Marvel_Comics)",
    imageUrl: "https://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350.jpg",
    bio: "The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike."
  },
  {
    name: "Hulk",
    wikiSlug: "Hulk",
    imageUrl: "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg",
    bio: "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed."
  },
  {
    name: "Black Panther",
    wikiSlug: "Black_Panther_(character)",
    imageUrl: "https://i.annihil.us/u/prod/marvel/i/mg/6/60/5261a80a67e7d.jpg",
    bio: "T'Challa is the king of the secretive and highly advanced African nation of Wakanda."
  },
  {
    name: "Doctor Strange",
    wikiSlug: "Doctor_Strange",
    imageUrl: "https://i.annihil.us/u/prod/marvel/i/mg/5/f0/5261a85a501fe.jpg",
    bio: "Formerly a renowned surgeon, Doctor Stephen Strange now serves as the Sorcerer Supreme."
  },
  {
    name: "Captain Marvel",
    wikiSlug: "Captain_Marvel_(Marvel_Comics)",
    imageUrl: "https://i.annihil.us/u/prod/marvel/i/mg/c/10/537ba5ff07aa4.jpg",
    bio: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war."
  },
  {
    name: "Wolverine",
    wikiSlug: "Wolverine_(character)",
    imageUrl: "https://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf.jpg",
    bio: "A mutant with animal-keen senses, enhanced physical capabilities, and powerful regenerative ability."
  },
  {
    name: "Scarlet Witch",
    wikiSlug: "Scarlet_Witch",
    imageUrl: "https://i.annihil.us/u/prod/marvel/i/mg/6/70/5261a7d7c394b.jpg",
    bio: "Wanda Maximoff possesses powerful chaos magic and reality-warping abilities."
  },
  {
    name: "Vision",
    wikiSlug: "Vision_(Marvel_Comics)",
    imageUrl: "https://i.annihil.us/u/prod/marvel/i/mg/9/d0/5111527040594.jpg",
    bio: "An android created by Ultron, Vision turned against his creator to protect humanity."
  },
  {
    name: "Ant-Man",
    wikiSlug: "Ant-Man_(Scott_Lang)",
    bio: "Master thief Scott Lang utilizes advanced technology to shrink in size but increase in strength."
  },
  {
    name: "Hawkeye",
    wikiSlug: "Hawkeye_(Clint_Barton)",
    bio: "Clint Barton is a master marksman and longtime core member of the Avengers."
  },
  {
    name: "Falcon",
    wikiSlug: "Falcon_(Marvel_Comics)",
    bio: "Sam Wilson uses a mechanized exo-suit to fly and fight alongside his closest allies."
  },
  {
    name: "Winter Soldier",
    wikiSlug: "Bucky_Barnes",
    bio: "Bucky Barnes survived a devastating fall to become a brainwashed assassin before reclaiming his identity."
  },
  {
    name: "Star-Lord",
    wikiSlug: "Star-Lord",
    bio: "Peter Quill leads the Guardians of the Galaxy to protect the universe from cosmic threats."
  },
  {
    name: "Gamora",
    wikiSlug: "Gamora",
    bio: "Raised by Thanos to be the deadliest woman in the galaxy, she fights to atone for her past."
  },
  {
    name: "Drax",
    wikiSlug: "Drax_the_Destroyer",
    bio: "A heavily scarred warrior driven by a desire to avenge the death of his family."
  },
  {
    name: "Rocket Raccoon",
    wikiSlug: "Rocket_Raccoon",
    bio: "A genetically enhanced raccoon who loves big guns and blowing things up."
  },
  {
    name: "Groot",
    wikiSlug: "Groot",
    bio: "A sentient, tree-like alien who only says 'I am Groot' but means much more."
  },
  {
    name: "Nebula",
    wikiSlug: "Nebula_(character)",
    bio: "A cyborg assassin who eventually joins forces with her adopted sister Gamora."
  },
  {
    name: "Mantis",
    wikiSlug: "Mantis_(Marvel_Comics)",
    bio: "An empathic alien who uses her powers to sense and alter the emotions of others."
  },
  {
    name: "Daredevil",
    wikiSlug: "Daredevil_(Marvel_Comics_character)",
    bio: "Blinded as a child, Matt Murdock fights crime in Hell's Kitchen using his radar sense."
  },
  {
    name: "Jessica Jones",
    wikiSlug: "Jessica_Jones",
    bio: "A hard-drinking private investigator with super strength and a short temper."
  },
  {
    name: "Luke Cage",
    wikiSlug: "Luke_Cage",
    bio: "A hero for hire with unbreakable skin and superhuman strength."
  },
  {
    name: "Iron Fist",
    wikiSlug: "Iron_Fist_(character)",
    bio: "Danny Rand is a martial arts master who wields the mystical power of the Iron Fist."
  },
  {
    name: "Punisher",
    wikiSlug: "Punisher",
    imageUrl: "https://i.annihil.us/u/prod/marvel/i/mg/3/90/5261675f6b22f.jpg",
    bio: "Frank Castle wages a one-man war on crime using lethal force and military tactics."
  },
  {
    name: "Deadpool",
    wikiSlug: "Deadpool",
    bio: "The Merc with a Mouth. He heals fast, talks constantly, and breaks the fourth wall."
  },
  {
    name: "Cable",
    wikiSlug: "Cable_(character)",
    bio: "A time-traveling mutant soldier from a dystopian future."
  },
  {
    name: "Cyclops",
    wikiSlug: "Cyclops_(Marvel_Comics)",
    bio: "The stoic leader of the X-Men who projects powerful optic blasts from his eyes."
  },
  {
    name: "Jean Grey",
    wikiSlug: "Jean_Grey",
    bio: "A powerful telepath and telekinetic who occasionally hosts the cosmic Phoenix Force."
  },
  {
    name: "Storm",
    wikiSlug: "Storm_(Marvel_Comics)",
    bio: "Ororo Munroe is an Omega-level mutant capable of manipulating the weather."
  },
  {
    name: "Beast",
    wikiSlug: "Beast_(Marvel_Comics)",
    bio: "Hank McCoy possesses a brilliant intellect hidden behind a blue, furry exterior."
  },
  {
    name: "Iceman",
    wikiSlug: "Iceman_(Marvel_Comics)",
    bio: "Bobby Drake can freeze water molecules in the air, creating ice slides and projectiles."
  },
  {
    name: "Rogue",
    wikiSlug: "Rogue_(Marvel_Comics)",
    bio: "A mutant whose physical touch absorbs the memories, abilities, and life force of others."
  },
  {
    name: "Gambit",
    wikiSlug: "Gambit_(Marvel_Comics)",
    bio: "A charming cajun thief who can charge inanimate objects with explosive kinetic energy."
  },
  {
    name: "Nightcrawler",
    wikiSlug: "Nightcrawler_(comics)",
    bio: "A demonic-looking but deeply faithful mutant with the ability to teleport."
  },
  {
    name: "Professor X",
    wikiSlug: "Professor_X",
    bio: "Charles Xavier is the telepathic founder of the X-Men, dreaming of human-mutant peace."
  },
  {
    name: "Magneto",
    wikiSlug: "Magneto_(Marvel_Comics)",
    bio: "The Master of Magnetism, willing to use extreme methods to ensure mutant survival."
  },
  {
    name: "Mystique",
    wikiSlug: "Mystique_(comics)",
    bio: "A shape-shifting assassin with fluid loyalties and a complex history."
  },
  {
    name: "Venom",
    wikiSlug: "Venom_(character)",
    bio: "An alien symbiote bonded with a human host to become a lethal protector."
  },
  {
    name: "Green Goblin",
    wikiSlug: "Green_Goblin",
    bio: "Norman Osborn uses his wealth and intellect to terrorize Spider-Man on his goblin glider."
  },
  {
    name: "Doctor Octopus",
    wikiSlug: "Doctor_Octopus",
    bio: "A brilliant scientist armed with four mechanical, telescoping tentacles."
  },
  {
    name: "Loki",
    wikiSlug: "Loki_(Marvel_Comics)",
    bio: "The Asgardian God of Mischief, constantly scheming to outwit his brother Thor."
  },
  {
    name: "Thanos",
    wikiSlug: "Thanos",
    bio: "The Mad Titan who sought the Infinity Stones to wipe out half of all life in the universe."
  },
  {
    name: "Mr. Fantastic",
    wikiSlug: "Mister_Fantastic",
    bio: "Reed Richards is one of the smartest men alive, with a body that can stretch like rubber."
  },
  {
    name: "Invisible Woman",
    wikiSlug: "Invisible_Woman",
    bio: "Sue Storm can bend light to turn invisible and project powerful force fields."
  },
  {
    name: "Human Torch",
    wikiSlug: "Human_Torch",
    bio: "Johnny Storm can ignite his body in flames and fly, shouting 'Flame On!'"
  },
  {
    name: "The Thing",
    wikiSlug: "Thing_(comics)",
    bio: "Ben Grimm is a rock-skinned powerhouse who loves clobberin' time."
  },
  {
    name: "Doctor Doom",
    wikiSlug: "Doctor_Doom",
    bio: "The tyrannical ruler of Latveria, combining peerless genius with dark sorcery."
  },
  {
    name: "Silver Surfer",
    wikiSlug: "Silver_Surfer",
    bio: "The former herald of Galactus who navigates the cosmos on his silvery board."
  },
  {
    name: "Moon Knight",
    wikiSlug: "Moon_Knight",
    bio: "Marc Spector is the avatar of the Egyptian moon god Khonshu, struggling with multiple personalities."
  },
  {
    name: "Blade",
    wikiSlug: "Blade_(character)",
    bio: "A half-vampire 'Daywalker' who hunts the undead to protect humanity."
  },
  {
    name: "Ghost Rider",
    wikiSlug: "Ghost_Rider",
    bio: "Johnny Blaze made a deal with the devil, becoming a blazing skeleton on a hellish motorcycle."
  },
  {
    name: "Shang-Chi",
    wikiSlug: "Shang-Chi",
    bio: "The Master of Kung Fu, an unparalleled martial artist trained from birth."
  },
  {
    name: "Miles Morales",
    wikiSlug: "Miles_Morales",
    bio: "A Brooklyn teenager who takes up the mantle of Spider-Man after gaining similar spider-like abilities."
  }
];

const initApp = () => {
  displayCharacters(characterDataArr.slice(startingIndex, endingIndex));
};

const fetchMoreCharacters = () => {
  startingIndex += 10;
  endingIndex += 10;

  displayCharacters(characterDataArr.slice(startingIndex, endingIndex));
  
  if (endingIndex >= characterDataArr.length) {
    loadMoreBtn.disabled = true;
    loadMoreBtn.textContent = 'End of Roster';
    loadMoreBtn.style.cursor = 'not-allowed';
  }
};

const displayCharacters = (characters) => {
  characters.forEach(({ name, wikiSlug, bio, imageUrl }, index) => {
    const imgId = `img-${startingIndex + index}`;
    const wikiUrl = `https://en.wikipedia.org/wiki/${wikiSlug}`;
    
    // Create a fallback avatar
    const placeholderImg = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=ed1d24&color=fff&size=250`;
    
    // If an explicit image is provided in the array, use it right away. Otherwise, use the placeholder.
    const initialImgSrc = imageUrl ? imageUrl : placeholderImg;

    characterContainer.innerHTML += `
    <div class="user-card">
      <img id="${imgId}" class="user-img" src="${initialImgSrc}" alt="${name} avatar">
      <div class="red-divider"></div>
      <h2 class="character-name">${name}</h2>
      <p class="bio">${bio.length > 60 ? bio.slice(0, 60) + '...' : bio}</p>
      <a class="author-link" href="${wikiUrl}" target="_blank">View Wikipedia Page</a>
    </div>
  `;

    // Only ask Wikipedia for an image if we didn't already provide a custom one
    if (!imageUrl) {
      fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${wikiSlug}`)
        .then(response => response.json())
        .then(data => {
          if (data.thumbnail && data.thumbnail.source) {
            document.getElementById(imgId).src = data.thumbnail.source;
          }
        })
        .catch(error => console.log(`Could not load Wikipedia image for ${name}`));
    }
  });
};

loadMoreBtn.addEventListener('click', fetchMoreCharacters);

// Run initialization
initApp();