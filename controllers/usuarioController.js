import Usuario from '../models/usuario.js'

const obtenerUsuarios = async (req, res) =>{
    try {
        const users = await Usuario.find() 
        console.log(usuarios)
        res.json({usuarios:users})
    } catch (error) {
        res.status(500).json({error})
        
    }
}

const createUsuario = async (req, res) =>{
    const usuario = new Usuario({
        nombre: req.body.nombre,
        fechaNacimiento: req.body.fechaNacimiento,
        email: req.body.email,
        promedio: req.body.promedio,
        foto: req.body.foto,
        password: req.body.password
    })
    try{
       await usuario.save()
        res.json(usuario)
    }catch(error) {
        res.status(500).json(error)
    }
}

const updateUsuario = async (req,res) =>{
    try{
        await updateUsuario()
         res.json(usuario)
     }catch(error) {
         res.status(500).json(error)
     }
}

const deleteUsuario = async (req,res) =>{
    try{
        await deleteUsuario()
         res.json(usuario)
     }catch(error) {
         res.status(500).json(error)
     }
}

export{createUsuario,obtenerUsuarios,updateUsuario,deleteUsuario}