const userModel = require('../model/userModel')

const showLogin = ((req, res) => {
    res.status(200).json({"status": "success", "message": "Loaded The Root Directory"});
})
const registerUser = (async(req, res) => {
    try{
        let { rjina, rpepe, rsiri } = req.body;
        const oldUser = await userModel.findOne({email: rpepe})
        if (oldUser) {
            res.status(409).json({status: "error", message: "User already exists"})
        }else {
              //Encrypt Password
            // let encryptedPass = await bcrypt.hash(rsiri, 10);
            //Create user 
            let createdUser = await userModel.create({
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
    try{
        let {lpepe, lsiri} = req.body;
        let foundUser = await userModel.findOne({email: lpepe, password: lsiri})
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