import app from "./app";
import mongoose from "mongoose";

mongoose
    .connect("mongodb://localhost:27017/furfinders")
    .then(() => console.log(`DB connected!`));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
