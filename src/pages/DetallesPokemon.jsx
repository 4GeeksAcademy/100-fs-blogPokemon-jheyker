import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import servicios from "../servicios/servicios";

export const DetallesPokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await servicios.getPokemon(id);
      setPokemon(data);
    };

    fetchPokemon();
  }, [id]);


  return (
   <div className="d-flex justify-content-center">
      <div className="card m-3" style={{ maxWidth: "60rem", width: "100%" }}>
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              className="img-fluid w-75"
              alt={pokemon?.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{pokemon?.name}</h5>
              <div className="row">
                <div className="col-md-4">
                  <p><strong>Height:</strong> {pokemon?.height} decimetres</p>
                  <p><strong>Weight:</strong> {pokemon?.weight} hectograms</p>
                  <p><strong>Types:</strong> {pokemon?.types?.map(el => el.type.name).join(", ")}</p>
                  <p><strong>Abilities:</strong> {pokemon?.abilities?.map(el => el.ability.name).join(", ")}</p>
                </div>
                <div className="col-md-4">
                  <p><strong>Base Stats:</strong></p>
                  <ul>
                    {pokemon?.stats?.map(stat => (
                      <li key={stat.stat.name}>
                        {stat.stat.name}: {stat.base_stat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-4">
                  <p><strong>Moves:</strong></p>
                  <ul>
                    {pokemon?.moves?.slice(0, 5).map(move => (
                      <li key={move.move.name}>{move.move.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
