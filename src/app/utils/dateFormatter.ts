import { format, parse } from "date-fns";
import { ptBR } from "date-fns/locale";

export function dateFormatter(date: string) {
  const parsedDate = parse(date, "yyyy-MM-dd", new Date());

  return format(parsedDate, "dd/MM/yyyy", { locale: ptBR });
}
