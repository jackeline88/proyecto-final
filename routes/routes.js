import { Router } from "express"
import { createUsuario, obtenerUsuarios, updateUsuario, deleteUsuario } from '../controllers/usuarioController.js'

const router = Router();

router.get("/hello", function (req, res) {
    res.json({ "Hola": "Mundo" })
})

router.get("/usuarios", function (req, res) {
    try {
        obtenerUsuarios(req, res);
    } catch (error) {
        //res.status(500).json(req.body)
        console.log(error)
    }
})
router.post("/usuarios", async function (req, res) {
    try {
        await createUsuario(req, res);
    } catch (error) {
        //res.status(500).json(req.body)
        console.log(error)
    }

})
router.patch("/usuarios", async function (req, res) {
    try {
        await updateUsuario(req, res);
    } catch (error) {
        //res.status(500).json(req.body)
        console.log(error)
    }

})
router.delete("/usuarios", async function (req, res) {
    try {
        await deleteUsuario(req, res);
    } catch (error) {
        //res.status(500).json(req.body)
        console.log(error)
    }

})




export default router
