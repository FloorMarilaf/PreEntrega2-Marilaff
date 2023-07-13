import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const ItemCount= ({stock, initial, onAdd}) =>{

    const [quantity,setQuantity]= React.useState(initial);
    
    const increment = () => {
        if (quantity < stock){
            setQuantity (quantity + 1)
        }
    }

    const decrement= () => {
        if(quantity > 1){
            setQuantity (quantity - 1)
        }
    }

    return(
        <Box>
            <Box>
                <Button onClick={decrement}> - </Button>
                <Typography> {quantity} </Typography>
                <Button onClick={increment}> + </Button>
            </Box>
            <Box>
                <Button onClick={() => onAdd(quantity)} disabled= {!stock}> 
                 Agregar al Carrito
                </Button>
            </Box>
        </Box>
    )


}
export default ItemCount;