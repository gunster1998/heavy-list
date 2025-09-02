"use client";

import { Catalog } from "@/components/Catalog";
import { CatalogItem } from "@/components/CatalogItem";
import { useCatalog } from "@/hooks/useCatalog";
import { useState } from "react";

export const CatalogDemo: React.FC = () => {
  const [cart, setCart] = useState<CatalogItem[]>([]);

  const { catalog, loading, error, refetch } = useCatalog();

  const addToCart = (item: CatalogItem): void => {
    setCart((prev) => [...prev, item]);
  };

  if (loading) return <div>Загрузка каталога...</div>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>🏭 Каталог металлопроката</h1>
      <div style={{ marginBottom: "20px" }}>
        <span>Товаров в корзине: {cart.length}</span>
      </div>
      <Catalog items={catalog} onAddToCart={addToCart} />
    </div>
  );
};
