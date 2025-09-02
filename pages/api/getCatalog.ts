import { CatalogItem } from "@/components/CatalogItem";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

const generateCatalogData = (count: number = 5000): CatalogItem[] => {
  const types = ["Лист", "Труба", "Уголок", "Швеллер"] as const;
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Металлопрокат ${i + 1}`,
    type: (["Лист", "Труба", "Уголок", "Швеллер"] as const)[i % 4],
    price: 1000 + ((i * 137) % 10000),
    weight: 10 + ((i * 23) % 100),
    description: `Высококачественный металлопрокат для промышленного использования. Соответствует ГОСТ стандартам. Товар №${i + 1}. Дополнительная информация о свойствах материала, технических характеристиках и области применения.`,
    image: `https://picsum.photos/200/150?random=${i}`,
    inStock: (i * 7) % 5 !== 0,
  }));
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CatalogItem[] | { error: string }>
) {
  try {
    // if (Math.random() < 0.3) {
    //   // 30% вероятность ошибки
    //   throw new Error("Случайная ошибка при генерации данных каталога");
    // }
    const result = generateCatalogData();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Неизвестная ошибка" });
  }
}
