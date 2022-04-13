import Header from "../components/Header";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import { pizzas } from "../data/menu.json";


const Menu = () => { 
    return(
        <div className="container"> 
            <Head>
                <title> MatPizza - Menu </title>
            </Head>
            <Header />
            <main> 
                <h1>Menu</h1>

                {pizzas.map(({ name, price, slug, photoPath}) => (
                    <div key={name}>
                        <Link href={`/pizzas/${slug}`}>
                            <a>
                                <Image src={photoPath} alt={`Foto da pizza ${name}`} width={300} height={169}/>
                                <p> {name} ({price})</p>
                            </a>
                        </Link>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Menu;