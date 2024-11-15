import { Search, X } from "lucide-react";

import { Button } from "@/view/components/ui/button";
import { Input } from "@/view/components/ui/input";

import { useSearchInputController } from "./useSearchInputController";

export function SearchInput() {
  const { search, handleChangeSearch, handleClearSearch, handleSearch } =
    useSearchInputController();

  return (
    <form
      onSubmit={handleSearch}
      className="relative flex w-full items-center rounded focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 md:max-w-[350px]"
    >
      <Input
        value={search}
        onChange={(e) => handleChangeSearch(e.target.value)}
        name="search"
        placeholder="Qual filme Deseja pesquisar?"
        autoComplete="off"
        className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />

      <Button
        data-testid="searchButton"
        className="rounded-l-none bg-[#032541] hover:bg-[#507ea3]"
      >
        <Search className="size-4" />
      </Button>

      {!!search && (
        <button
          type="button"
          data-testid="clearSearchButton"
          onClick={handleClearSearch}
          className="absolute right-12 h-full p-2"
        >
          <X className="size-4" />
        </button>
      )}
    </form>
  );
}
