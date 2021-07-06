const { Admin } = require("../../db.js");
const bcrypt = require('bcryptjs');

module.exports = async (req, res, next) => {
    let { name, email, password, contact } = req.body;
    if(password) {
        var hashedPassword = await bcrypt.hash(password, 12);
    }
    try
    {
        let newAdmin = await Admin.create({
            name,
            email,
            contact,
            password: hashedPassword,
        });
        return res.status(200).json({success: `Admin created successfully`});
    }
    catch(err){
        next(err);
        res.status(500).json(new Error("Error creating new Admin"))
    }
};