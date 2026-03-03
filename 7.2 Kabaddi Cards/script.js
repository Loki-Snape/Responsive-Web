const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

const myFavoriteKabaddiTeam = {
  team: "Pro Kabaddi All-Stars",
  sport: "Kabaddi",
  year: 2026,
  isWinner: true,
  headCoach: {
    coachName: "Sanjeev Baliyan",
    matches: 22,
  },
  players: [
    { name: "Pardeep Narwal", position: "raider", number: 9, isCaptain: false, nickname: "Record Breaker" },
    { name: "Fazel Atrachali", position: "defender", number: 7, isCaptain: true, nickname: "Sultan" },
    { name: "Pawan Sehrawat", position: "raider", number: 17, isCaptain: false, nickname: "Hi-Flyer" },
    { name: "Rahul Chaudhari", position: "raider", number: 1, isCaptain: false, nickname: "Showman" },
    { name: "Deepak Niwas Hooda", position: "all-rounder", number: 10, isCaptain: false, nickname: null },
    { name: "Sachin Tanwar", position: "raider", number: 99, isCaptain: false, nickname: null },
    { name: "Ayan Lochab", position: "raider", number: 11, isCaptain: false, nickname: null },
    { name: "Devank", position: "raider", number: 22, isCaptain: false, nickname: null },
    { name: "Meraj Sheykh", position: "all-rounder", number: 5, isCaptain: false, nickname: "Magician" },
    { name: "Manjeet Chhillar", position: "all-rounder", number: 4, isCaptain: false, nickname: "Mighty Manjeet" },
    { name: "Sandeep Narwal", position: "all-rounder", number: 2, isCaptain: false, nickname: "The Beast" },
    { name: "Naveen Kumar", position: "raider", number: 10, isCaptain: false, nickname: "Naveen Express" },
    { name: "Mohammadreza Shadloui", position: "all-rounder", number: 1, isCaptain: false, nickname: null },
    { name: "Surender Nada", position: "defender", number: 8, isCaptain: false, nickname: null },
    { name: "Dharmaraj Cheralathan", position: "defender", number: 3, isCaptain: false, nickname: "Anna" },
    { name: "Anup Kumar", position: "raider", number: 31, isCaptain: false, nickname: "Captain Cool" },
    { name: "Ajay Thakur", position: "raider", number: 21, isCaptain: false, nickname: "Iceman" },
    { name: "Vishal Bhardwaj", position: "defender", number: 55, isCaptain: false, nickname: null },
    { name: "Girish Ernak", position: "defender", number: 6, isCaptain: false, nickname: null },
    { name: "Monu Goyat", position: "raider", number: 12, isCaptain: false, nickname: null },
    { name: "Sagar Rathee", position: "defender", number: 44, isCaptain: false, nickname: null },
    { name: "Arjun Deshwal", position: "raider", number: 13, isCaptain: false, nickname: "The Raid Machine" },
    { name: "Sunil Kumar", position: "defender", number: 14, isCaptain: false, nickname: null },
    { name: "Parvesh Bhainswal", position: "defender", number: 15, isCaptain: false, nickname: null },
    { name: "Nitin Tomar", position: "raider", number: 16, isCaptain: false, nickname: null },
    { name: "Surjeet Singh", position: "defender", number: 18, isCaptain: false, nickname: null },
    { name: "Jang Kun Lee", position: "raider", number: 19, isCaptain: false, nickname: null },
    { name: "Rohit Kumar", position: "raider", number: 20, isCaptain: false, nickname: null },
    { name: "Maninder Singh", position: "raider", number: 23, isCaptain: false, nickname: null },
    { name: "Siddharth Desai", position: "raider", number: 24, isCaptain: false, nickname: "Baahubali" }
  ],
};

Object.freeze(myFavoriteKabaddiTeam);
const { sport, team, year, players } = myFavoriteKabaddiTeam;
const { coachName } = myFavoriteKabaddiTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML = arr
    .map(
      ({ name, position, number, isCaptain, nickname }) => {
        return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      ` }
    )
    .join("");
};

setPlayerCards();

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "raider":
      setPlayerCards(players.filter((player) => player.position === "raider"));
      break;
    case "defender":
      setPlayerCards(players.filter((player) => player.position === "defender"));
      break;
    case "all-rounder":
      setPlayerCards(players.filter((player) => player.position === "all-rounder"));
      break;
    default:
      setPlayerCards();
  }
});