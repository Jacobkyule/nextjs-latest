import ProductButton from "./ProductButton";
import styles from '../page.module.css';
export default function Product({ images, title, price, id, description, brand, category, noButton = false }){
    const imageURL = Array.isArray(images) && images.length > 0 ? images[0] : '';        

    return (
        <div >
        <div className={styles.product}>
        <div className={styles.imageContainer}>
                    <img
                    className={styles.productImage}
                    src={imageURL} 
                    alt={title}
                    />
                
            
            </div>
            <h4>{title}</h4>
            <p>Price: ${price}</p>
            <p>{category}</p>
            <p>{brand}</p>
            <p>{description}</p>
            
            {
                !noButton && <ProductButton id={id}/>
            } 
        </div>
        </div>
    )
}