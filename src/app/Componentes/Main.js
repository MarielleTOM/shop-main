import Image from "next/image";
import styles from "./main.module.css";

export default async function Home() {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json();

  return (
    <main className={styles.main}>
      {data.map((produtos) =>
       <div className={styles.card} key={produtos.id}>  
          <p>{produtos.title}</p>
          <p>{produtos.price}</p>
          <Image  
            width={100} 
            height={100} 
            src={produtos.image}
          />
       </div>
    )};   
    </main>
  );
}