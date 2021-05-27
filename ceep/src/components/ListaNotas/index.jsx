import React, { Component } from "react";
import './styles.css'

export default class ListaNotas extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-title">
          <h3>{this.props.titulo}</h3>
        </header>
        <p className="card-body">{this.props.body}</p>
      </section>
    )
  }
}