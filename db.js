const mongoose = require ("mongoose")

// step to connect my application to db
mongoose.connect ("mongodb+srv://kolawolehakeem6555_db_user:qwd1D2p43tCqghIC@cluster0.vqwbw7b.mongodb.net/").then(()=> console.log("database connection established")).catch((err) => console.log("Unable to connect to database due to" + err))