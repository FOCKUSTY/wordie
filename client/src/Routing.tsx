import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';

import Home from './pages/home';
import PlayWithBot from './pages/play-with-bot';

const Main = () => (
	<BrowserRouter basename='/'>
		<Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/play/bot' Component={PlayWithBot}></Route>
		</Routes>
	</BrowserRouter>
);

export default Main;