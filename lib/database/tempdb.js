const mongoose = require("mongoose");
const TempDb = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
    default: "Akashi-MD"
  },
  creator: {
    type: String,
    default: "Akashi"
  },
  data: {
    type: Object,
    default: {}
  }
});
const dbtemp = mongoose.model("dbtemp", TempDb);
module.exports = {
  dbtemp
};