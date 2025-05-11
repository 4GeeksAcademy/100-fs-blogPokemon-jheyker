import { useState } from "react";
import { Link } from "react-router-dom";
export const Navbar = ({ favoritos }) => {

	const [showDropdown, setShowDropdown] = useState(false)
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
									<li key={`${fav.category}-${fav.id}-${index}`}>
										<Link
											to={`/detalles/${fav.category}/${fav.id}`}
											className="dropdown-item text-primary"
										>
											{fav.name}
										</Link>
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