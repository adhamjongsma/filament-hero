const mongoose = require('mongoose');
const Filament = require('../models/Filament')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDB Connect: ${conn.connection.host}`)

    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

export default async (req, res) => {


    const id = req.query.id

    const foundFilament = await Filament.findById(id)

    if (foundFilament) {
        res.status(200).json(foundFilament)
    } else {
        res.status(404).json({ message: "Filament not found 😩" })
    }


}