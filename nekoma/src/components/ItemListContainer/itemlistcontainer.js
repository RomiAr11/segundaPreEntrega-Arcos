import {useEffect , useState} from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../../asyncMock"
import ItemList from "../itemlist/ItemList"


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const{ ItemId } = useParams

useEffect(() => {
    getProducts()
    .then(products => {
        setProducts(products)
    })
},[])


    return(
        <div>
            <h1>{greeting} </h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer