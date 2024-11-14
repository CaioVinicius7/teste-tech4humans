export interface RawMovieReleaseDates {
  iso_3166_1: string;
  release_dates: {
    certification: string;
    iso_639_1: string;
    note: string;
    release_date: string;
    type: number;
  }[];
}

export function movieReleaseDatesMapper(
  rawReleaseDates: RawMovieReleaseDates[]
) {
  return rawReleaseDates.map((item) => ({
    countryCode: item.iso_3166_1,
    releaseDates: item.release_dates.map((releaseDate) => ({
      certification: releaseDate.certification,
      languageCode: releaseDate.iso_639_1,
      note: releaseDate.note,
      releaseDate: releaseDate.release_date,
      type: releaseDate.type
    }))
  }));
}
