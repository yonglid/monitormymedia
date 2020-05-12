import mongoose from 'mongoose';
import Content from '../models/content';
// create new content
export function createContent(req, res) {
  const content = new Content({
    _id: mongoose.Types.ObjectId(),
    title: req.body.title,
    url: req.body.url, 
    author: req.body.author, 
    summary: req.body.summary,
    description: req.body.description,
  });
  return content
    .save()
    .then((newContent) => {
      return res.status(201).json({
        success: true,
        message: 'New content created successfully',
        Content: newContent,
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

// Get all content
export function getAllContent(req, res) {
    Content.find()
      .select('_id title description')
      .then((allContent) => {
        return res.status(200).json({
          success: true,
          message: 'A list of all saved content',
          content: allContent,
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

// get single content
export function getSingleContent(req, res) {
    const id = req.params.contentId;
    Content.findById(id)
      .then((singleContent) => {
        res.status(200).json({
          success: true,
          message: `More on ${singleContent.title}`,
          Content: singleContent,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: 'This content does not exist',
          error: err.message,
        });
     });
  }

export function updateContent(req, res) {
    const id = req.params.contentId;
    const updateObject = req.body;
    Content.update({ _id:id }, { $set:updateObject })
        .exec()
        .then(() => {
            res.status(200).json({
                success: true,
                message: 'Content is updated',
                updateContent: updateObject,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.'
            });
        });
}

// delete a content
export function deleteContent(req, res) {
    const id = req.params.contentId;
    Content.findByIdAndRemove(id)
      .exec()
      .then(()=> res.status(204).json({
        success: true,
      }))
      .catch((err) => res.status(500).json({
        success: false,
      }));
  }