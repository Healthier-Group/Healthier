const { Product } = require("../../db.js");
const {cloudinary} = require('../utils/cloudinary')

module.exports = async (req, res) => {
  try {
      const fileStr = req.body.data
      const uploadedResponse = await cloudinary.uploader.
      upload(fileStr, {
        upload_preset: 'products'
      })
      console.log(uploadedResponse)
      res.json({msg:"OK Cloudinary"})
      
  } catch (error) {
      console.error(error)
      res.status(500).json({err: 'something went wrong'})
  }
};
