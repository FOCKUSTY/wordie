import GameApi from "../api/game.api";
import Layout from "../components/layout/layout";

const game = new GameApi();

const Page = () => {
    game.postWord('Терка');
    console.log(1);

    return (
        <div className="page">
            
        </div>
    );
};

const PlayWithBot = () => {
    return <Layout>{Page()}</Layout>
};

export default PlayWithBot;