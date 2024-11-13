import { httpClient } from "./lib/axios";

export function App() {
  httpClient
    .get("/movie/popular?language=pt-BR&page=1")
    .then(({ data }) => console.log(data));

  return <h1>Teste - Tech 4 Humans</h1>;
}
