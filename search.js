import React from 'react';
import { TextInput, Button, Alert } from 'react-native';
import PokemonService from './services/pokemonService';

const Search = () => {

  const [value, setText] = React.useState('');

  const manageSearch = async (value) => {
    alert('Se va a buscar: ' + value);
    const poke = await PokemonService.getPokemonByName(value);
    alert('Busqueda finalizada');
    console.log('data', poke);
  };

  return(
    <React.Fragment>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder={'Search'}
        onChangeText={text => setText(text)}
        value={value}
      />
      <Button
        title="Buscar"
        onPress={() => manageSearch(value)}
      />
    </React.Fragment>
  )
}

export default Search;