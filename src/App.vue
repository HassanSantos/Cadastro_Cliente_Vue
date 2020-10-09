<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Produtos Front</a>
      </div>
    </nav>

    <div class="container">
      <form @submit.prevent="salvar">

          <label>Nome</label>
          <input type="text" placeholder="Nome" v-model="cliente.nome">
          <label>CPF</label>
          <input type="number" placeholder="CPF" v-model="cliente.cpf">
          <label>CEP</label>
          <input type="text" placeholder="cep" v-model="cliente.cep">
          <label>Telefone</label>
          <input type="text" placeholder="telefone" v-model="cliente.telefone">
          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>CPF</th>
            <th>CEP</th>
            <th>Logradouro</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="cliente of clientes" :key="cliente.id" >

            <td>{{ cliente.nome }}</td>
            <td>{{cliente.cpf}}</td>
            <td> {{ cliente.cep }}</td>
            <td> {{ cliente.logradouro }}</td>
            <td>
              <button @click="editar(cliente)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>
import Cliente from './services/clientes' 

export default{

  data(){
    return {
      cliente:{
        id: '',
        nome: '',
        cpf: '',
        cep: '',
        logradouro: ''
      },
      clientes:[]
    }
  },

  mounted(){
    this.listar()
  },

  methods:{

    listar(){
      Cliente.listar().then(resposta =>{
      this.clientes = resposta.data
    })
  },

    salvar(){
      if(!this.cliente.id){
        Cliente.salvar(this.cliente).then(resposta =>{
          this.cliente = {}
          alert(resposta, '')
          this.listar()
        })
      }else{
      Cliente.atualizar(this.cliente.id, this.cliente).then(resposta =>{
        this.cliente = {}
        alert(resposta, '')
        this.listar()
      })
      }


    },

    editar(cliente){
      this.cliente = cliente
    }
  }
}

</script>

<style>
</style>
