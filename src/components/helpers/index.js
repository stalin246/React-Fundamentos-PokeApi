export const getUserIDApi = async() =>
{
    const id = Math.floor(Math.random()*10)+1
    const request = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const response = await request.json()
    return response
}

export const getUserPosts = async(id) =>
{
    console.log(id)
    const request = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    const response = await request.json()
    return response
}

export const getUsersApi = async() =>
{
    const request = await fetch("https://jsonplaceholder.typicode.com/users")
    const response = await request.json()
    return response
}


export const getPokemon = async() =>
{
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
    const response = await request.json()
    return response
}

export const getIDPokemon = async() =>
{
    const id = Math.floor(Math.random()*100)+1
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const response = await request.json()
    return response
}

