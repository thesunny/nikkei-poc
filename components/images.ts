export const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

// Curated Japanese-themed Unsplash photographs.
// Each entry is { src, alt }; pages reference by key.
export const IMG = {
  toriiSky: {
    src: u("1545569341-9eb8b30979d9"),
    alt: "A red torii gate framed against the open sky.",
  },
  festivalLanterns: {
    src: u("1528360983277-13d401cdc186"),
    alt: "Paper lanterns lit at a Japanese street festival.",
  },
  garden: {
    src: u("1492571350019-22de08371fd3"),
    alt: "A tranquil Japanese stroll garden with stone path and moss.",
  },
  temple: {
    src: u("1480796927426-f609979314bd"),
    alt: "Traditional Japanese temple architecture in soft light.",
  },
  architecture: {
    src: u("1493780474015-ba834fd0ce2f"),
    alt: "Detail of traditional Japanese roof and woodwork.",
  },
  lanternsRow: {
    src: u("1503899036084-c55cdd92da26"),
    alt: "A row of red Japanese paper lanterns.",
  },
  alley: {
    src: u("1528164344705-47542687000d"),
    alt: "An atmospheric Japanese alley at dusk.",
  },
  cherryBlossom: {
    src: u("1542640244-7e672d6cef4e"),
    alt: "Cherry blossoms in soft afternoon light.",
  },
  matsuriCrowd: {
    src: u("1526481280693-3bfa7568e0f3"),
    alt: "A bustling Japanese matsuri street scene.",
  },
  cityNight: {
    src: u("1554189097-ffe88e998a2b"),
    alt: "Quiet Japanese street life at night.",
  },
  shrineDetail: {
    src: u("1540206395-68808572332f"),
    alt: "Close detail of a Japanese shrine.",
  },
  pagoda: {
    src: u("1532153975070-2e9ab71f1b14"),
    alt: "A pagoda silhouetted in evening light.",
  },
  zenStones: {
    src: u("1581873372796-635b67ca2008"),
    alt: "Stones and raked gravel in a Zen garden.",
  },
  bamboo: {
    src: u("1542816417-0983c9c9ad53"),
    alt: "A bamboo forest path.",
  },
  teaCeremony: {
    src: u("1607705703571-c5a8695f18f6"),
    alt: "A tea ceremony in progress.",
  },
  workshop: {
    src: u("1576444356170-66073046b1bc"),
    alt: "Hands at work on a traditional craft.",
  },
  origami: {
    src: u("1576675784201-0e142b423952"),
    alt: "Folded paper origami arranged in soft light.",
  },
  calligraphy: {
    src: u("1610792516775-01de03eae630"),
    alt: "An ink brush poised over rice paper.",
  },
  ramen: {
    src: u("1496449903678-68ddcb189a24"),
    alt: "A bowl of ramen on a wooden counter.",
  },
  sushi: {
    src: u("1591814468924-caf88d1232e1"),
    alt: "Carefully plated nigiri sushi.",
  },
  paperUmbrella: {
    src: u("1601814933824-fd0b574dd592"),
    alt: "Hand-painted Japanese paper umbrellas.",
  },
  taiko: {
    src: u("1595257841889-eca2678454e2"),
    alt: "Taiko drummers mid-performance.",
  },
  bookshop: {
    src: u("1517722014278-c256a91a6fba"),
    alt: "A quiet bookshop interior.",
  },
  bonsai: {
    src: u("1554188248-986adbb73be4"),
    alt: "A bonsai tree in close detail.",
  },
  archive: {
    src: u("1622279457486-62dcc4a431d6"),
    alt: "Archival materials laid out on a research table.",
  },
};

export type ImgKey = keyof typeof IMG;
