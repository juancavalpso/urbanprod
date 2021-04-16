           //importamos el middleware de autenticación
const express = require('express')
const Bitacora = require('../models/Bitacora')

const router = express.Router()

router.get('/bitacora', async(req, res) => {      //router para obtener el perfil de usuario -> solicitud al endpoint /users/me
    try {
       const { name } = req.body
          const bitacora = await Bitacora.findByCredentials(name)
       if (!bitacora) {
           return res.status(401).send({error: 'bitacora failed! EEEE Check '})
       }
      
       res.send({ bitacora })
    } catch (error) {
       res.status(400).send(error)
    }                             
 })

router.post('/bitacora', async (req, res) => {
    // Crear nuevo usuario
    try {
        const bitacora = new Bitacora(req.body)                 // crea un nuevo usuario junto con la información de usuario suministrada a la que accedemos desde req.body
        await bitacora.save()                               // guarda e usuario
        //const token = await bitacora.generateAuthToken()    //generamos un token de autenticación
        res.status(201).send({ bitacora })           //lo devolvemos (el token) como respuesta junto con los datos del usuario
    } catch (error) {
        res.status(400).send(error)
    }
})

 router.delete('/remove/:id', (req, res, next) => {
    console.log("pasando aaa 11111");
    const bitacora = new Bitacora(req.body)   
    bitacora.deleteAll(req, res, (err) => {
      if (err) {
        req.flash("error", err);
        return res.status(400).send(error);
      }
  
      req.flash("success", "Your account has been deleted.");
      //req.logout();
      return res.status(201).send({ bitacora });
    });
  }); 
  

module.exports = router