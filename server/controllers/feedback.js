import mongoose from 'mongoose';
import Feedback from '../models/feedback';

// create new feedback input
export function createFeedback(req, res) {
    const feedback = new Feedback({
        _id: mongoose.Types.ObjectId(),
        likes: req.body.likes,
        features: req.body.features,
        rating: req.body.rating,
    });
    return feedback
        .save()
        .then((newFeedback) => {
            return res.status(201).json({
                success: true,
                message: 'New feedback created successfully',
                Feedback: newFeedback,
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: error.message
            });
        });
}