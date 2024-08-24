import { config } from 'dotenv';
import createApp from './utils/create-app';

config();

const PORT = process.env.PORT || 3001;

const main = async () => {
    try {
        const app = createApp();
        app.listen(PORT, () => console.log(`Запускаю на порте ${PORT}\nhttp://localhost:${PORT}`));
    }
    catch (err) {
        console.error(err);
    };
};

main();