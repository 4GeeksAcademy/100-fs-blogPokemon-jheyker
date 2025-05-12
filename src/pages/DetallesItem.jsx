import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import servicios from "../servicios/servicios";

export const DetallesItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState();


    useEffect(() => {
        const fetchItem = async () => {
            const data = await servicios.getItem(id);
            setItem(data);
        };

        fetchItem();
    }, [id]);
    
    return (
        <div>
            <div className="d-flex justify-content-center my-4">
                <div className="card mb-3" style={{ maxWidth: "60rem", width: "100%" }}>
                    <div className="row g-0">
                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item?.name.toLowerCase()}.png`}
                                className="img-fluid w-75"
                                alt={item?.name}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">{item?.name}</h2>
                                <div className="row">
                                    <div className="col-4">
                                        <p><strong>Cost:</strong> {item?.cost} hg</p>
                                        <p><strong>Effect:</strong> {item?.effect_entries?.[0]?.effect}</p>
                                    </div>
                                    <div className="col-4">
                                        <p><strong>Category:</strong> {item?.category?.name}</p>
                                        <p><strong>Flavor Text:</strong> {item?.flavor_text_entries?.[0]?.text}</p>
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
