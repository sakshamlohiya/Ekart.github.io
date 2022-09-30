import mongoose from 'mongoose';

const Connection = async (username, password) => {
    // const URL = `mongodb://${username}:${password}@ecommerceweb-shard-00-00.fdvft.mongodb.net:27017,ecommerceweb-shard-00-01.fdvft.mongodb.net:27017,ecommerceweb-shard-00-02.fdvft.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-8a6bhp-shard-0&authSource=admin&retryWrites=true&w=majority`;
    // const URL = `mongodb://${username}:${password}@ecommerce-shard-00-00.fdvft.mongodb.net:27017,ecommerce-shard-00-01.fdvft.mongodb.net:27017,ecommerce-shard-00-02.fdvft.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-ilaj5d-shard-0&authSource=admin&retryWrites=true&w=majority`;
    //mongodb+srv://shivprakash:<password>@cluster0.uowd2y9.mongodb.net/?retryWrites=true&w=majority

    // const URL = `mongodb+srv://${username}:${password}@cluster0.uowd2y9.mongodb.net/Ecommerce?retryWrites=true&w=majority`
    const URL = 'mongodb+srv://sakshamEkart:sakshamEkart@cluster0.b0rctg0.mongodb.net/test'
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};
export default Connection;