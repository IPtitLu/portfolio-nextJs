import Axios from "axios";
import { useRouter } from "next/router";
import characters from './getStaticPaths';

const SkillItems = ({characters}) => {
    const router = useRouter();

    if (router.isFallback) {
      return <div>Loading...</div>;
    }

    characters.map((a) = () => {
        return (
            <div>
            <h1>Post page</h1>
            <h2>{a.results.name} </h2>
            <p>{a.results.species} </p>
            <img src={a.results.image} />
            </div>
        )
    });
}

export const getStaticPaths = async () => {
    const { data } = await Axios.get(`https://rickandmortyapi.com/api/character`);
    const characters = data;
    return {
      props: {
        characters,
      },
    };
};

export default SkillItems