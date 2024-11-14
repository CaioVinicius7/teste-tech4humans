import type { FormEvent } from "react";
import { useSearchParams } from "react-router-dom";

export function useSearchInputController() {
  const [, setSearchParams] = useSearchParams();

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const search = formData.get("search")!.toString();

    setSearchParams((prevPrams) => {
      prevPrams.delete("page");
      prevPrams.delete("sortBy");
      prevPrams.set("search", search);

      return prevPrams;
    });
  }

  return {
    handleSearch
  };
}
