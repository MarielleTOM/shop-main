'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./main.module.css";

export default function Home() {

  const [listaProduct, setListaProdudt] = useState ([]);

  useEffect(() => {
    const getProtucts = async () =>{
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json();
      setListaProdudt(data);
    };
    getProtucts();
  }, []);

  const orderAz  = () => {
    let newList = [...listaProduct].sort((a,b)=>
      a.title.localeCompare(b.title)
    );
    setListaProdudt(newList);
  }

  const orderZa  = () => {
    let newList = [...listaProduct].sort((a,b)=>
      a.title.localeCompare(b.title)
    );
    newList = newList.reverse();
    setListaProdudt(newList);
  }

  return (
    <>
    <div>
      <button onClick={orderAz}>A-Z</button>
      <button onClick={orderZa}>Z-A</button>
    </div>
    <main className={styles.main}>
      {listaProduct.map((produtos) => 
       <div className={styles.card} key={produtos.id}>  
          <h3>{produtos.title}</h3>
          <h4>R$: {produtos.price}</h4>
          <p>Descrição: {produtos.description}</p>
          <p>Categoria: {produtos.category}</p>
          <p>Estoque: {produtos.rating.count}</p>
          <Image  
            width={100} 
            height={100} 
            src={produtos.image}
          />
       </div>
    )};   
    </main>
  </>
  );
}