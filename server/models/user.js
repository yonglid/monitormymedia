import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
      type: String
  }, 
  history: {
      type: String
  }, 
  subscriptions: {
      type: String
  }, 
  starred: {
      type: String
  }
});
export default mongoose.model('User', userSchema);