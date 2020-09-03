import mongoose, {Schema} from "mongoose";

const postSchema = new Schema ({
    name: String,
    count: Number
});

const post = mongoose.model("Post", postSchema);

export default post;