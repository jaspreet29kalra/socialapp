const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
          user:{
                    type:String,
                    required:true
          },
          title:{
                    type:String,
                    required:true
          },
          image:{
                    type:String,
                
          },
          video:{
                    type:String,
          },
          like:{
                    type:Array,
          },
          dislike:{
                    type:Array,
          },
})

module.exports = mongoose.model("Post" , PostSchema);