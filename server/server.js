
const express = require("express")
const cors = require("cors")
const fs = require("fs/promises")
const path = require("path")

const app = express()
const PORT = 3001

const messagesFile = path.join(__dirname, "messages.json")

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Servidor do Kind Pet funcionando!")
})

// Recebe e salva uma mensagem
app.post("/api/messages", async (req, res) => {
  try {
    const { nome, email, assunto, mensagem } = req.body

    if (!nome || !email || !assunto || !mensagem) {
      return res.status(400).json({
        erro: "Preencha todos os campos."
      })
    }

    const conteudo = await fs.readFile(messagesFile, "utf8")
    const mensagens = JSON.parse(conteudo)

    const novaMensagem = {
      id: Date.now(),
      nome,
      email,
      assunto,
      mensagem,
      data: new Date().toISOString()
    }

    mensagens.push(novaMensagem)

    await fs.writeFile(
      messagesFile,
      JSON.stringify(mensagens, null, 2),
      "utf8"
    )

    res.status(201).json({
      mensagem: "Mensagem salva com sucesso!"
    })
  } catch (error) {
    console.error("Erro ao salvar mensagem:", error)

    res.status(500).json({
      erro: "Não foi possível salvar a mensagem."
    })
  }
})

app.get("/api/messages", async (req, res) => {
  try {
    const conteudo = await fs.readFile(messagesFile, "utf8")
    const mensagens = JSON.parse(conteudo)

    res.json(mensagens)
  } catch (error) {
    console.error("Erro ao consultar mensagens:", error)

    res.status(500).json({
      erro: "Não foi possível carregar as mensagens."
    })
  }
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
