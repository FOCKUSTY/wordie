import { config } from "dotenv";

import mongoose from "mongoose";
import "./database/schema/words.schema";

config();

mongoose
	.connect(process.env.MONGO_URL || "mongodb://127.0.0.1/pet")
	.catch((err) => console.error(err))
	.then(async () => {
		console.log("Подключен к базе данных");
	});