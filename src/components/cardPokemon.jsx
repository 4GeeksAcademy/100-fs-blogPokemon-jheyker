import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const CardPokemon = ({ name, url, añadirFavorito, eliminarFavorito,favoritos }) => {
    const navigate = useNavigate();

    const aux = url.split('/');
    const id = aux[6]
    const [pokemonDetalles, setPokemonDetalles] = useState()


    useEffect(() => {
        const fetchPokemonDetalles = async () => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await res.json();
            setPokemonDetalles({
                types: data?.types?.map(type => type.type.name).join(", "),
                height: data.height,
                weight: data.weight
            });
        };
        fetchPokemonDetalles();
    }, [id])
    const esFavorito = favoritos.some(fav => fav.id === Number(id) && fav.category === "pokemon")
    const handleClick = () => {
        navigate(`/detalles/pokemon/${id}`);
    }
    const handleFavoritoClick = () => {
        const nuevoFavorito = {
            id: parseInt(id),
            name: name,
            category: "pokemon"
        };

        if (esFavorito) {
            eliminarFavorito(nuevoFavorito);
        } else {
            añadirFavorito(nuevoFavorito);
        }

    ;
    }
    return (
        <div className="card h-100 d-flex flex-column" style={{ width: '15rem',minHeight: "26rem"  }}>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                className="card-img-top"
                alt={name}
            />
            <div className="card-body">
                <h5 className="card-title text-capitalize">{name}</h5>
                <p className="card-text">
                    <strong>Types: </strong>{pokemonDetalles?.types}
                </p>
                <p className="card-text">
                    <strong>Height: </strong>{pokemonDetalles?.height} dm
                </p>
                <p className="card-text">
                    <strong>Weight: </strong>{pokemonDetalles?.weight} hg
                </p>
                <div className="d-flex flex-row-reverse">
                    <button
                        className="btn btn-danger"
                        onClick={handleFavoritoClick}
                    >
                        {esFavorito ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                    </button>
                    <button className="btn btn-primary" onClick={handleClick}>
                        Learn more!
                    </button>
                </div>
            </div>
        </div>
    )


}