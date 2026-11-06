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
    "slug": "jw-w-010",
    "number": "JW-W-010",
    "title": "Magnolia & Cats",
    "category": "Wedding Bands",
    "year": "2026",
    "material": "18K White Gold",
    "technique": "Traditional hand engraving with burin, rigato",
    "artist": "Chenyi Ye",
    "description": [
      "Wedding bands with a rigato-textured ground, hand-engraved with magnolia blossoms and the clients’ cats."
    ],
    "images": [
      "/images/JW-W-010-01.jpg",
      "/images/JW-W-010-02.jpg"
    ],
    "videos": [
      "/videos/JW-W-010-03.mp4"
    ],
    "cover": "/images/JW-W-010-01.jpg",
    "order": 1
  },
  {
    "slug": "jw-w-011",
    "number": "JW-W-011",
    "title": "Rabbit & Rat",
    "category": "Wedding Bands",
    "year": "2026",
    "material": "18K White Gold, Blue Sapphire",
    "technique": "Traditional hand engraving with burin, rigato",
    "artist": "Chenyi Ye",
    "description": [
      "Wedding bands featuring a rigato-textured ground, classical Florentine motifs and Chinese zodiac animals: a rabbit and a rat."
    ],
    "images": [
      "/images/JW-W-011-01.jpg",
      "/images/JW-W-011-02.jpg",
      "/images/JW-W-011-04.jpg"
    ],
    "videos": [
      "/videos/JW-W-011-03.mp4"
    ],
    "cover": "/images/JW-W-011-01.jpg",
    "order": 2
  },
  {
    "slug": "jw-w-013",
    "number": "JW-W-013",
    "title": "Oak Leaves",
    "category": "Wedding Bands",
    "year": "2026",
    "material": "18K White Gold, Diamond",
    "technique": "Traditional hand engraving with burin",
    "artist": "Chenyi Ye",
    "description": [],
    "images": [
      "/images/JW-W-013-01.jpg"
    ],
    "videos": [],
    "cover": "/images/JW-W-013-01.jpg",
    "order": 3
  },
  {
    "slug": "jw-w-014",
    "number": "JW-W-014",
    "title": "Minimalist Bands",
    "category": "Wedding Bands",
    "year": "2026",
    "material": "18K White Gold, Blue Sapphire, Tsavorite Garnet",
    "technique": "Traditional hand engraving with burin, rigato",
    "artist": "Chenyi Ye",
    "description": [
      "Minimalist wedding bands finished with rigato engraving and set respectively with a blue sapphire and a tsavorite garnet."
    ],
    "images": [
      "/images/JW-W-014-01.jpg",
      "/images/JW-W-014-02.jpg"
    ],
    "videos": [],
