'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./main.module.css";
import Spinner from "./Spinner";
import ErrorGetData from "./ErrorGetData";

export default function Home() {

  const [listaProduct, setListaProdudt] = useState ([]);
  const [listaComplete, setListaComplete] = useState ([]);
  const [search, setSearch] = useState("");
  const [errorFatch, setErrorFatch] = useState (false);

  useEffect(() => {
    const getProtucts = async () =>{
      try {
        const response = await fetch("https://fakestoreapi.com/product")
        const data = await response.json();
        setListaProdudt(data);
        setListaComplete(data);
      }catch{
        setErrorFatch(true);
      }
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
      setListaProdudt(listaComplete);
      return
    }

    const newList = listaProduct.filter((produtos)=>
      produtos.title.toUpperCase().trim().includes(search.toUpperCase().trim()))
    setListaProdudt(newList);
  }

  if(errorFatch == true){
    return <ErrorGetData/>
  }

  if (listaComplete[0]==null){
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