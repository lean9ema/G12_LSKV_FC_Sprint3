let listaProducts = [
    {
        id:1,
        nombre:'Remera blanca con estampado',
        precio: '$100.000',
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nemo ipsa amet quaerat sed rem veritatis, cumque eaque natus aperiam, perferendis quibusdam neque harum itaque consequuntur dicta a voluptate maxime',
        img: 'img-ropa.jpeg',
        categoria: 'ropa'
    },
    {
        id:2,
        nombre:'Remera blanca con estampado',
        precio: '$100.000',
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nemo ipsa amet quaerat sed rem veritatis, cumque eaque natus aperiam, perferendis quibusdam neque harum itaque consequuntur dicta a voluptate maxime',
        img: 'img-ropa.jpeg',
        categoria: 'ropa'
    },
    {
        id:3,
        nombre:'Remera blanca con estampado',
        precio: '$100.000',
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nemo ipsa amet quaerat sed rem veritatis, cumque eaque natus aperiam, perferendis quibusdam neque harum itaque consequuntur dicta a voluptate maxime',
        img: 'img-ropa.jpeg',
        categoria: 'ropa'
    },
    {
        id:4,
        nombre:'Remera blanca con estampado',
        precio: '$100.000',
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nemo ipsa amet quaerat sed rem veritatis, cumque eaque natus aperiam, perferendis quibusdam neque harum itaque consequuntur dicta a voluptate maxime',
        img: 'img-ropa.jpeg',
        categoria: 'ropa'
    },
    {
        id:5,
        nombre:'Remera blanca con estampado',
        precio: '$100.000',
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nemo ipsa amet quaerat sed rem veritatis, cumque eaque natus aperiam, perferendis quibusdam neque harum itaque consequuntur dicta a voluptate maxime',
        img: 'img-ropa.jpeg',
        categoria: 'ropa'
    },
    {
        id:6,
        nombre:'Remera blanca con estampado',
        precio: '$100.000',
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nemo ipsa amet quaerat sed rem veritatis, cumque eaque natus aperiam, perferendis quibusdam neque harum itaque consequuntur dicta a voluptate maxime',
        img: 'img-ropa.jpeg',
        categoria: 'ropa'
    }
]

const productController = {
    
    prodDetail: (req,res) =>{
        let productC = listaProducts.find(product => product.id == req.params.productId)
        return res.render("products/productDetail",{ product: productC })
    },
    list: (req,res) => {
        return res.render("products/productList", {productList : listaProducts})
    }
}

module.exports = productController;
