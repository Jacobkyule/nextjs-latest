import styles from '../../page.module.css';
import Product from "@/app/components/Product";
async function getProducts(){
    
const res = await fetch('https://dummyjson.com/products?limit=50&select=title,price,images');

const data = await res.json();
      return data.products;      
}

export default async function ProductsPage(){
    const products = await getProducts();
    return (
        <>
        <div className={styles.productsPageLayout}>
        <h3>Check of our products</h3>
        <div className={styles.page}>
        {
            products.length > 0 && (
                products.map(({id, title, price, images}) => (
                    <Product 
                    key={id}
                    id={id}
                    images={images}
                    title={title}
                    price={price}
                    />
                ))
            )
        }
        </div>
        </div>
        </>
    )
}