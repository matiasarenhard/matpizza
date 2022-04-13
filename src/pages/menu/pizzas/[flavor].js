import Header from "../../../components/Header";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import { pizzas } from "../../../data/menu.json";


const Flavor = ({ flavor }) => {
  const { name, price, photo, photoPath } = pizzas.find((pizza) => pizza.slug === flavor)
    return(
        <div className="container"> 
            <Head>
                
            </Head>
            <Header />
            <main> 
          <h1>{name}</h1>
          <h2>{price}</h2>
          <Image src={photoPath} alt={`Foto da pizza ${name}`} width={600} height={300} />
            </main>
        </div>
    );
};

export default Flavor;

export async function getStaticProps({ params }) { 
  return { props: { ...params } };
}

export async function getStaticPaths() { 
  return {
    paths: pizzas.map(({ slug }) => `/menu/pizzas/${slug}`),
    fallback: false
  };
}