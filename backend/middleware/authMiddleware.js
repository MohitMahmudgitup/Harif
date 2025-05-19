import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'No authentication token, access denied'
            });
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = { userId: decoded.userId };
        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'Token is invalid or expired'
        });
    }
};
