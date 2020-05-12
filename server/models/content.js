import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const contentSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: {
    type: String, 
  },
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String, 
  }, 
  url: {
    type: String,
    required: true, 
  },
  author: {
    type: String,
  }, 
  type: {
    type: String,
    enum: ['NEWS', 'SOCIAL-MEDIA'], 
    required: false
  }, 
  subtype: {
    type: String, 
    enum: ['TWITTER', 'REDDIT', 'LOCAL', 'NATIONAL'], 
    required: false
  }
});
export default mongoose.model('Content', contentSchema);