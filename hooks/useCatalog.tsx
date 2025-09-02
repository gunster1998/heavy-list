import { CatalogItem } from "@/components/CatalogItem";
import { useEffect, useState } from "react";

export const useCatalog = () => {
  const [catalog, setCatalog] = useState<CatalogItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCatalog = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/getCatalog");

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      const data: CatalogItem[] = await response.json();
      setCatalog(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Неизвестная ошибка");
      console.error("Ошибка загрузки каталога:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatalog();
  }, []);

  return { catalog, loading, error, refetch: fetchCatalog };
};
