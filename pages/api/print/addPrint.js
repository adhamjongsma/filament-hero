const mongoose = require('mongoose');
const Print = require('../models/Print');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
       

    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

export default async (req, res) => {

    await connectDB();
    console.log(req.body)
    const newPrint = new Print(JSON.parse(req.body))

    const createdPrint = await newPrint.save()


    res.status(200).json(createdPrint)
}