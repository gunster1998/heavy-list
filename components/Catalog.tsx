"use client";

import { CatalogItem } from "@/components/CatalogItem";

interface CatalogProps {
  items: CatalogItem[];
  onAddToCart: (item: CatalogItem) => void;
}

export const Catalog: React.FC<CatalogProps> = ({ items, onAddToCart }) => {
  return (
    <div style={{ maxHeight: "400px", overflowY: "auto" }}>
      {items.map((item) => (
        <CatalogItem key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};
