import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CardTypes = ({ name, url, añadirFavorito, eliminarFavorito, favoritos }) => {
    const navigate = useNavigate();
    const [typesDetalles, setTypesDetalles] = useState();

    const aux = url.split('/');
    const id = aux[6];

    if (Number(id) > 18) {
        return null;
    }
    useEffect(() => {
        const fetchTypesDetalles = async () => {
            const res = await fetch(`https://pokeapi.co/api/v2/type/${id}`);
            const data = await res.json();
            setTypesDetalles({
                fuerteContra: data?.damage_relations?.double_damage_to || [],
                debilContra: data?.damage_relations?.double_damage_from || [],
            });
        };
        fetchTypesDetalles();
    }, [id]);

    const esFavorito = favoritos.some(fav => fav.id === Number(id) && fav.category === "types")

    const handleClick = () => {
        navigate(`/detalles/types/${id}`);
    }

    const handleFavoritoClick = () => {
        const nuevoFavorito = {
            id: parseInt(id),
            name: name,
            category: "types"
        };

        if (esFavorito) {
            eliminarFavorito(nuevoFavorito);
        } else {
            añadirFavorito(nuevoFavorito);
        }
        ;
    }

    return (
        <div className="card h-100 d-flex flex-column " style={{ width: "15rem", minHeight: "15rem" }}>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${id}.png`}
                className="card-img-top p-3 mt-3"
                alt={name}
            />
            <div className="card-body">
                <h5 className="card-title text-capitalize">{name}</h5>
                <p className="card-text">
                    <strong>Fuerte contra: </strong>{" "} {typesDetalles?.fuerteContra?.length > 0
                        ? typesDetalles.fuerteContra[0].name
                        : "Ninguno"}
                </p>
                <p className="card-text">
                    <strong>Débil contra: </strong>{typesDetalles?.debilContra?.length > 0
                        ? typesDetalles.debilContra[0].name
                        : "Ninguno"}
                </p>
                <div className="d-flex flex-row-reverse">
                    <button
                        className="btn btn-danger ms-1"
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
    );
};