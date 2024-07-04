import mongoose, { Connection } from "mongoose";

let db: Connection;

const ConnectDB = async (): Promise<Connection | undefined> => {
    if (db) return db;

    try {
        const uri: string = `mongodb+srv://${process.env.NEXT_PUBLIC_DB_USER}:${process.env.NEXT_PUBLIC_DB_PASS}@cluster0.np7fjqr.mongodb.net/?retryWrites=true&w=majority`;

        await mongoose
            .connect(uri, 
                {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            } as mongoose.ConnectOptions
            )
            .then(() => console.log("Connection successful"))
            .catch((err) => console.log(err));

        // Access the default Mongoose connection
        db = mongoose.connection;

        console.log("Connected to MongoDB!");
        return db;
    } catch (error : any) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

export default ConnectDB;
