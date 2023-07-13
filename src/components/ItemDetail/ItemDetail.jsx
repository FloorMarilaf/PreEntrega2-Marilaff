import ItemCount from "../ItemCount/ItemCount";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ItemDetail =({ name, price, description, stock, imageURL}) =>{
    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component= "img"
                alt= {name}
                height= '140'
                image={imageURL}
                
            />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Precio:{price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Stock:{stock}
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
                {description || ''}
            </Typography>
        </CardContent>
        <Box>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log ('Cantidad agregada')} />
            
        </Box>
        </Card>
    )

}    
export default ItemDetail;