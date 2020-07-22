import Axios from "axios";
import { envConfig } from "../config";
const apiEndpoint = `${envConfig.apiUrl}/pokemon/`;

export default class PokemonService {

  static getPokemonByName = async (pokemonName) => {
    try {
      const { data: pokemon } = await Axios.get(`${apiEndpoint}pokemonSearch/${pokemonName}`);
      return pokemon;
    } catch (error) {
        console.error('Failure!');
        console.error(e.response.status);
        throw new Error(e);
    }
  }
  
  static getPokemosnByType = async (type, pagination) => {
    const { data: pokemon } = await Axios.post(`${apiEndpoint}typeSearch/${type}`, pagination);
    return pokemon;
  }
};