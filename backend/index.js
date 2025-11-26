
import express from "express"
import cors from "cors"
import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.post("/send-email", async (req, res) => {
    try {
        const { nombre, correo, mensaje } = req.body

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        })

        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: "info@3dent.com.co",
            subject: `Nuevo mensaje de ${nombre}`,
            html: `
                <h2>Nuevo mensaje desde tu web</h2>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Correo:</strong> ${correo}</p>
                <p><strong>Mensaje:</strong> ${mensaje}</p>
            `
        })

        return res.status(200).json({ success: true, message: "Correo enviado" })

    } catch (error) {
        return res.status(500).json({ success: false, error: error.message })
    }
})

app.listen(3002, () => {
    console.log("Servidor corriendo en puerto 3002")
})
