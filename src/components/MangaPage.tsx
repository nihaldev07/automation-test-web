// src/components/MangaPage.tsx
import React, { useState } from "react";

interface Manga {
  id: number;
  name: string;
  img: string;
  summary: string;
  createdDate: string;
}

const mangaList: Manga[] = [
  {
    id: 1,
    name: "Naruto",
    img: "https://res.cloudinary.com/emerging-it/image/upload/v1724240585/mangaImage/bblqwtoe8fvefzdb7eie.jpg",
    summary:
      "A young ninja strives to become the strongest in his village and earn the title of Hokage.",
    createdDate: "1999-09-21",
  },
  {
    id: 2,
    name: "One Piece",
    img: "https://res.cloudinary.com/emerging-it/image/upload/v1724240584/mangaImage/knbfiyfhkfsl5468phnx.jpg",
    summary:
      "A pirate named Monkey D. Luffy embarks on a quest to find the legendary treasure One Piece.",
    createdDate: "1997-07-22",
  },
  {
    id: 3,
    name: "Dragon Ball Z",
    img: "https://res.cloudinary.com/emerging-it/image/upload/v1724240584/mangaImage/lxrlmia9jqvrdbei2vob.jpg",
    summary:
      "Goku, an extraordinary warrior, battles powerful enemies to protect Earth.",
    createdDate: "1984-12-03",
  },
  {
    id: 4,
    name: "Attack on Titan",
    img: "https://res.cloudinary.com/emerging-it/image/upload/v1724240584/mangaImage/lyj3i7qwtp3f2qz59so1.jpg",
    summary:
      "Humanity fights for survival against giant humanoid Titans that have brought civilization to the brink of extinction.",
    createdDate: "2009-09-09",
  },
  {
    id: 5,
    name: "Death Note",
    img: "https://res.cloudinary.com/emerging-it/image/upload/v1724240585/mangaImage/l3uw5q8jarstnzzljffl.jpg",
    summary:
      "A high school student discovers a mysterious notebook that allows him to kill anyone by writing their name.",
    createdDate: "2003-12-01",
  },
  {
    id: 6,
    name: "Fullmetal Alchemist",
    img: "https://res.cloudinary.com/emerging-it/image/upload/v1724240586/mangaImage/we45epqfa4gew9sfraxd.jpg",
    summary:
      "Two brothers use alchemy in a quest to find the Philosopher’s Stone to restore their bodies.",
    createdDate: "2001-07-12",
  },
  {
    id: 7,
    name: "Bleach",
    img: "https://res.cloudinary.com/emerging-it/image/upload/v1724240585/mangaImage/atlc7efewppsgeyr6mgu.jpg",
    summary:
      "A teenager gains the abilities of a Soul Reaper and must protect the living and the dead from evil spirits.",
    createdDate: "2001-08-07",
  },
  {
    id: 8,
    name: "Fairy Tail",
    img: "https://res.cloudinary.com/emerging-it/image/upload/v1724240585/mangaImage/hbyazbckgrnwswndosve.jpg",
    summary:
      "A young wizard joins a guild and embarks on magical adventures with her friends.",
    createdDate: "2006-08-02",
  },

  {
    id: 9,
    name: "My Hero Academia",
    img: "https://res.cloudinary.com/emerging-it/image/upload/v1724240583/mangaImage/dbhex0n5qqsmonamwqdx.jpg",
    summary:
      "In a world where nearly everyone has superpowers, a boy without powers still dreams of becoming a hero.",
    createdDate: "2014-07-07",
  },
  {
    id: 10,
    name: "Demon Slayer",
    img: "https://res.cloudinary.com/emerging-it/image/upload/v1724240585/mangaImage/lpkxa7gr8lelam9zaikz.jpg",
    summary:
      "A young boy becomes a demon slayer after his family is slaughtered by demons and his sister is turned into one.",
    createdDate: "2016-02-15",
  },
  {
    id: 11,
    name: "Haikyuu",
    img: "https://res.cloudinary.com/emerging-it/image/upload/v1724240585/mangaImage/i7bnsh7jlieo1cdq1zvi.jpg",
    summary:
      "A high school volleyball team overcomes various challenges in their quest to become the best in Japan.",
    createdDate: "2012-02-20",
  },
];

const MangaPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResult, setSearchResult] = useState<Manga[] | string>(mangaList);
  const [selectedManga, setSelectedManga] = useState<Manga | null>(null);

  const handleSearch = () => {
    const result = mangaList.filter((manga) =>
      manga.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResult(result.length > 0 ? result : "No manga found");
  };

  const handleShowDetails = (manga: Manga) => {
    setSelectedManga(manga);
  };

  const handleCloseModal = () => {
    setSelectedManga(null);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Manga You Should Read</h1>
      <div className="w-full flex justify-center items-center mb-6">
        <input
          id="manga-search"
          type="text"
          placeholder="Search Manga"
          className="w-full max-w-lg px-3 py-2  border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 text-white py-2 px-4 rounded mr-2"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {searchResult === "No manga found" ? (
          <p className="text-red-500">{searchResult}</p>
        ) : (
          (searchResult as Manga[]).map((manga) => (
            <div
              key={manga.id}
              className="bg-white p-4 border rounded-lg shadow-lg"
            >
              <img
                src={manga.img}
                alt={manga.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2" id="manga-name">
                {manga.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {manga.summary.length > 100
                  ? `${manga.summary.substring(0, 100)}...`
                  : manga.summary}{" "}
                {manga.summary.length > 100 && (
                  <span
                    onClick={() => handleShowDetails(manga)}
                    className="text-blue-500 cursor-pointer"
                  >
                    Details
                  </span>
                )}
              </p>
              <p className="text-gray-500 text-sm">
                Published: {manga.createdDate}
              </p>
            </div>
          ))
        )}
      </div>

      {selectedManga && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <img
              src={selectedManga.img}
              alt={selectedManga.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{selectedManga.name}</h3>
            <p className="text-gray-600 mb-4">{selectedManga.summary}</p>
            <button
              onClick={handleCloseModal}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MangaPage;
