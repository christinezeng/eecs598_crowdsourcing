import mongoose from "mongoose"

export const connectImagesDB = async () => {
	try
	{
		const conn = await mongoose.connect(process.env.MONGO_URI, { dbName: "images" });
		console.log(`images DB connected: ${conn.connection.host}`);
	}
	catch (error)
	{
		console.error(`Error: ${error.message}`);
		process.exit(1); //process code 1 means exit with failure, 0 means success
	}
}

export const connectUsersDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, { dbName: "users" });
		console.log(`users DB connected: ${conn.connection.host}`);
	}
	catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1); //process code 1 means exit with failure, 0 means success
	}
}

export const connectUserLabelsDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, { dbName: "user_labels" });
		console.log(`user_labels DB connected: ${conn.connection.host}`);
	}
	catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1); //process code 1 means exit with failure, 0 means success
	}
}