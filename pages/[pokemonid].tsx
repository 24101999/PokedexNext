import styles from "../styles/pokemon/pokemon.module.css";
import { useRouter } from "next/router";
import { propstype } from "./TypeProps";
import Image from "next/image";

export async function getStaticPaths() {
  const data = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0"
  );

  const res = await data.json();

  const paths = res.results.map((res: propstype<any>, index: number) => {
    return {
      params: { pokemonid: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: propstype<any>) {
  const id = context.params.pokemonid;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const dados = await res.json();

  return {
    props: { pokemon: dados },
  };
}

export default function Pokemon({ pokemon }: propstype<any>) {
  const router = useRouter();

  const id = router.query.pokemonid;

  console.log(pokemon);
  return (
    <div className={styles.pokemon}>
      <h1>{pokemon.name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        width="150"
        height="150"
        alt="images"
      />
      <div className={styles.infos}>
        <div className="">
          <h2>Numero</h2>
          <p>#{id}</p>
        </div>
        <div className="">
          <h2>tipo</h2>
          <p>{pokemon.types[0].type.name}</p>
        </div>
        <div className="">
          <h2>altura</h2>
          <p>{pokemon.weight / 10} cm</p>
        </div>
        <div className="">
          <h2>peso</h2>
          <p>{pokemon.height * 10} kg</p>
        </div>
      </div>
    </div>
  );
}
