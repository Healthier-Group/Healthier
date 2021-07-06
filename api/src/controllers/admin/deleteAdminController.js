const { Admin } = require("../../db.js");

module.exports = async (req, res, next) => {
    let delId = req.params.id;   
    try
    {   
        await Admin.destroy( {
            where: {
                id: delId,
            }
        });

        return res.json({succes: `Admin deleted successfully`}).status(200);
    }
    catch(err){
        next(err);
        res.status(500).json(new Error(`Error deleting admin ID ${delId}`));
    }

};