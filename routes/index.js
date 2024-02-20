// routes/index.js

import express from 'express';
import { ensureAuthenticated } from '../middleware/auth.js';
import Message from '../models/Message.js';

const router = express.Router();

// Dashboard route - protected
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    // Fetch messages for the logged-in user
    Message.find({ $or: [{ sender: req.user._id }, { receiver: req.user._id }] })
        .populate('sender', 'username')
        .populate('receiver', 'username')
        .exec((err, messages) => {
            if (err) {
                console.error('Error fetching messages:', err);
                res.status(500).send('Internal Server Error');
            } else {
                res.render('dashboard', { user: req.user, messages });
            }
        });
});

// Compose message route - protected
router.get('/compose', ensureAuthenticated, (req, res) => {
    res.render('compose', { user: req.user });
});

// Inbox route - protected
router.get('/inbox', ensureAuthenticated, (req, res) => {
    // Fetch messages for the logged-in user
    Message.find({ receiver: req.user._id })
        .populate('sender', 'username')
        .exec((err, messages) => {
            if (err) {
                console.error('Error fetching messages:', err);
                res.status(500).send('Internal Server Error');
            } else {
                res.render('inbox', { user: req.user, messages });
            }
        });
});

export default router;
