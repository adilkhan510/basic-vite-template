import { useQuery } from "@tanstack/react-query";
import { getDuas } from "./request";

export const useGetDuas = () => {
  return useQuery({
    queryKey: ["duas"],
    queryFn: () => getDuas(),
  });
};
