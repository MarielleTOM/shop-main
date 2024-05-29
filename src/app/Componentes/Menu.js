import Styles from "./menu.module.css";
import Image from "next/image";

export default function Menu(){
    return(
        <header className={Styles.cabecalho}>
            <nav>
                <Image
                    width={100}
                    height={100}
                    src= "https://w7.pngwing.com/pngs/802/729/png-transparent-zara-logo-icon.png"
                />
                <h2>ZARA SHOP</h2>
                <button>Add produtos</button>
                <Image
                    width={50}
                    height={50}
                    src= "https://png.pngtree.com/png-clipart/20191120/original/pngtree-shopping-cart-line-icon-vector-png-image_5058494.jpg"
                />
            </nav>
        </header>
    )
}