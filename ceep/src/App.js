import React, { Component } from 'react';
import Formulario from './components/Formulario';
import Nota from './components/Nota'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      notas: []
    }
  }
  criarNota(title, body) {
    const novaNota = { title, body }
    this.setState({ notas: [...this.state.notas, novaNota] })
  }
  render() {
    return (
      <section className="conteudo">
        <Formulario
          criarNota={this.criarNota.bind(this)}
        />
        <Nota
          notas={this.state.notas}
        />
      </section>
    );
  }
}


