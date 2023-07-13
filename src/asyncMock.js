const products = [
    {
        id:'1',
        name: 'Grinder Picador 3D',
        imageURL:'https://lustgrow.com.ar/wp-content/uploads/2022/08/D_NQ_NP_620620-MLA48379280602_112021-O.webp',
        category:'picadores',
        stock: 10,
        price: 23000

    },
    {
        id:'2',
        imageURL:'https://www.distribuidorapop.com.ar/wp-content/uploads/2022/01/Picador-Stamps-Plastico-4P-Grande-POP-por-mayor.jpg',
        name: 'Picador Stamp',
        category:'picadores',
        stock: 10,
        price: 3000

    },
    {
        id:'3',
        name: 'Picador Metal',
        category: 'picadores',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHf4Z3wQD18HPXPtFFap5hoh_QEGHvgCeiVQ&usqp=CAU',
        stock: 10,
        price: 5000

    },
    {

        id:'4',
        name: 'Picador Rosa',
        category:'picadores',
        imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21P624n_1kUAN43DwkNcQAGPJabgxOaUZSQ&usqp=CAU',
        stock: 10,
        price: 3000
    }
]

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductById= (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products.find (prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products.find (category => category.id === categoryId))
        }, 500) 
    })  

}