import { useSearchParams } from "react-router-dom";

export function useSortSelectController() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy");

  function handleSort(sortBy: string) {
    setSearchParams((prevParams) => {
      prevParams.delete("page");
      prevParams.set("sortBy", sortBy);

      return prevParams;
    });
  }

  return {
    sortBy,
    handleSort
  };
}
