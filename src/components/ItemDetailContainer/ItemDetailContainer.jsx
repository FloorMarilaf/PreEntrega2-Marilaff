import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import { Box } from "@mui/material"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ( ) => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()
    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error =>{
                console.error (error)
            })

    }, [itemId])

    return(
        <Box>
            <ItemDetail {...product}/>
        </Box>
    )
}
export default ItemDetailContainer;