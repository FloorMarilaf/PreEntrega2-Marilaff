import { Box, Typography } from "@mui/material";
import CardItem from "../../../card-item";
import {getPicadores} from "./Products";
import React from "react";


const SectionPicadores = () => {
    const [items,setItem]= React.useState([]);
    const [loading, setLoading]= React.useState(false);

    React.useEffect(() => {

        setLoading(true);
        getPicadores()
        .then((res) => {
            console.log(res);
            setItem(res)
        })
        .finally( () => {
            setLoading(false);
        
        })
    },[])

    console.log(items);

    return (
        <Box display={'flex'} justifyContent={'start'} flexDirection={'row'} gap={5}>
            {
                loading?
                <Typography>cargando...</Typography>
                :
                items?.map((item, index) => {
                    return(
                     <CardItem key= {index + item.nombre} name={item.nombre} price= {item.precio}  stock= {item.cantidad} imageURL={item.imageURL} />   
                    )
                    
                })

                
            }
        </Box>
    )
}

export default SectionPicadores;