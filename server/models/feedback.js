import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const feedbackSchema = new mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    likes: {
        type: String,
    },
    features: {
        type: String,
    },
    rating: {
        type: Number,
    }
});
export default mongoose.model('Feedback', feedbackSchema);