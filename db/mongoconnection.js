import mongoose from 'mongoose';

const uri = "mongodb+srv://matthew:29061992abCD!yesokmen@happyquiz.c4srh.mongodb.net/demo?retryWrites=true&w=majority";

const connectMongoDB = async () => {
  try {
    const MongoConnect = await mongoose.connect(uri);
    console.log("MongoDB Connected to 'demo' database");
    mongoose.set('bufferCommands', false);

    mongoose.connection.on('connected', () => {
      console.log('Mongoose connected to', mongoose.connection.name);
    });

    mongoose.connection.on('error', (err) => {
      console.error('Mongoose connection error:', err);
    });
    console.log("resukt from connection!");
    console.log(MongoConnect);
    return MongoConnect;

  } catch (err) {
    console.error("Could not connect to MongoDB:", err);
    return null;
  }
};


export default connectMongoDB;