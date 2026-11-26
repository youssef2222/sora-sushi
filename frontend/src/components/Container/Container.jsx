
import "./Container.css";

const products = [
  {
    id: 1,
    name: "Huîtres",
    image: "/src/assets/card/Huitres.png", 
    price: 55,
    description: "Huîtres fraîches servies sur glace avec citron et sauce maison.",
  },
  {
    id: 2,
    name: "Asian Pizza",
    image: "/src/assets/card/Asian_Pizza.png",
    price: 85,
    description: "Pizza aux saveurs asiatiques, garnie de fruits de mer et de légumes frais.",
  },
  {
    id: 3,
    name: "Soupes",
    image: "/src/assets/card/Soupes.png",
    price: 45,
    description: "Soupe asiatique chaude et savoureuse, préparée avec des ingrédients frais.",
  },
  {
    id: 4,
    name: "Salades",
    image: "/src/assets/card/Salades.png",
    price: 55,
    description: "Salade fraîche composée de légumes croquants et de sa sauce spéciale.",
  },
  {
    id: 5,
    name: "Ceviches",
    image: "/src/assets/card/Ceviches.png",
    price: 75,
    description: "Poisson frais mariné au citron vert, accompagné de légumes et d'herbes.",
  },
  {
    id: 6,
    name: "Poke Bowls",
    image: "/src/assets/card/Poke_Bowls.png",
    price: 80,
    description: "Bol gourmand de riz, poisson frais, avocat et légumes croquants.",
  },
  {
    id: 7,
    name: "Spring Rolls",
    image: "/src/assets/card/Spring_Rolls.png",
    price: 45,
    description: "Rouleaux frais aux légumes et ingrédients asiatiques, accompagnés de sauce.",
  },
  {
    id: 8,
    name: "Nems 3 Pcs",
    image: "/src/assets/card/Nems_3_Pcs.png",
    price: 40,
    description: "Trois nems croustillants, garnis et servis avec une sauce maison.",
  },
  {
    id: 9,
    name: "Starters Mix",
    image: "/src/assets/card/Starters_Mix.png",
    price: 75,
    description: "Assortiment de spécialités asiatiques croustillantes à partager.",
  },
  {
    id: 10,
    name: "Dynamites",
    image: "/src/assets/card/Dynamites.png",
    price: 70,
    description: "Bouchées croustillantes enrobées d'une sauce dynamite légèrement épicée.",
  },
  {
    id: 11,
    name: "Tempura",
    image: "/src/assets/card/Tempura.png",
    price: 65,
    description: "Crevettes et légumes en tempura, frits dans une pâte légère et croustillante.",
  },
  {
    id: 12,
    name: "Dim Sum",
    image: "/src/assets/card/Dim_Sum.png",
    price: 55,
    description: "Assortiment de bouchées asiatiques délicatement préparées à la vapeur.",
  },
  {
    id: 13,
    name: "Supplement Cuisine",
    image: "/src/assets/card/Supplement_Cuisine.png",
    price: 15,
    description: "Supplément au choix pour accompagner et personnaliser votre plat.",
  },
];

function Container() {
  return (
    <section className="products-section">
      <div className="products-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>

              <div className="product-footer">
                <span className="product-price">
                  {product.price} DH
                </span>
                <button className="add-button">+</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Container;
