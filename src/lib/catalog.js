import flamesHitFrame from "@/assets/flames-hit.jpg";

const asset = (name) =>
  `https://base44.app/api/apps/6acc0a7e6f38eebe1e75673f/files/mp/public/6acc0a7e6f38eebe1e75673f/${name}`;

export const artwork = {
  tripleA: asset("4327acaf5_Triple-A.png"),
  flames: flamesHitFrame,
  spy: asset("bb67aad6b_spy-who-looked-back.png"),
  avengers: asset("f9bffe3c7_the-avengers.png"),
  sith: "https://media.base44.com/images/public/6acc0a7e6f38eebe1e75673f/5a0621b5e_revenge-of-the-sith.webp",
  velocity: asset("5e29fafb7_velocity.png"),
};

export const catalog = [
  {
    title: "Matthew: The Movie",
    year: 2026,
    duration: "1h 37m",
    category: "continue",
    image:
      "https://media.base44.com/images/public/6acc0a7e6f38eebe1e75673f/a05058258_Screenshot2026-10-13225042.png",
    video:
      "https://media.base44.com/videos/public/6acc0a7e6f38eebe1e75673f/51cc4cd43_10133.mp4",
    gradient: ["#1d4ed8", "#111827"],
    description:
      "Relive Matthew's past...",
  },
  {
    title: "The Flames Hit",
    year: 2026,
    duration: "2h 17m",
    category: "continue",
    image: artwork.flames,
    gradient: ["#b91c1c", "#422006"],
    description: "When the Flames start hitting they start winning.",
  },
  {
    title: "The Spy Who Looked Back",
    year: 2026,
    duration: "2h 25m",
    category: "continue",
    image: artwork.spy,
    video:
      "https://media.base44.com/videos/public/6acc0a7e6f38eebe1e75673f/f85ca4991_the-spy-who-looked-back.mp4",
    gradient: ["#172554", "#111827"],
    description:
      "A spy on the run discovers that the biggest threat isn't ahead of him — it is him.",
  },
  {
    title: "The High Marker",
    year: 2026,
    category: "continue",
    gradient: ["#172554", "#111827"],
    description: "A exciting tale about Mark and his intersting marker.",
  },
  {
    title: "Triple A",
    year: 2026,
    duration: "3m 45s",
    category: "continue",
    image: artwork.tripleA,
    video:
      "https://screenapp.io/app/api/public/files/Roek5LSD921rJeDt0RYU1f_4",
    gradient: ["#164e63", "#312e81"],
    description: "Six people come together to put an end to a common enemy.",
  },
  {
    title: "The Outpost",
    year: 2025,
    category: "continue",
    gradient: ["#334155", "#0f172a"],
    description:
      "A remote research team loses contact with the outside world after finding something buried beneath the ice.",
  },
  {
    title: "After Dark",
    year: 2026,
    category: "continue",
    gradient: ["#3f0b23", "#111827"],
    description: "Three friends discover that their town has a second life after midnight.",
  },
  {
    title: "Code Zero",
    year: 2024,
    category: "continue",
    gradient: ["#064e3b", "#172554"],
    description:
      "An ordinary programmer uncovers a security key that powerful people will do anything to recover.",
  },
  {
    title: "Wild Horizon",
    year: 2026,
    category: "continue",
    gradient: ["#713f12", "#1e293b"],
    description: "A survival expedition becomes a fight against a storm no one predicted.",
  },

  {
    title: "The Avengers",
    year: 2012,
    rating: "PG-13",
    duration: "2h 22m",
    categories: ["marvel"],
    image: artwork.avengers,
    video:
      "https://screenapp.io/app/api/public/files/imD5RE1VkbG9Sgr-w4t5C-oM",
    gradient: ["#7f1d1d", "#292524"],
    description:
      "Earth's mightiest heros assemble to defeat the all powerfull Loki, of Asguard.",
  },
  {
    title: "Avengers: Age of Ultron",
    year: 2015,
    rating: "PG-13",
    duration: "2h 21m",
    categories: ["marvel"],
    video:
      "https://screenapp.io/app/api/public/files/6pUPLJr07y5K1ksPMBOwsJqE",
    image:
      "https://media.base44.com/images/public/6acc0a7e6f38eebe1e75673f/f490a67e8_Avengersageofultron.jpg",
    gradient: ["#1e3a5f", "#0f172a"],
    description:
      "When Tony Stark jumpstarts a dormant peacekeeping program, the team must reassemble to stop the villainous Ultron.",
  },
  {
    title: "Avengers: Infinity War",
    year: 2018,
    rating: "PG-13",
    duration: "2h 29m",
    categories: ["marvel"],
    video:
      "https://screenapp.io/app/api/public/files/vxL2QeVtnJAyBWnMhUKBLYqu",
    image:
      "https://media.base44.com/images/public/6acc0a7e6f38eebe1e75673f/5dbc8e54a_war.webp",
    gradient: ["#7c2d12", "#1e1b4b"],
    description:
      "The Avengers must stop Thanos from collecting all of the Infinity Stones and reshaping the universe.",
  },
  {
    title: "Avengers: Endgame",
    year: 2019,
    rating: "PG-13",
    duration: "3h 1m",
    category: "popular",
    categories: ["marvel"],
    video:
      "https://screenapp.io/app/api/public/files/WjMBrDZUkX77PLAMT-U91Njw",
    image:
      "https://media.base44.com/images/public/6acc0a7e6f38eebe1e75673f/5124236a8_AvengersEndgame.webp",
    gradient: ["#1e1b4b", "#111827"],
    description:
      "After Thanos wipes out half of all life, the remaining Avengers attempt one last mission to undo his actions.",
  },
  {
    title: "The Phantom Menace",
    year: 1999,
    rating: "PG",
    duration: "2h 16m",
    categories: ["starwars"],
    image:
      "https://media.base44.com/images/public/6acc0a7e6f38eebe1e75673f/6952e1442_compose.webp",
    gradient: ["#713f12", "#1c1917"],
    description:
      "Two Jedi Knights uncover a sinister plot while protecting a young queen and discovering a boy strong with the Force.",
  },
  {
    title: "Attack of the Clones",
    year: 2002,
    rating: "PG",
    duration: "2h 22m",
    categories: ["starwars"],
    video:
      "https://screenapp.io/app/api/public/files/lZOMn5CL_kip9C7Pu3gkf_i1",
    image:
      "https://media.base44.com/images/public/6acc0a7e6f38eebe1e75673f/d48db68ca_dfa291990a385b2a5f75e54a4fa6f6a2.jpg",
    gradient: ["#7f1d1d", "#1c1917"],
    description:
      "Ten years after the Battle of Naboo, Anakin Skywalker and Padmé Amidala fall in love as the galaxy drifts toward civil war.",
  },
  {
    title: "Revenge of the Sith",
    year: 2005,
    duration: "2h 20m",
    category: "popular",
    categories: ["starwars"],
    image: artwork.sith,
    video:
      "https://screenapp.io/app/api/public/files/oQ0ZAdqld2nTlDp2qgSiDyIT",
    gradient: ["#7f1d1d", "#0f172a"],
    description:
      "As the Clone Wars nears its end, Obi-Wan Kenobi pursues a new threat, while Anakin Skywalker is lured by Chancellor Palpatine into a sinister plot for galactic domination.",
  },
  {
    title: "A New Hope",
    year: 1977,
    rating: "PG",
    duration: "2h 1m",
    categories: ["starwars"],
    video:
      "https://screenapp.io/app/api/public/files/wwYcvzmjmL9661QodTfib8dL",
    image:
      "https://media.base44.com/images/public/6acc0a7e6f38eebe1e75673f/61c476790_Star-Wars-1024x576.jpg",
    gradient: ["#7f1d1d", "#111827"],
    description:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, and two droids to save the galaxy from the Empire's battle station.",
  },
  {
    title: "The Empire Strikes Back",
    year: 1980,
    rating: "PG",
    duration: "2h 4m",
    categories: ["starwars"],
    video:
      "https://screenapp.io/app/api/public/files/klmD0PJ3Biggdw4HwNNXyI3A",
    image:
      "https://media.base44.com/images/public/6acc0a7e6f38eebe1e75673f/8b714e882_663762-h.webp",
    gradient: ["#1e3a5f", "#111827"],
    description:
      "The Empire pursues the scattered Rebel fleet, while Luke trains with Yoda and faces a stunning truth about Darth Vader.",
  },
  {
    title: "Return of the Jedi",
    year: 1983,
    rating: "PG",
    duration: "2h 11m",
    categories: ["starwars"],
    video:
      "https://screenapp.io/app/api/public/files/5h7BWKzJXTbo4lb9MDvMDVwB",
    image:
      "https://media.base44.com/images/public/6acc0a7e6f38eebe1e75673f/6197ffcbd_Jedi.png",
    gradient: ["#14532d", "#111827"],
    description:
      "The Rebels launch a final attack on the second Death Star as Luke confronts Darth Vader and the Emperor.",
  },
  {
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    year: 2003,
    rating: "PG-13",
    duration: "2h 23m",
    categories: ["pirates"],
    video:
      "https://screenapp.io/app/api/public/files/_QqHfqsl_Ps6RNYu0WZB-UuI",
    image:
      "https://media.base44.com/images/public/6acc0a7e6f38eebe1e75673f/13381a5f6_pirate.png",
    gradient: ["#78350f", "#1c1917"],
    description:
      "Blacksmith Will Turner teams up with the eccentric Captain Jack Sparrow to rescue the governor's daughter from a crew of cursed pirates.",
  },
  {
    title: "Pirates of the Caribbean: Dead Man's Chest",
    year: 2006,
    rating: "PG-13",
    duration: "2h 31m",
    categories: ["pirates"],
    video:
      "https://screenapp.io/app/api/public/files/LF94I0AIRrZ8_DK2pe7SkDfc",
    image:
      "https://media.base44.com/images/public/6acc0a7e6f38eebe1e75673f/18748fadd_Dead-Mans-chest.jpeg",
    gradient: ["#064e3b", "#1c1917"],
    description:
      "Jack Sparrow races to recover the heart of Davy Jones to avoid enslaving his soul, as Will and Elizabeth set out to save him.",
  },
  {
    title: "Pirates of the Caribbean: At World's End",
    year: 2007,
    rating: "PG-13",
    duration: "2h 49m",
    categories: ["pirates"],
    video:
      "https://screenapp.io/app/api/public/files/Y5RPWhp4y9PJAhw5sIawNc72",
    image:
      "https://media.base44.com/images/public/6acc0a7e6f38eebe1e75673f/f2e72f25a_atworldsend.jpg",
    gradient: ["#7f1d1d", "#0f172a"],
    description:
      "The allies of Jack Sparrow unite to rescue him from the land of the dead and make a final stand against the East India Trading Company.",
  },
  {
    title: "Pirates of the Caribbean: On Stranger Tides",
    year: 2011,
    rating: "PG-13",
    duration: "2h 16m",
    categories: ["pirates"],
    video:
      "https://screenapp.io/app/api/public/files/eAGsrlnUgMCkx7UR7BXGu8Zg",
    image:
      "https://media.base44.com/images/public/6acc0a7e6f38eebe1e75673f/276239bf1_onstarngertides.jpg",
    gradient: ["#0e7490", "#0f172a"],
    description:
      "Jack Sparrow and Barbossa race to find the Fountain of Youth while facing the notorious pirate Blackbeard.",
  },
  {
    title: "Pirates of the Caribbean: Dead Men Tell No Tales",
    year: 2017,
    rating: "PG-13",
    duration: "2h 9m",
    categories: ["pirates"],
    video:
      "https://screenapp.io/app/api/public/files/kloTIcD13ckYj05nAy_tgydF",
    image:
      "https://media.base44.com/images/public/6acc0a7e6f38eebe1e75673f/0ff4d49e2_deadmen.jpg",
    gradient: ["#0c4a6e", "#0f172a"],
    description:
      "Jack Sparrow is hunted by the ghostly Captain Salazar and must find the Trident of Poseidon to survive.",
  },
  {
    title: "Indiana Jones and the Raiders of the Lost Ark",
    year: 1981,
    rating: "PG",
    duration: "1h 55m",
    categories: ["indianajones"],
    image:
      "https://media.base44.com/images/public/6acc0a7e6f38eebe1e75673f/1ebda54da_indiana-jones-raiders.jpeg",
    gradient: ["#92400e", "#0f172a"],
    description:
      "Archaeologist Indiana Jones races against the Nazis to find the Ark of the Covenant before it can be used as a weapon.",
  },
  {
    title: "Paper Kingdom",
    year: 2025,
    category: "popular",
    gradient: ["#713f12", "#292524"],
    description: "A brilliant strategist assembles an unlikely crew for an impossible heist.",
  },
  {
    title: "The Company",
    year: 2025,
    category: "popular",
    gradient: ["#581c87", "#172554"],
    description: "In the middle of nothing a company was created to save everyone.",
  },
  {
    title: "Night Shift",
    year: 2025,
    category: "popular",
    gradient: ["#450a0a", "#1f2937"],
    description: "A hospital security guard realizes one patient has never appeared on any record.",
  },
  {
    title: "Three Against Three",
    year: 2026,
    category: "popular",
    gradient: ["#3f6212", "#172554"],
    description: "Its a Marty story, with some others as well.",
  },
];

export const heroSlides = [
  {
    title: "The Spy Who Looked Back",
    year: 2026,
    duration: "2h 25m",
    image: artwork.spy,
  },
  { title: "The Flames Hit", year: 2026, duration: "2h 17m", image: artwork.flames },
  {
    title: "Matthew: The Movie",
    year: 2026,
    duration: "1h 37m",
    image:
      "https://media.base44.com/images/public/6acc0a7e6f38eebe1e75673f/a05058258_Screenshot2026-10-13225042.png",
  },
];

export const findTitle = (title) => catalog.find((item) => item.title === title) || null;

export const titlesFor = (category) =>
  catalog.filter((item) => item.category === category || (item.categories || []).includes(category));