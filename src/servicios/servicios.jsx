const servicios = {}

servicios.getAllPokemons = async() => {
    
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon')
        if(!resp.ok) throw new Error('Error fetch data')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
        
    }
}

servicios.getPokemon = async(id) => {
    
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        if(!resp.ok) throw new Error('Error fetch data')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
        
    }
}
servicios.getAllItems= async() => {
    
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/item`)
        if(!resp.ok) throw new Error('Error fetch data')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
        
    }
}

servicios.getItem= async(id) => {
    
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/item/${id}`)
        if(!resp.ok) throw new Error('Error fetch data')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
        
    }
}
servicios.getAllTypes= async() => {
    
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/type`)
        if(!resp.ok) throw new Error('Error fetch data')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
        
    }
}
servicios.getTypes= async(id) => {
    
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/type/${id}`)
        if(!resp.ok) throw new Error('Error fetch data')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
        
    }
}

export default servicios