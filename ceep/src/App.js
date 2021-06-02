import React, { Component } from 'react';
import Formulario from './components/Formulario';
import Nota from './components/Nota'

export default class App extends Component {
  constructor() {
    super()
    this.newNota = {}
  }
  getNota(title, body) {
    this.newNota = { title, body };
  }
  render() {
    return (
      <section className="conteudo">
        <Formulario getNota={this.getNota.bind(this)} />
        <Nota newNota={this.newNota} />
      </section>
    );
  }
}


