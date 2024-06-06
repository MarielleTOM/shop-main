import Styles from "./menu.module.css";
import Image from "next/image";

export default function Menu() {
    return (
        <header>
            <nav className={Styles.cabecalho}>
                <div className={Styles.logo}>
                    <Image
                        width={100}
                        height={100}
                        src="https://w7.pngwing.com/pngs/802/729/png-transparent-zara-logo-icon.png"
                    />
                </div>
                <div>
                    <h1>ZARA SHOP</h1>  
                </div>
                <div>
                    <button className={Styles.botao}>Add produtos</button>
                    <Image
                        width={30}
                        height={30}
                        src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-shopping-cart-line-icon-vector-png-image_5058494.jpg"
                    />
                </div>
            </nav>
        </header>
    )
}