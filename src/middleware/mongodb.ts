import mongoose from "mongoose";

const connect = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }

  await mongoose.connect(process.env.MONGODB_URI!);
  return handler(req, res);
};

export default connect;
