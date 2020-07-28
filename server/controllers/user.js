import mongoose from 'mongoose';
import User from '../models/user';

//select user history preferences for newsfeed
export function getAllUserHistory(req, res) {
    User.find()
        .select('_id state districtNumber newsPreference districtSearch dateRange notification')
        .then((allUserHistory) => {
            return res.status(200).json({
                success: true,
                message: 'A list of all saved user history',
                content: allUserHistory,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: err.message,
            });
        });
}

//save all user history preferences 
export function saveAllUserHistory(req, res) {
    const user = new User({
        _id: mongoose.Types.ObjectId(),
        state: req.body.state,
        districtNumber: req.body.districtNumber,
        newsPreference: req.body.newsPreference,
        districtSearch: req.body.districtSearch,
        dateRange: req.body.dateRange,
        notification: req.body.notification,
        starred: req.body.starred,
    });
    return user
        .save()
        .then((allUserHistory) => {
            return res.status(201).json({
                success: true,
                message: 'Saved all user history successfully',
                User: allUserHistory,
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: error.message,
            });
        });
}

//