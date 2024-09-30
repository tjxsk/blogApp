const mongoose=require("mongoose");
const schema = mongoose.Schema({
//Write missing code here
    username: String,
    email: String,
    description: String
});
const blogData = mongoose.model('blog', schema);


//Write missing code here
module.exports = blogData;