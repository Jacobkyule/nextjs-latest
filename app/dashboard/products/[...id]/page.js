import Product from "@/app/components/Product";

export async function generateStaticParams() {
    const res = await fetch('https://dummyjson.com/products?limit=5&select=title,price');
    
    const data = await res.json();
   
    return data.products.map((product) => ({
      id: [product.id.toString()],
    }))
  }

 async function getProducts(ids){
  const promises = [];
  for(const id of ids){
      const res = fetch(`https://dummyjson.com/products/${id}`);
      promises.push(res);
  }
    const data = await Promise.all(promises);

    return await Promise.all(data.map((d) => d.json()));
  }

export default async function Productpage({params}){
    const products = await getProducts(params.id);
    console.log({products});
    return products.length > 0 && (
            products.map(({ images, title, price, id, description, brand, category }) => (
              <Product 
                noButton
                images={images}
                title={title}
                brand = {brand}
                price={price}
                category={category}
                description={description}
                key={id}
              />
            ))
          )
}