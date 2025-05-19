import userModel from '../model/user_model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';

// JWT secret key - should be in environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const register = async (req, res) => {
    try {
        // Validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                success: false,
                errors: errors.array() 
            });
        }

        const { username, email, password, number } = req.body;
        const image = req.file ? req.file.filename : null;

        // Input validation
        if (!username || !email || !password || !number) {
            return res.status(400).json({ 
                success: false,
                message: "Please fill in all required fields" 
            });
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                success: false,
                message: "Invalid email format" 
            });
        }

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ 
                success: false,
                message: "Email already registered" 
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create new user
        const user = new userModel({
            username,
            email,
            password: hashedPassword,
            number,
            image
        });

        const savedUser = await user.save();

        // Generate JWT token
        const token = jwt.sign(
            { userId: savedUser._id },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Remove password from response
        const userResponse = savedUser.toObject();
        delete userResponse.password;

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: userResponse,
            token
        });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ 
            success: false,
            message: "Internal server error",
            error: error.message 
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Input validation
        if (!email || !password) {
            return res.status(400).json({ 
                success: false,
                message: "Please provide both email and password" 
            });
        }

        // Find user
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ 
                success: false,
                message: "Invalid credentials" 
            });
        }

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ 
                success: false,
                message: "Invalid credentials" 
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Remove password from response
        const userResponse = user.toObject();
        delete userResponse.password;

        res.status(200).json({
            success: true,
            message: "Login successful",
            data: userResponse,
            token
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ 
            success: false,
            message: "Internal server error",
            error: error.message 
        });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await userModel.find().select('-password');
        res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });

    } catch (error) {
        console.error('Get users error:', error);
        res.status(500).json({ 
            success: false,
            message: "Internal server error",
            error: error.message 
        });
    }
};

export const deleteAccount = async (req, res) => {
    try {
        const userId = req.user.userId; // Assuming this comes from auth middleware
        console.log(userId);
        // Find and delete the user
        const deletedUser = await userModel.findByIdAndDelete(userId);
        
        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Account deleted successfully"
        });

    } catch (error) {
        console.error('Delete account error:', error);
        res.status(500).json({ 
            success: false,
            message: "Internal server error",
            error: error.message 
        });
    }
};