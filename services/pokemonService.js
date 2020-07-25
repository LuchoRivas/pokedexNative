import Axios from "axios";
import { envConfig } from "../config";
const apiEndpoint = `${envConfig.apiUrl}/pokemon/`;

export default class PokemonService {

  static getPokemonByName = async (pokemonName) => {
      const { data: pokemon } = await Axios.get(`${apiEndpoint}pokemonSearch/${pokemonName}`);
      return pokemon;
  }
  
  static getPokemosnByType = async (type, pagination) => {
    const { data: pokemon } = await Axios.post(`${apiEndpoint}typeSearch/${type}`, pagination);
    return pokemon;
  }
};