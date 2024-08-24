import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';

import App from './pages/home';

const Main = () => (
	<BrowserRouter basename='/'>
		<Routes>
            <Route path='/' Component={App}></Route>
		</Routes>
	</BrowserRouter>
);

export default Main;