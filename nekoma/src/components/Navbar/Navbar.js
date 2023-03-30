import "./Navbar.css"
import Button from "../botones/Button"
import CartWidget from "../cartWidget/cart"

const Navbar = () => {
return(
    <nav>
        <h1>Nekoma</h1>
        
        <div>
            <Button label="Makeup" callback={() => console.log("Makeup")} />
            <Button label="SkinCare"callback={() => console.log("SkinCare")}/>
            <Button label="Accesorios"callback={() => console.log("Accesorios")}/>
        <CartWidget/>
        </div>
    </nav>
)
}

export default Navbar