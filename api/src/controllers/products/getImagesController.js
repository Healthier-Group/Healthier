const {cloudinary} = require('../utils/cloudinary')

module.exports = async (req, res) => {
  const {resources} = await cloudinary.search.expression
  ('folder:products')
  .sort_By('public_id','desc')
  .max_results(30)
  .execute()
  const publicIds = resources.map(file => file.public_id)
  res.send(publicIds)
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
