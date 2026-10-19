
const express = require("express")
const cors = require("cors")
const fs = require("fs/promises")
const path = require("path")

const app = express()
const PORT = 3001

const messagesFile = path.join(__dirname, "messages.json")

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}))
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

app.delete("/api/messages/:id", async (req, res) => {
  try {
    const { id } = req.params
    console.log(`Tentando excluir mensagem com ID: ${id}`)

    const conteudo = await fs.readFile(messagesFile, "utf8")
    const mensagens = JSON.parse(conteudo)

    const messageId = Number(id)
    const filteredMessages = mensagens.filter((m) => m.id !== messageId)

    console.log(`Total antes: ${mensagens.length}, Total depois: ${filteredMessages.length}`)

    if (filteredMessages.length === mensagens.length) {
      console.log(`Mensagem ${id} não encontrada no arquivo.`)
      return res.status(404).json({
        erro: "Mensagem não encontrada."
      })
    }

    await fs.writeFile(
      messagesFile,
      JSON.stringify(filteredMessages, null, 2),
      "utf8"
    )

    console.log(`Mensagem ${id} excluída com sucesso.`)
    res.status(200).json({
      mensagem: "Mensagem excluída com sucesso!"
    })
  } catch (error) {
    console.error("Erro crítico ao excluir mensagem:", error)

    res.status(500).json({
      erro: "Erro interno ao excluir a mensagem."
    })
  }
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
