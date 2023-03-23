import React, { createContext, useState, useEffect } from 'react'
import { AllPokemonsResult, PokeType, PokemonsByTypeResult } from '../interfaces/types';
import axios from 'axios';

interface ContextProps {
    types : PokeType[],
    filterSelected : PokeType,
    pokemonsFiltered: string[] | null,
    changeTypeSelected: (type: PokeType) => void
}
export const PokemonContext = createContext<ContextProps>({} as ContextProps);
const PokemonProvider = ({ children } :any) => {
    let allPokemonURL  = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

    const defaultState : PokeType = {
        name: "All",
        url: allPokemonURL
    };

    const [allPokemons, setAllPokemons] = useState(null);
    const [pokemonsFiltered, setPokemonsFiltered] = useState(null);

    const [types, setTypes] = useState([defaultState]);
    const [filterSelected, setFilterSelected] = useState(defaultState);

    const changeTypeSelected = async (type: PokeType) => {
        setFilterSelected(type);
        
        const {data} = await axios.get(type?.url!);
        // console.log(data);
        let pokemons = data?.pokemon?.map(
            ({pokemon} : PokemonsByTypeResult) => pokemon?.url
        );

        type.name !== "All" 
        ? setPokemonsFiltered(pokemons) 
        : setPokemonsFiltered(allPokemons);
    };

    const getAllTypes = async () => {
        const {data} = await axios.get("https://pokeapi.co/api/v2/type");
        // console.log(data);
        setTypes([...types,...data.results]);
    };

    const getAllPokemons = async () => {
        const {data} = await axios.get(allPokemonURL);
        // console.log(data);

        let pokemons = data?.results?.map((pokemon: AllPokemonsResult)=>
            pokemon?.url
        );

        // console.log(pokemons);

        setAllPokemons(pokemons);
        setPokemonsFiltered(pokemons);
    };

    useEffect(() => {
        getAllPokemons();
        getAllTypes();
      return () => {
      }
    }, [])
    

    return (
        <PokemonContext.Provider 
        value = {{types, filterSelected, pokemonsFiltered, changeTypeSelected,
        }}>
            {children}
        </PokemonContext.Provider>
    )
};

export default PokemonProvider