import { SearchX } from "lucide-react";

export function EmptyView() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <SearchX className="size-20" />

      <div className="max-w-[600px] space-y-3 text-center">
        <h2 className="text-2xl font-bold">Ops! Nenhum filme encontrado!</h2>

        <p className="text-accent-foreground">
          Não conseguimos encontrar o filme que você procurou. Tente pesquisar
          por outros títulos ou explore nossas opções!
        </p>
      </div>
    </div>
  );
}
