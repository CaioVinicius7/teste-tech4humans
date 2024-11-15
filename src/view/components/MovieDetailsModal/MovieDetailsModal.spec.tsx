import { render, screen } from "@testing-library/react";

import { TestProviders } from "../../../../test/utils/providers";
import { MovieDetailsModal } from ".";

vi.mock("@/app/hooks/useMovieDialog", () => ({
  useMovieDialog: vi.fn().mockReturnValue({
    isOpen: true,
    movie: {
      adult: false,
      backdropPath: "/18TSJF1WLA4CkymvVUcKDBwUJ9F.jpg",
      genreIds: [],
      id: 1034541,
      originalLanguage: "en",
      originalTitle: "Terrifier 3",
      overview:
        "O palhaço assassino Art está pronto para espalhar o caos sobre os moradores inocentes do Condado de Miles durante uma pacífica véspera de Natal.",
      popularity: 2813.154,
      posterPath: "/gU9ubNnaDKYBxs1DCSfiUIqHSMR.jpg",
      releaseDate: "2024-10-09",
      title: "Terrifier 3",
      video: false,
      voteAverage: 6.933,
      voteCount: 915
    },
    movieVideoKey: "dQw4w9WgXcQ",
    openMovieModal: vi.fn(),
    closeMovieModal: vi.fn()
  })
}));

describe("MovieDetailsModal", () => {
  beforeEach(() => {
    render(<MovieDetailsModal />, {
      wrapper: TestProviders
    });
  });

  it("Should be able to render modal correctly", async () => {
    const movieOriginalName = screen.getByText("Terrifier 3");
    const movieOverview = screen.getByText(
      "O palhaço assassino Art está pronto para espalhar o caos sobre os moradores inocentes do Condado de Miles durante uma pacífica véspera de Natal."
    );

    expect(movieOriginalName).toBeInTheDocument();
    expect(movieOverview).toBeInTheDocument();
  });
});
