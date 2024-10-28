//4.1

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const mayor18 = ages.filter((age) => age > 18);

console.log(mayor18);

//4.2

const evenNumbers = ages.filter((number) => number % 2 === 0);

console.log(evenNumbers);

//4.3

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const leagueOfLegends = streamers.filter(
  (streamer) => streamer.gameMorePlayed === "League of Legends"
);

console.log(leagueOfLegends);

//4.4

const streamersConU = streamers.filter(
  (streamer) => streamer.name.includes("u") || streamer.name.includes("U")
);
console.log(streamersConU);

//4.5

const legendsStreamers = streamers.filter((streamer) => {
  if (streamer.gameMorePlayed.includes("Legends")) {
    if (streamer.age > 35) {
      streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    }
    return true;
  }
  return false;
});

console.log(legendsStreamers);
