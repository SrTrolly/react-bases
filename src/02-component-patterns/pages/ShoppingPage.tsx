import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"


const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}



export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product}>
                    <ProductCard.Title></ProductCard.Title>
                    <ProductCard.Image></ProductCard.Image>
                    <ProductCard.Buttons></ProductCard.Buttons>
                </ProductCard>
                <ProductCard product={product}>
                    <ProductImage></ProductImage>
                    <ProductTitle title="Hola Nicolas"></ProductTitle>
                    <ProductButtons></ProductButtons>
                </ProductCard>

            </div>

        </div>
    )
}



export default ShoppingPage
