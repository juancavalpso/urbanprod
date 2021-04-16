const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const bitaSchema = mongoose.Schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean
})

const metaMapsSchema = mongoose.Schema({
    copyright: String,
    date:  String,
    location:{
        lat:String,
        lng:String
    },
    pano_id:String,
    status:String
 })


 bitaSchema.methods.generateAuthToken = async function() {
    // Generate an auth token for the user
    const bitacora = this
    const token = jwt.sign({_id: bitacora._id}, process.env.JWT_KEY)
    bitacora.tokens = bitacora.tokens.concat({token})
    await bitacora.save()
    return token
 }

bitaSchema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const bitacora = this
    // if (bitacora.isModified('password')) {
    //     bitacora.password = await bcrypt.hash(bitacora.password, 8)
    // }
    next()
})

 bitaSchema.deleteAll = async (req, res) => {
    await Bitacora.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Tutorials were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  }; 


  const Bitacora = mongoose.model('Bitacora', bitaSchema)

module.exports = Bitacora

/**
 * 
 app.get('/parkings', (req,res) => {
    res.status(200).json(parkings)
})

app.get('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const parking = parkings.find(parking => parking.id === id)
    res.status(200).json(parking)
})

app.post('/parkings', (req,res) => {
    parkings.push(req.body)
    res.status(200).json(parkings)
})

 */