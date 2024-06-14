import Image from "next/image";
export default function Spinner(){
    return(
        <Image 
        width={100}
        height={100}
        src='/3-dots-bounce.svg'
        alt='Imagem carregando'/>
    )
}