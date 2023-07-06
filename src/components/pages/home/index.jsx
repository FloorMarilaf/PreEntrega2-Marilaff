import React from 'react';
import NavBar from '../../NavBar';
import TabsCategory from '../../tabs';
import ItemListContainer from '../../ItemListContainer/ItemListContainer';

const HomePage =() => {
    return(
        <div>
            <NavBar />
            <ItemListContainer greeting= {'Bienvenidos a Flower Child'}/>
            <TabsCategory />
            

        </div>
    )
}

export default HomePage;


