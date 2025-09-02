export interface CatalogItem {
  id: number;
  name: string;
  type: "Лист" | "Труба" | "Уголок" | "Швеллер";
  price: number;
  weight: number;
  description: string;
  image: string;
  inStock: boolean;
}

interface CatalogItemProps {
  item: CatalogItem;
  onAddToCart: (item: CatalogItem) => void;
}

export const CatalogItem: React.FC<CatalogItemProps> = ({
  item,
  onAddToCart,
}) => {
  return (
    <div
      style={{
        padding: "16px",
        border: "1px solid #ddd",
        marginBottom: "8px",
        backgroundColor: "#fff",
        minHeight: "auto",
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{ width: "200px", height: "150px", objectFit: "cover" }}
      />
      <h3>{item.name}</h3>
      <p>Тип: {item.type}</p>
      <p>{item.description}</p>
      {Array.from({ length: 2 }, (_, i) => (
        <div key={i} style={{ border: "1px solid #eee", padding: "1px" }}>
          Элемент {i}
        </div>
      ))}
      <button
        onClick={() => onAddToCart(item)}
        disabled={!item.inStock}
        style={{
          padding: "8px 16px",
          backgroundColor: item.inStock ? "#007bff" : "#ccc",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        {item.inStock ? "В корзину" : "Нет в наличии"}
      </button>
    </div>
  );
};
