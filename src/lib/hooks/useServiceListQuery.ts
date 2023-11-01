import { useQuery } from "@tanstack/react-query";
import { ServicesApi } from "../api/services-api";

export function useServiceListQuery() {
  const context = useQuery({
    queryKey: ["serviceList-all"],
    queryFn: () => ServicesApi.getServiceList(),
  });

  return context;
}
