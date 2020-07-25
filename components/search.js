import React from 'react';
import { TextInput, Button, Alert } from 'react-native';
import PokemonService from '../services/pokemonService';

const Search = () => {

  const [value, setText] = React.useState('');

  const manageSearch = async (value) => {
    alert('Se va a buscar: ' + value);
    const poke = await PokemonService.getPokemonByName(value);
    alert(poke)
    if (poke)
      alert('Busqueda finalizada');

    else
      alert('todo mal :/')
    console.log('data', poke);
  };

  return(
    <React.Fragment>
      <TextInput
        style={{ height: 40, borderColor: 'lightgray', borderWidth: 1, width: '80%', borderRadius: 5, marginBottom: 15, color: "#fff", paddingStart: 15 }}
        placeholder={'Search'}
        onChangeText={text => setText(text)}
        value={value}
        selectionColor="#000"
      />
      <Button
        title="Buscar"
        color="#343a40"
        onPress={() => manageSearch(value)}
      />
    </React.Fragment>
  )
}

export default Search;