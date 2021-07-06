const { Admin } = require("../../db.js");

module.exports = async (req, res, next) => {

    let { name, contact, email, password , id} = req.body;
    if (password) var hashedPassword = await bcrypt.hash(password, 12);

    try {
        let User = await Admin.update({
            name: name || "Administrador",
            contact,
            email,
            password: hashedPassword
        },
            { where: { id: id } });

        return res.json(User).status(200);
    }
    catch (err) {
        next(err);
        res.status(500).json(new Error("Error updating the alert"))
    }
};