const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://safiur:gaG7TGOfExLZ0qls@cluster0.eddad.mongodb.net/products?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );
};

module.exports = connect;
