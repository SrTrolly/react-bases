import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products";

import '../styles/custom-styles.css'
import { useShoppingCart } from "../hooks";

export const ShoppingPage = () => {

    const { onProductCountChange, shoppingCart } = useShoppingCart()

    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className="bg-dark text-white"
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductImage className="custom-image"></ProductImage>
                            <ProductButtons className="custom-buttons"></ProductButtons>
                        </ProductCard>
                    ))

                }

            </div>

            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard key={key} product={product} className="bg-dark text-white" style={{ width: '100px' }} value={product.count} onChange={onProductCountChange} >
                            <ProductImage className="custom-image"></ProductImage>
                            <ProductTitle className="text-white text-bold"></ProductTitle>
                            <ProductButtons className="custom-buttons" style={{ display: "flex", justifyContent: 'center' }} ></ProductButtons>
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}



export default ShoppingPage
