import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async ()=> {
    //strictQuery so we do not get errors in console
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDB is already connected')
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "rossys",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true;

        console.log('MongoDB connected');
    } catch (error) {
        console.log(error)
    }
}