import { config } from "dotenv";
import App from "./utils/app";
import "./init.database";

config();

const main = async () => {
	try {
		new App().listen();
	} catch (err) {
		console.error(err);
	}
};

main();
