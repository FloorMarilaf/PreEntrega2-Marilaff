import { Box } from '@mui/material';
import Item from '../Item/Item';

const ItemList =({products}) =>{
    return(
        <Box>
            {products.map(prod => <Item key= {prod.id} {...prod} />)}
        </Box>
    )
}
export default ItemList;