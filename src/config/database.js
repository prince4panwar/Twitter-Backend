import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost/twitter-dev");
  } catch (error) {
    console.log("Something went wrong in database connection");
  }
};

export default connect;
