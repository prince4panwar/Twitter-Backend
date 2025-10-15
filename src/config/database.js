import mongoose from "mongoose";

const connect = async () => {
  await mongoose.connect("mongodb://localhost/twitter-dev");
};

export default connect;
