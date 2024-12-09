export const GENRES = [
  "Ação",
  "Aventura",
  "Cinema de arte",
  "Comédia",
  "Comédia de ação",
  "Comédia de terror",
  "Comédia dramática",
  "Comédia romântica",
  "Dança",
  "Documentário",
  "Drama",
  "Espionagem",
  "Faroeste",
  "Fantasia",
  "Ficção científica",
  "Filmes de guerra",
  "Filme policial",
  "Mistério",
  "Musical",
  "Romance",
  "Terror",
  "Thriller"
] as const;

export const GENRES_IDS: Record<(typeof GENRES)[number], number> = {
  Ação: 28,
  Aventura: 12,
  "Cinema de arte": 99,
  Comédia: 35,
  "Comédia de ação": 28,
  "Comédia de terror": 27,
  "Comédia dramática": 35,
  "Comédia romântica": 10749,
  Dança: 10402,
  Documentário: 99,
  Drama: 18,
  Espionagem: 10768,
  Faroeste: 37,
  Fantasia: 14,
  "Ficção científica": 878,
  "Filmes de guerra": 10752,
  "Filme policial": 80,
  Mistério: 9648,
  Musical: 10402,
  Romance: 10749,
  Terror: 27,
  Thriller: 53
} as const;