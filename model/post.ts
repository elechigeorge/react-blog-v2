import mongoose from 'mongoose';



const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    images: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    reactions: {
        likes: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId
                }
            }
        ],
        dislikes: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId
                }
            }
        ]
    }
});

const Post = mongoose.model("Post", PostSchema);

export default Post;