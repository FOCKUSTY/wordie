import { Link } from 'react-router-dom';
import Layout from '../components/layout/layout';

import '../styles/home.css';

const Page = () => {
    return (
        <div className="page">
            <main>
                <div className="rules">
                    <ul>
                        <li>Количество человек: от двух</li>
                        <li>Начало игры: Какой-либо из людей начинает ход, загадывая любое слово</li>
                        <li>Слово должно являться: Существительным именительного падежа в единственном числе любого склонения и любого рода</li>
                        <li>ИСКЛЮЧЕНИЕ: Если данного слова нет в единственном числе, то можно написать во множественном числе</li>
                        <li>После того, как первый человек назвал свое слово, нужно посмотреть на какую букву оно заканчиваться</li>
                        <li>Когда мы узнали последюю букву, следующий человек (По договоренности группы людей) говорит свое слово, которое обязано начинаться на последнюю букву прошлого слов</li>
                        <li>ГЛАВНОЕ, чтобы слова не повторялись, иначе это не будет защитано, как ответ. КАЖДОЕ слово должно быть УНИКАЛЬНЫМ</li>
                        <li>ЕСЛИ последняя буква это: Ь, Ъ или Ы, ТО нужно выбрать предпоследнюю букву</li>
                        <li>ЕСЛИ вы не можете придумать слова на последнюю буквы, вы ОБЯЗАНЫ спросить у группы людей/человека, играющих с вами поменять букву на предпоследнюю</li>
                        <li>Игра расчитано на веселую и долгую игру, выбыть нельзя, если вы еще можете придумывать слова</li>
                    </ul>
                </div>

                <div className="nav noselect">
                    <div className='links'>
                        <Link className='link' to={"/play/bot"}><span>Играть с ботом</span></Link>
                        <Link className='link' to={"/play/player"}><span>Играть с человеком</span></Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

const Home = () => {
    return <Layout>{Page()}</Layout>
}

export default Home;