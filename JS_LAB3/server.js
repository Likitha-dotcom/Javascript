// Importing Modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const port = 3000;
const app = express();

//Importing the Book Route
const bookRoutes = require("./routes/book");

// Mongo Authentication
const mongoDbURL = "mongodb+srv://admin:admin@cluster0.npe3c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routing
app.use("/api/book", bookRoutes);

//MongoDB Connection

mongoose.connect(mongoDbURL).then(() => {
	console.log("Database Connected");
	app.listen(port, () => console.log(`Server started at localhost:${port}`));
}).catch((err)=> console.log(err));
