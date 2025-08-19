import Genre  from "../entities/Genre";
import Platform  from "../entities/Platform";
import { Publisher } from "./Publisher";


export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
}
