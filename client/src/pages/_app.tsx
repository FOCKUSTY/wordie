import { AppPropsWithLayout } from '../utility/types/component.types';
import '../styles/global.css';

const App = ({ Component, pageProps }: AppPropsWithLayout<any>) => {
    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(<Component {...pageProps}/>);
};

export default App;