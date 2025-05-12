
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { CardItem } from "../components/cardItem.jsx";
import { CardPokemon } from "../components/cardPokemon.jsx";
import { CardTypes } from "../components/cardTypes.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const añadirFavorito = (favorito) => {
		dispatch({ type: 'añadir_favoritos', payload: favorito });
	};

	const eliminarFavorito = (favorito) => {
		dispatch({ type: 'eliminar_favoritos', payload: favorito });
	};


	return (
		<div>
			<div className="container">
				<h2 className="text-danger">Pokemon</h2>
				<div className="d-flex flex-nowrap overflow-auto">
					{store.pokemons?.results?.map((el, i) => (
						<div className="m-2" key={i}>
							<CardPokemon name={el.name} url={el.url} añadirFavorito={añadirFavorito} eliminarFavorito={eliminarFavorito} favoritos={store.favoritos} />
						</div>
					))}
				</div>
			</div>
			<div className="container mt-3">
				<h2 className="text-danger">Item</h2>
				<div className="d-flex flex-nowrap overflow-auto">
					{store.items?.results?.map((el, i) => (
						<div className="m-2" key={i}>
							<CardItem name={el.name} url={el.url} añadirFavorito={añadirFavorito} eliminarFavorito={eliminarFavorito} favoritos={store.favoritos} />
						</div>
					))}
				</div>
			</div >
			<div className="container mt-3">
				<h2 className="text-danger">Types</h2>
				<div className="d-flex flex-nowrap overflow-auto">
					{store.types?.results?.map((el, i) => (
						<div className="m-2" key={i}>
							<CardTypes name={el.name} url={el.url} añadirFavorito={añadirFavorito} eliminarFavorito={eliminarFavorito} favoritos={store.favoritos} />
						</div>
					))}
				</div>
			</div >
		</div>

	);

}
