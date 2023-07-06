import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';


const CardItem =({ name, price, description, stock, imageURL}) =>{
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
        <CardActions>
            <Button size="small">Comprar</Button>
            
        </CardActions>
        </Card>
    )
    
}
export default CardItem;
