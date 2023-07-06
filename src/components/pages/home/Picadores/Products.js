
const Picadores= [{
    id:1,
    nombre: 'Grinder Picador 3D',
    imageURL:'https://lustgrow.com.ar/wp-content/uploads/2022/08/D_NQ_NP_620620-MLA48379280602_112021-O.webp',
    cantidad: 10,
    precio: 23000

},
{
    id:2,
    imageURL: 'https://www.distribuidorapop.com.ar/wp-content/uploads/2022/01/Picador-Stamps-Plastico-4P-Grande-POP-por-mayor.jpg',
    nombre: 'Picador Stamp',
    cantidad: 10,
    precio: 3000

},
{
    id:3,
    nombre: 'Picador Metal',
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHf4Z3wQD18HPXPtFFap5hoh_QEGHvgCeiVQ&usqp=CAU',
    cantidad: 10,
    price: 5000

},
{
    id:4,
    nombre: 'Galaxy4',
    imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21P624n_1kUAN43DwkNcQAGPJabgxOaUZSQ&usqp=CAU',
    cantidad: 10,
    precio: 3000

}]
 
export const getPicadores= () => {

    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(Picadores);
        }, 2000)
    })}
    
