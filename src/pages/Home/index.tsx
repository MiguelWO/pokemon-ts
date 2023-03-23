import React from 'react'
import { PokeballIconSmall } from '../../assets/pokeball'
import styles from './styles.module.scss'
import PokemonList  from '../../components/PokemonList'
import { PokemonContext } from '../../context/PokemonContext';
import { useContext } from 'react';
import { Pagination } from '../../components/Pagination';
import { usePagination } from '../../hooks/usePagination';
import { Filters } from '../../components/Filters';

const Home = () => {
  const {pokemonsFiltered} = useContext(PokemonContext);
  const {page, nextPage, prevPage, backToHome} = usePagination();

  let perPage = 12;
  return (
    <div className = {styles.home} >
      <header>
        <div onClick = {backToHome}>
          <PokeballIconSmall/>
          <span>Pokedex</span>
        </div>
      </header>
      <Filters/>
      <PokemonList 
        perPage={perPage}
        page={page}
        pokemonUrls= {pokemonsFiltered}
        />
      <Pagination 
        page = {page}
        perPage={perPage}
        nextPage={nextPage}
        prevPage = {prevPage}
        maxItems={pokemonsFiltered?.length!} 
        />
    </div>
  )
}

export default Home