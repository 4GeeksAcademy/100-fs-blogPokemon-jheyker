import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CardItem = ({ name, url, añadirFavorito, eliminarFavorito, favoritos }) => {
    const navigate = useNavigate();
    const [itemDetalles, setItemDetalles] = useState();

    const aux = url.split('/');
    const id = aux[6];


    useEffect(() => {
        const fetchItemDetalles = async () => {
            const res = await fetch(`https://pokeapi.co/api/v2/item/${id}`);
            const data = await res.json();
            setItemDetalles({
                category: data?.category?.name,
                cost: data?.cost,
            });
        };

        fetchItemDetalles();
    }, [id])
    const esFavorito = favoritos.some(fav => fav.id === Number(id) && fav.category === "item")

    const handleClick = () => {
        navigate(`/detalles/item/${id}`);
    }

    const itemName = name.toLowerCase()

    const handleFavoritoClick = () => {
        const nuevoFavorito = {
            id: parseInt(id),
            name: name,
            category: "item"
        };

        if (esFavorito) {
            eliminarFavorito(nuevoFavorito);
        } else {
            añadirFavorito(nuevoFavorito);
        }
        ;
    }

    return (
        <div className="card h-100 d-flex flex-column " style={{ width: "15rem", minHeight: "15rem"  }}>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${itemName}.png`}
                className="card-img-top"
                alt={name}
            />
            <div className="card-body">
                <h5 className="card-title text-capitalize">{name}</h5>
                <p className="card-text">
                    <strong>Category:</strong> {itemDetalles?.category}
                </p>
                <p className="card-text">
                    <strong>Cost:</strong> {itemDetalles?.cost} hg
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
