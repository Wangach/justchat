const { mongoose, Schema } = require('mongoose')
const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    date: { type: Date, default: Date.now }
})
const showLogin = ((req, res) => {
    res.status(200).json({"status": "success", "message": "Loaded The Root Directory"});
})
const registerUser = (async(req, res) => {
    const regUserModel = mongoose.model('chat', userSchema);
    try{
        let { rjina, rpepe, rsiri } = req.body;
        const oldUser = await regUserModel.findOne({email: rpepe})
        if (oldUser) {
            res.status(409).json({status: "error", message: "User already exists"})
        }else {
              //Encrypt Password
            // let encryptedPass = await bcrypt.hash(rsiri, 10);
            //Create user 
            let createdUser = await regUserModel.create({
                name: rjina,
                email: rpepe.toLowerCase(),
                password: rsiri
            })
            let ins = createdUser.save();
            res.status(200).json({status: "success", msg: `${createdUser.name} has been Registered`});
        }
    }
    catch(err){
        console.error(err)
    }
})
const loginUser = async(req, res) => {
    const loginUserModel = mongoose.model('chat', userSchema);
    try{
        let {lpepe, lsiri} = req.body;
        let foundUser = await loginUserModel.findOne({email: lpepe, password: lsiri})
        if(foundUser){
            return res.status(200).json({status: "success", msg: `${foundUser}`});
        }
        res.status(409).json({status: "error", msg: "User not found"});
    }
    catch(err){
        console.error(err);
    }
}
module.exports = {showLogin, registerUser, loginUser}