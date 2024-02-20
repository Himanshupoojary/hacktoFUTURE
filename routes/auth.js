// routes/auth.js

import express from 'express';
import passport from 'passport';
import User from './models/User.js';

const router = express.Router();

// Register form route
router.get('/register', (req, res) => {
    res.render('register');
});

// Register post route
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    User.register(new User({ username }), password, (err, user) => {
        if (err) {
            console.error('Error registering user:', err);
            return res.render('register', { error: err.message });
        }
        passport.authenticate('local')(req, res, () => {
            res.redirect('/dashboard');
        });
    });
});

// Login form route
router.get('/login', (req, res) => {
    res.render('login');
});

// Login post route
router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/auth/login',
    failureFlash: true
}));

// Logout route
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/auth/login');
});

export default router;
