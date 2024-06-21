'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./main.module.css";
import Spinner from "./Spinner";

export default function Home() {

  const [listaProduct, setListaProdudt] = useState ([]);
  const [listComplete, setListComplete] = useState ([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getProtucts = async () =>{
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json();
      setListaProdudt(data);
      setListComplete(data);
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

 

  const searchText = (text) => {
    setSearch(text);

    if(text.trim()==""){
      setListaProdudt(listComplete);
      return
    }

    const newList = listaProduct.filter((produtos)=>
      produtos.title.toUpperCase().trim().includes(search.toUpperCase().trim()))
    setListaProdudt(newList);
  }

  if (listaProduct[0]==null){
    return <Spinner/>
  }



  return (
    <>
    <div>
      <input type="text" value={search} placeholder="Pesquise o produto!" 
      onChange={(event)=> searchText(event.target.value)}/>
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