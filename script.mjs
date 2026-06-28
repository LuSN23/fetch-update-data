import fetch from 'node-fetch';

fetch('https://reqres.in/api/users', {  // aplicando uma URL para buscar dados através de uma API fake chamada reqres
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',  // informando ao Fetch que você vai passar JSON
        'x-api-key': process.env.API_KEY    // pegando a chave do arquivo .env por questão de segurança
    },
    body: JSON.stringify({ // convertendo o objeto em JSON para ser transportado,
                           // o body é onde vai o conteúdo que você quer adicionar
        id: 7,
        email: 'bob.prescott@reqres.in',
        first_name: 'Robert',
        last_name: 'Prescott',
        avatar: 'https://reqres.in/img/faces/10-image.jpg' // adicionando um novo usuário ao banco de dados
    })
}).then(response => response.json()) // recebendo o objeto Response do Fetch, convertendo os dados para JSON e passando adiante para o próximo .then
  .then(data => console.log(data))    // recebendo a resposta convertida em JSON (Promise) e mostrando no log
  .catch(error => console.log('ERROR', error.message)); // tratando possíveis erros