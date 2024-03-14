import mongoose from "mongoose";

export default async function connectMongoDB() {
	try {
		await mongoose.connect("mongodb+srv://sahilshinde3377:ZevRlGfyP2Bgpq35@cluster0.hbe7sq8.mongodb.net/github-db?retryWrites=true&w=majority&appName=Cluster0");
		console.log("MONGODB connected");
	} catch (error) {
		console.log("Error connecting to MongoDB: ", error.message);
	}
}
