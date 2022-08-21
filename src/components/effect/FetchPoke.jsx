import React from 'react'
import { useState, useEffect } from 'react'
import {getIDPokemon,getPokemon}   from '../helpers'
import {useFetch} from '../hooks/useFetch'


const FetchPoke = () => 
{
    const {estado, data} = useFetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
    const [pokemones, setPokemones] = useState([])
    const [pokemon, setPokemon] = useState({})

    const allPokemon = () =>
    {
        getPokemon()
            .then(response=>setPokemones(response))
    }
    const PokenID = () =>
    {
        getIDPokemon()
            .then(response=>setPokemon(response)) 
    }

    useEffect(() => 
    {
        allPokemon()
        PokenID()

    }, [])

    if (!pokemon.id) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
  

  return (
    <>
      <div className="container mt-4">
        <h1 className="mb-4 text-2xl">Fetch of API's 🐱‍👤🐺</h1>
        <hr />
        <div className="text-center">
        </div>
        <div>
          <h3 className='m-4 text-center'>Datos de la API:</h3>
          <hr/>
          <ul className='list-group'>
                {
                   estado && data?.map((pokemon,key)=>(
                    <li key={pokemon.name} className="list-group-item">{key+1} - {pokemon.name}</li>
                  ))
                }
           </ul>
          <hr/>
          <div className='text-center mt-3'>
          <button className="btn btn-success ms-2 mb-4" onClick={PokenID} >Consultar API Pokemon</button>
          </div>
          <div className='d-flex justify-content-between'>
              <div>
                <p className='fw-bold'>Datos del Pokemon</p>
                <p>Nombre: {pokemon.name}</p>
                <p>Experincia: {pokemon.base_experience}</p>
                <p>Peso: {pokemon.weight}</p>
                <p>Altura: {pokemon.height}</p>
              </div>
              <div>
                <p className='fw-bold'>Imagen del pokemon - {pokemon.name}</p>
                <div>
                    <img className='h-40' key={pokemon.name} src={pokemon.sprites.other.home.front_default}></img>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FetchPoke