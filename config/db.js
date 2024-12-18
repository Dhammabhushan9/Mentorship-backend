const mongoose = require('mongoose');
 
 
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://cob56dhammabhushanwaghmare:omtNTxv1bOtWqTmD@cluster0.jtu0y.mongodb.net/Mentorship-Matching-Platform");
    console.log("hi connected ");
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);  
  }


};

 
module.exports = connectDB;
