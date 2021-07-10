const {User} = require('../../db');

module.exports = async (req, res, next) => {
    const {id} = req.params;
    try{
        await User.destroy({
            where: {
                id: id
            }
        })
        return res.json({success: 'User successfully deleted'}).status(200);
    }catch (err){
        next(err);
        return res.json(err);
    }
}