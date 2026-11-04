export type JewelleryArtwork = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  material: string;
  technique: string;
  artist: string;
  description: string[];
  images: string[];
  videos: string[];
  cover?: string | null;
  order: number;
};

export const jewelleryArchive: JewelleryArtwork[] = [
  {
    "slug": "jw-r-005",
    "number": "JW-R-005",
    "title": "Engraved Ring",
    "category": "Rings",
    "year": "2025",
    "material": "Silver",
    "technique": "Traditional hand engraving with burin, rigato",
    "artist": "Chenyi Ye",
    "description": [
      "A wide silver ring with a flat profile, combining classical hand-engraved ornamentation with a finely cut rigato ground. The interplay of engraved motifs and textured surfaces lends depth to the design."
    ],
    "images": [
      "/images/JW-R-005-01.jpg",
      "/images/JW-R-005-02.jpg",
      "/images/JW-R-005-03.jpg"
    ],
    "videos": [],
    "cover": "/images/JW-R-005-01.jpg",
    "order": 1
  },
  {
    "slug": "jw-r-003",
    "number": "JW-R-003",
    "title": "Three-Stone Sapphire Ring",
    "category": "Rings",
    "year": "2026",
    "material": "Silver, Blue Sapphires",
    "technique": "Traditional hand engraving with burin",
    "artist": "Chenyi Ye",
    "description": [
      "A hand-engraved silver ring set with three natural blue sapphires. Ornamental engraving frames the stones, bringing decorative detail to the setting."
    ],
    "images": [
      "/images/JW-R-003-01.jpg",
      "/images/JW-R-003-02.jpg",
      "/images/JW-R-003-03.jpg",
      "/images/JW-R-003-04.jpg"
    ],
    "videos": [],
    "cover": "/images/JW-R-003-01.jpg",
    "order": 2
  },
  {
    "slug": "jw-r-004",
    "number": "JW-R-004",
    "title": "Marquise Tourmaline Ring",
    "category": "Rings",
    "year": "2025",
    "material": "Silver, Tourmaline",
    "technique": "Traditional hand engraving with burin",
    "artist": "Chenyi Ye",
    "description": [
      "A hand-engraved silver ring set with a natural tourmaline. Decorative engraving around the marquise-shaped stone accentuates the setting and its elongated silhouette."
    ],
    "images": [
      "/images/JW-R-004-01.jpg",
      "/images/JW-R-004-02.jpg",
      "/images/JW-R-004-03.jpg"
    ],
    "videos": [],
    "cover": "/images/JW-R-004-01.jpg",
    "order": 3
  },
  {
    "slug": "jw-r-002",
    "number": "JW-R-002",
    "title": "Engraved Ring",
    "category": "Rings",
    "year": "2024",
    "material": "Silver",
    "technique": "Traditional hand engraving with burin, rigato",
    "artist": "Chenyi Ye",
    "description": [
      "A wide, softly domed silver ring decorated with classical hand-engraved motifs over a finely textured rigato ground. The contrast between ornamental cuts and closely spaced lines creates subtle variations in reflected light."
    ],
    "images": [
      "/images/JW-R-002-01.jpg",
      "/images/JW-R-002-02.jpg",
      "/images/JW-R-002-03.jpg"
    ],
    "videos": [],
    "cover": "/images/JW-R-002-01.jpg",
    "order": 4
  },
  {
    "slug": "jw-r-001",
    "number": "JW-R-001",
    "title": "Emerald Ring",
    "category": "Rings",
    "year": "2024",
    "material": "18K Yellow Gold",
    "technique": "Traditional hand engraving with burin",
    "artist": "Chenyi Ye",
    "description": [
      "An 18K yellow gold ring set with an emerald, featuring restrained hand-engraved ornamentation around the gemstone."
    ],
    "images": [
      "/images/JW-R-001-01.jpg",
      "/images/JW-R-001-02.jpg"
    ],
    "videos": [],
    "cover": "/images/JW-R-001-01.jpg",
    "order": 5
  }
];
