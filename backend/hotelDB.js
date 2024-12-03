require("dotenv").config();
const connectDB = require("./db/connect");
const hotel = require("./models/hotels");
const HotelJson = require("./hotels.json");

const start = async () => {
    try {
        // Step 1: Connect to MongoDB
        await connectDB(process.env.MONGODB_URL);

        // Step 2: Clear old data
        await hotel.deleteMany();
        console.log("Old data removed.");

        // Step 3: Insert new data
        await hotel.create(HotelJson);
        console.log("Data Imported Successfully.");
    } catch (error) {
        console.error("Error:", error.message);
    }
};

// Run the script
start();
