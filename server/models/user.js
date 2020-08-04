import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String
    },
    state: {
        type: String
    },
    districtNumber: {
        type: Number
    },
    newsPreference: {
        type: String,
        enum: ['Local', 'Twitter', 'Facebook', 'National'], 
        required: false,
    },
    districtSearch: {
        type: Number
    },
    dateRange: {
        type: Date
    },
    history: {
        type: String
    },
    subscriptions: {
        type: String
    },
    starred: {
        type: String
    },
    notification: {
        type: Boolean
    }
});
export default mongoose.model('User', userSchema);