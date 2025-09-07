import { CatalogItem } from "@/components/CatalogItem";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProjectApi } from "@/api/projectApi";
export const useCatalog = () => {
  const { data, isSuccess, isError, isPending } = useQuery<CatalogItem[]>({
    queryKey: ["catalog"],
    queryFn: ProjectApi.getCatalog,
    staleTime: 1000 * 60 * 5,
    gcTime: 24 * 60 * 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return { catalog: data ?? [], isPending, isError };
};
