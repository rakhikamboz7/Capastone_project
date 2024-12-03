// const Hotel = require('../models/hotels');

// const searchHotels = async (req, res) => {
//     try {
//         const {
//             city,
//             checkIn,
//             checkOut,
//             guests,
//             rooms
//         } = req.query;

//         // Basic query object
//         let query = {};

//         // Add city filter
//         if (city) {
//             query['location.city'] = new RegExp(city, 'i');
//         }

//         // Find hotels
//         let hotels = await Hotel.find(query);

//         // Filter hotels based on room availability and capacity
//         hotels = hotels.filter(hotel => {
//             // Check if hotel has enough rooms
//             const availableRooms = hotel.rooms.filter(room => {
//                 // Check if room is available
//                 const isAvailable = room.available;
                
//                 // Check if room has any conflicting bookings
//                 const hasNoConflict = !hotel.bookings.some(booking => {
//                     const bookingCheckIn = new Date(booking.checkIn);
//                     const bookingCheckOut = new Date(booking.checkOut);
//                     const requestedCheckIn = new Date(checkIn);
//                     const requestedCheckOut = new Date(checkOut);
                    
//                     return (
//                         booking.roomId.equals(room._id) &&
//                         requestedCheckIn < bookingCheckOut &&
//                         requestedCheckOut > bookingCheckIn
//                     );
//                 });

//                 // Check if room capacity meets guest requirements
//                 const meetsCapacity = room.capacity >= Math.ceil(guests / rooms);

//                 return isAvailable && hasNoConflict && meetsCapacity;
//             });

//             return availableRooms.length >= rooms;
//         });

//         // Add additional information for client
//         const enhancedHotels = hotels.map(hotel => ({
//             ...hotel.toObject(),
//             totalPrice: hotel.price * rooms * Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)),
//             availableRooms: hotel.rooms.filter(room => room.available).length,
//             stayDuration: Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24))
//         }));

//         res.status(200).json({
//             success: true,
//             count: enhancedHotels.length,
//             data: enhancedHotels
//         });

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Error searching hotels",
//             error: error.message
//         });
//     }
// };

// module.exports = { searchHotels };

