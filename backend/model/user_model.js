import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        minlength: [3, 'Username must be at least 3 characters long']
    },
    email: { 
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    password: { 
        type: String, 
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long']
    },
    number: { 
        type: String, 
        required: [true, 'Phone number is required'],
        validate: {
            validator: function(v) {
                return v.toString().length >= 10;
            },
            message: 'Phone number must be at least 11 digits'
        }
    },
    image: { 
        type: String, 
        default: null
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'suspended'],
        default: 'active'
    },
    lastLogin: {
        type: Date,
        default: null
    }
}, {
    timestamps: true
});


const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;