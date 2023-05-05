import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/home/Home.module.css";
import { propstype } from "./TypeProps";
import Link from "next/link";
import { type } from "os";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

// interface dados {
//   name?: string;
// }

export async function getStaticProps() {
  const data = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0"
  );

  // const

  const res = await data.json();
  // const resImg = await data.json();

  const response = res.results;
  return {
    props: { response },
  };
}

export default function Home({ response }: propstype<any>) {
  // console.log(response);
  const [scarch, setScarch] = useState<string>();

  return (
    <div className={styles.home}>
      <h1>Pokemons</h1>
      <div className={styles.poke}>
        {response.map((res: propstype<any>, i: number) => {
          return (
            <div key={i + 1} className={styles.pokemon}>
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  i + 1
                }.png`}
                width="150"
                height="150"
                alt="images"
              />
              <h3>{res.name}</h3>
              <Link href={`/${i + 1}`}>
                <button>
                  <strong>ver mais</strong>
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
