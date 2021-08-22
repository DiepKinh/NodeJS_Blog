module.exports = {
  // Lấy 1 list
  mutipleMongooseToObject: function (mongooses) {
    return mongooses.map((mongooses) => mongooses.toObject());
  },
  // Lấy 1 item
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
