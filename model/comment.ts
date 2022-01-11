import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    comment: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }
})



const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;