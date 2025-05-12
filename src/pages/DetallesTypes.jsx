import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import servicios from "../servicios/servicios";

export const DetallesTypes = () => {
    const { id } = useParams();
    const [types, setTypes] = useState();


    useEffect(() => {
        const fetchTypes = async () => {
            const data = await servicios.getTypes(id);
            setTypes(data);
        };

        fetchTypes();
    }, [id]);

    return (
        <div>
            <div className="d-flex justify-content-center my-4">
                <div className="card mb-3" style={{ maxWidth: "60rem", width: "100%" }}>
                    <div className="row g-0">
                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${id}.png`}
                                className="img-fluid w-75"
                                alt={types?.name}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">{types?.name}</h2>
                                <div className="row">
                                    <div className="col-4">
                                        <h5>Fortalezas:</h5>
                                        <p><strong>Hace daño doble a:</strong> {types?.damage_relations?.double_damage_to?.length > 0
                                            ? types.damage_relations.double_damage_to.map(item => item.name).join(', ')
                                            : "Ninguno"}
                                        </p>
                                        <p><strong>Recibe la mitad de daño de:</strong> {types?.damage_relations?.half_damage_from?.length > 0
                                            ? types.damage_relations.half_damage_from.map(item => item.name).join(', ')
                                            : "Ninguno"}
                                        </p>
                                    </div>
                                    <div className="col-4">
                                        <h5>Debilidades:</h5>
                                        <p><strong>Recibe daño doble de:</strong> {types?.damage_relations?.double_damage_from?.length > 0
                                            ? types.damage_relations.double_damage_from.map(item => item.name).join(', ')
                                            : "Ninguno"}
                                        </p>
                                        <p><strong>Hace la mitad de daño a:</strong> {types?.damage_relations?.half_damage_to?.length > 0
                                            ? types.damage_relations.half_damage_to.map(item => item.name).join(', ')
                                            : "Ninguno"}
                                        </p>
                                    </div>
                                    <div className="col-md-4">
                                        <h5>Otras características:</h5>
                                        <p><strong>Sin efecto sobre:</strong> {types?.damage_relations?.no_damage_to?.length > 0
                                            ? types.damage_relations.no_damage_to.map(item => item.name).join(', ')
                                            : "Ninguno"}
                                        </p>
                                        <p><strong>No recibe efecto de:</strong> {types?.damage_relations?.no_damage_from?.length > 0
                                            ? types.damage_relations.no_damage_from.map(item => item.name).join(', ')
                                            : "Ninguno"}
                                        </p>
                                        <p><strong>Número de Pokémons:</strong> {types?.pokemon?.length || 0}</p>
                                        <p><strong>Movimientos:</strong> {
                                            types?.moves?.length > 0
                                                ? types.moves.slice(0, 5).map(move => (
                                                    <span key={move.name} className="badge bg-secondary me-1">{move.name}</span>
                                                ))
                                                : "Ninguno"
                                        }</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
