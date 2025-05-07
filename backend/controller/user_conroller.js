import userModel from '../model/user_model.js';
import bcrypt from 'bcryptjs';
export const regisiter = async (req, res) =>{
    const {name, email, password, number, image} = req.body;
    try {
        const userEmail = await userModel.findOne({ email });
        if (userEmail) {
            return res.status(400).json({ message: "Email not found" });
        }
        if(!name || !email || !password || !number ){
            return res.status(400).json({ message: "Please fill in all fields" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new userModel({ name, email, password : hashedPassword, number, image });
        const userSave = await user.save();
        res.json(userSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
export const login = async (req, res) =>{
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({ email });
        console.log(user)
        if (!user) {
            return res.status(400).json({ message: "Email not found" });
        }
        console.log("User Password:", user.password);
        console.log("Entered Password:", password);
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("isMatch:", isMatch);
        if (!isMatch) {return res.json({ message: "Invalid credentials.", success: false });}
        return res.json(user);
    }catch(error){
        res.status(400).json({ message: error.message });
    }

}

export const getuser = async (req, res) =>{
    try {
        const user = await userModel.find();
        res.json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
}