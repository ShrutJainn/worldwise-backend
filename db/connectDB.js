import mongoose from "mongoose";

export async function connectDB() {
  await mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((err) => console.log(err));
}
