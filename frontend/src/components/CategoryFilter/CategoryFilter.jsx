
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

import "./CategoryFilter.css";

function CategoryFilter() {

  const categories = [
    "Tout",
    "Panda Express",
    "Huîtres",
    "Asian Pizza",
    "Soupes",
    "Salades",
    "Ceviches",
    "Poke Bowls",
    "Spring Rolls",
    "Nems 3 Pcs",
    "Starters Mix",
    "Dynamites",
    "Tempura",
    "Dim Sum",
    "Supplement Cuisine",
    "Fried Rolls 6 Pcs",
    "Crispy Nobu Style",
    "Nachos",
    "Supplement Bar",
    "Fried Rolls 8 Pcs"
  ];

  const scrollRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState("Tout");

  // Scroll vers la gauche
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  };

  // Scroll vers la droite
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  };

  return (
    <section className="category_section">

        {/* Barre de recherche */}
            <div className="header_search">
            <Search size={22} />

            <input
                type="text"
                placeholder="Rechercher des plats, des catégories..."
            />
            </div>

      <h3 className="category_title">Catégories</h3>

      <div className="category_container">

        <button
          className="category_arrow"
          onClick={scrollLeft}
          aria-label="Catégories précédentes"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="category_list" ref={scrollRef}>

          {categories.map((category, index) => (
            <button
              key={`${category}-${index}`}
              className={`category_item ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}

        </div>

        <button
          className="category_arrow"
          onClick={scrollRight}
          aria-label="Catégories suivantes"
        >
          <ChevronRight size={22} />
        </button>

      </div>

    </section>
  );
}

export default CategoryFilter;
