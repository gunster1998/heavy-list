"use client";
import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

import { CatalogItem } from "@/components/CatalogItem";

interface CatalogProps {
  items: CatalogItem[];
  onAddToCart: (item: CatalogItem) => void;
}

export const CatalogList: React.FC<CatalogProps> = ({ items, onAddToCart }) => {
  const parentRef = useRef<HTMLDivElement | null>(null);

  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 400,
    overscan: 5,
    measureElement: (el) => el.getBoundingClientRect().height,
  });

  const virualItems = rowVirtualizer.getVirtualItems();

  return (
    <div
      ref={parentRef}
      style={{ maxHeight: "400px", overflowY: "auto", position: "relative" }}
    >
      <div
        style={{ height: rowVirtualizer.getTotalSize(), position: "relative" }}
      >
        {virualItems.map((vi) => {
          const item = items[vi.index];
          return (
            <div
              key={item.id}
              ref={
                rowVirtualizer.measureElement as unknown as React.Ref<HTMLDivElement>
              }
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "500px",
                transform: `translateY(${vi.start}px)`,
              }}
            >
              <CatalogItem
                key={item.id}
                item={item}
                onAddToCart={onAddToCart}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
