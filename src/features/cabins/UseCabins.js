import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
    // staleTime: 1000 * 60 * 5, // 5 minutes
    // refetchInterval: 1000 * 60 * 5, // 5 minutes
    // suspense: true,
  });
  return { isLoading, error, cabins };
}
