import {getProducts, getProductsByCategory} from '../../asyncMock';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react';

import ItemList from '../ItemList/ItemList';

import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting}) => {
    const [products, setProducts] = React.useState([])

    const {categoryId} = useParams()

    React.useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId) 
            .then(response =>{
                setProducts(response)
            })
            .catch(error =>{
                console.error(error)
            })

    }, [categoryId])

   
    
    return (
        <Box>
            <Typography variant="h4" > {greeting}</Typography>
            <ItemList products={products} />
        </Box>
       

        


    )
    
}
export default ItemListContainer;






























































































