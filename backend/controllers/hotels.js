const hotel = require("../models/hotels");

const getAllhotels = async (req, res) => {
    try {
        const { name, location, sortBy } = req.query;
        
        // Build query
        const query = {};
        if (name) query.name = { $regex: name, $options: 'i' };
        if (location) query["location.city"] = { $regex: location, $options: 'i' };

        // Build sort object
        let sortOptions = {};
        if (sortBy) {
            switch (sortBy) {
                case 'price_asc':
                    sortOptions.price = 1;
                    break;
                case 'price_desc':
                    sortOptions.price = -1;
                    break;
                case 'rating_desc':
                    sortOptions.rating = -1;
                    break;
                case 'name_asc':
                    sortOptions.name = 1;
                    break;
            }
        }

        // Find hotels with sorting
        const hotels = await hotel.find(query).sort(sortOptions);

        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllhotels };

