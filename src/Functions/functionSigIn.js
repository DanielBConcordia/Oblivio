import axios from 'axios';

async function handleSignIn(formData) {
  let body = {
    cpf            : formData.cpf,
    dtNascimento   : formData.dataNascimento,
    email          : formData.email,
    telefone       : formData.telefone,
    telefoneReserva: formData.telefoneRes,
    nomeSocial     : formData.apelido,
    nome           : formData.nomeComp,
    senha          : formData.senha,
    rua            : formData.rua,
    cep            : formData.cep,
    bairro         : formData.bairro,
    numeroCasa     : formData.numero,
    cidade         : formData.cidade,
    uf             : formData.uf,
    complementoCasa: formData.complemento,
    pontoReferencia: formData.pontRef,
  }

    try {
      

      const response = await axios.post('https://oblivio-api.vercel.app/cuidador/cadcuidador', body);

      console.log(response);
      alert("Cadastro Concluído");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  }

  export default handleSignIn;