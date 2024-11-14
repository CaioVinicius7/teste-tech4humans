import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";

export function useSearchInputController() {
  const [search, setSearch] = useState("");
  const [, setSearchParams] = useSearchParams();

  function handleChangeSearch(search: string) {
    setSearch(search);
  }

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSearchParams((prevPrams) => {
      prevPrams.delete("page");
      prevPrams.delete("sortBy");
      prevPrams.set("search", search);

      return prevPrams;
    });
  }

  function handleClearSearch() {
    setSearch("");

    setSearchParams((prevPrams) => {
      prevPrams.delete("search");

      return prevPrams;
    });
  }

  return {
    search,
    handleChangeSearch,
    handleClearSearch,
    handleSearch
  };
}
