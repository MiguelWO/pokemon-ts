import React from 'react'
import styles from './styles.module.scss'
import { PokemonCard } from '../PokemonCard';

interface Props {
    pokemonUrls?: string[] | null;
    page : number;
    perPage : number;
}

const PokemonList = ({pokemonUrls, page, perPage}  : Props) => {
  return (
    <div className = {styles.pokemons}>
        {
            pokemonUrls
            ?.slice((page - 1)*perPage, (page - 1)*perPage + perPage)
            .map((pokemonUrls) => (
                <PokemonCard key = {pokemonUrls} url = {pokemonUrls} />))
        }
    </div>
  )
}

export default PokemonList