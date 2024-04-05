import { useQuery } from "react-query";
import { fetchDataFromApi } from "../utils/utils";

export const useAutocompleteQuery = (inputValue: string) => {
  return useQuery({
    queryKey: ["autocomplete", inputValue],
    queryFn: () => fetchDataFromApi(inputValue),
  });
};