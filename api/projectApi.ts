import { useEffect, useState } from "react";
import { CatalogItem } from "@/components/CatalogItem";
import { api } from "@/api/axiosInstance";
export const ProjectApi = {
  getCatalog: async (): Promise<CatalogItem[]> => {
    const { data } = await api.get<CatalogItem[]>("/getCatalog");

    return data;
  },
};
