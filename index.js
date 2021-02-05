const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');

(async () => {
    const url = 'mongodb+srv://admin:MVhyXlPJWaD2Cfbq@cluster0.7fu0x.mongodb.net/ocean_db?retryWrites=true&w=majority';

    const dbName = 'ocean_db';

    console.info('Conectando ao banco de dados...');

    const client = await MongoClient.connect(url, { useUnifiedTopology: true });

    console.info('MongoDB conectado com sucesso!');

    const db = client.db(dbName);

    const app = express()

    app.use(bodyParser.json());

    const port = process.env.PORT || 3000;

  /*
  Create, Read (All/Single), Update & Delete
  Criar, Ler (Tudo ou Individual), Atualizar e Remover
  */

  const mensagens = db.collection('mensagens');

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  // Criar (Create)
  app.post('/mensagens', async (req, res) => {
    const mensagem = req.body;

    await mensagens.insertOne(mensagem);

    res.send(mensagem);
  });

  // Ler Tudo (Read All)
  app.get('/mensagens', async (req, res) => {
    res.send(await mensagens.find().toArray());
  });

  // Ler Individual (Read Single)
  app.get('/mensagens/:id', async (req, res) => {
    const id = req.params.id;

    const mensagem = await mensagens.findOne({ _id: ObjectId(id) });
    
    res.send(mensagem);
  });

  // Atualizar (Update)
  app.put('/mensagens/:id', async (req, res) => {
    const id = req.params.id;

    const mensagem = req.body;

    await mensagens.updateOne(
      { _id: ObjectId(id) },
      { 
        $set: mensagem
      }
    );

    res.send('Mensagem editada com sucesso.');
  });

  // Remoção (Delete)
  app.delete('/mensagens/:id', async (req, res) => {
    const id = req.params.id;

    await mensagens.deleteOne({ _id: ObjectId(id) });

    res.send('Mensagem removida com sucesso.');
  });

  app.listen(port, () => {
    console.info('Servidor rodando em http://localhost:' + port);
  });

})();
