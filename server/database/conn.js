import mongoose from "mongoose";

async function connect() {

    const mongodbURL = "mongodb+srv://heshblog:hesh123@cluster0.ilqhemb.mongodb.net/Hesh_blog?retryWrites=true&w=majority";

    mongoose.set('strictQuery', true);
    const db = await mongoose.connect(mongodbURL);
    console.log("Database Connected");
    return db;
}

export default connect;