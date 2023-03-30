
import { Link } from "react-router-dom"

const ItemDetailsContainer = ({ id, nombre, img, precio }) => {
    return (
        <article className="CardItems">

            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>

            <picture>
                <img src={img} alt={nombre} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
            </section>

            <footer className="ItemFooter">
                <Link to={`item/${id}`} className="Option"> Ver descripcion </Link>
            </footer>
        </article>

    )
}

export default ItemDetailsContainer