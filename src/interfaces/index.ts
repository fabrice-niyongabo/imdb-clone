export interface ITrendingMovie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ITopPickMovie {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  title: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface ITop10Movies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IUpcomingMovies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}

export interface IGenre {
  id: number;
  name: string;
}

interface IEpsodeToAir {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string | null;
}

interface INetwork {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface IProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface IProduction_country {
  iso_3166_1: string;
  name: string;
}

interface ITVSeason {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
  vote_average: number;
}

interface ISpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface ITVDetails {
  adult: boolean;
  backdrop_path: string;
  created_by: any[];
  episode_run_time: any[];
  first_air_date: string;
  genres: IGenre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: IEpsodeToAir;
  name: string;
  next_episode_to_air: IEpsodeToAir;
  networks: INetwork[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompany[];
  production_countries: IProduction_country[];
  seasons: ITVSeason[];
  spoken_languages: ISpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface IMovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: IGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompany[];
  production_countries: IProduction_country;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ISpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}

export interface IVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface IImage {
  aspect_ratio: number;
  height: number;
  iso_639_1: any;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface ISearchResult {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  title: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  profile_path: string;
  media_type: "tv" | "movie" | "keyword" | "company" | "person";
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

export type TToastType = "success" | "error" | "info" | "warning";

export type TRole = "ADMIN" | "USER";
export type TMovieType = "movie" | "tv";

export interface IUserStore {
  token: string;
  refreshToken: string;
  keepSignedIn: boolean;
  userDetails: {
    id: number | null;
    names: string;
    email: string;
    role: TRole | null;
  };
}

export interface IRecentlyViewed {
  title: string;
  poster_path: string;
  movieType: TMovieType;
  movieId: number;
}
export interface IRecentlyViewedStore {
  movies: IRecentlyViewed[];
}

export interface IWatchlist {
  id: number;
  userId: number;
  movieId: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  movie_type: TMovieType;
  release_date: string;
  overview: string;
}

///
export interface IWatchlistRequest {
  movieId: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  movie_type: TMovieType;
  release_date: string;
  overview: string;
}
