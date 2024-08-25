import Layout from "../components/layout/layout";
import GameApi from "../api/game.api";

const game = new GameApi();

const Page = () => {
    const clickHandler = async () => {
        await game.postWord('Терка');
    };

    return (
        <div className="page">
            <main>
                <button onClick={clickHandler}></button>
            </main>
        </div>
    );
};

const PlayWithBot = () => {
    return <Layout>{Page()}</Layout>
};

export default PlayWithBot;