import { format, isValid, parse } from "date-fns";
import { ptBR } from "date-fns/locale";

export function dateFormatter(date: string) {
  const parsedDate = parse(date, "yyyy-MM-dd", new Date());

  if (!isValid(parsedDate)) {
    return "Invalid date";
  }

  return format(parsedDate, "dd/MM/yyyy", { locale: ptBR });
}
