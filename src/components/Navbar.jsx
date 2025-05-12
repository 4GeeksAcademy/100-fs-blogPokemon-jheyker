import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
export const Navbar = ({ favoritos }) => {

	const { store, dispatch } = useGlobalReducer()

	const eliminarFavorito = (fav) => {
		dispatch({ type: 'eliminar_favoritos', payload: fav });
	}


	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img
							className="img-fluid w-50"
							src="https://tse3.mm.bing.net/th?id=OIP.4XvFoKQwBOS4athpKjZmSgHaD8&pid=Api&P=0&h=180"
							alt="Logo pokemon"
						/>
					</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button
							className="btn btn-primary dropdown-toggle"
							id="dropdownMenuButton"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Favoritos ({favoritos.length})
						</button>

						<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
							{favoritos.length === 0 ? (
								<li><span className="dropdown-item">No hay favoritos</span></li>
							) : (
								favoritos.map((fav, index) => (
									<li key={`${fav.category}-${fav.id}-${index}`} className="d-flex justify-content-between align-items-center px-2 py-2">
										<Link
											to={`/detalles/${fav.category}/${fav.id}`}
											className="dropdown-item text-primary"
										>
											{fav.name}
										</Link>
										<span onClick={() => eliminarFavorito(fav)} >
											<i className="fa-solid fa-trash"></i>
										</span>
									</li>
								))
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}