let listaProducts = [
    {
        id:1,
        nombre:'Remera blanca con estampado',
        precio: '$100.000',
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nemo ipsa amet quaerat sed rem veritatis, cumque eaque natus aperiam, perferendis quibusdam neque harum itaque consequuntur dicta a voluptate maxime',
        img: 'img-ropa.jpeg'
    }
]

const productController = {
    
    prodDetail: (req,res) =>{
        let productC = listaProducts.find(product => product.id == req.params.productId)
        return res.render("products/productDetail",{ product: productC })
    }
}

module.exports = productController;
