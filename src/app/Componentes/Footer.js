import Styles from "./footer.module.css";
import Image from "next/image";

export default function Footer(){
    return(
        <footer className={Styles.footer}>
            <nav> 
                <Image
                     width={50}
                     height={50}
                     src= "https://w7.pngwing.com/pngs/191/478/png-transparent-social-media-facebook-emoji-icon-instagram-icon-instagram-logo-text-rectangle-magenta-thumbnail.png"
                />
                 
                 <Image
                     width={50}
                     height={50}
                     src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJFWT-YLvdXF1Whx-fHlcysHvt_UeX9CL6Q&s"
                />

                 <Image
                     width={50}
                     height={50}
                     src= "https://w7.pngwing.com/pngs/201/462/png-transparent-computer-icons-facebook-facebook-logo-black-and-white-symbol-thumbnail.png"
                />

                 <Image
                     width={50}
                     height={50}
                     src= "https://w7.pngwing.com/pngs/708/311/png-transparent-icon-logo-twitter-logo-twitter-logo-blue-social-media-area-thumbnail.png"
                />

                 <Image
                     width={50}
                     height={50}
                    src= "https://w7.pngwing.com/pngs/802/729/png-transparent-zara-logo-icon.png"
                />
            </nav>
        </footer>
    )
}