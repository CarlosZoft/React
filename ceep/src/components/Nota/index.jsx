import React, { Component } from 'react';
import ListaNotas from '../ListaNotas';

export default class Nota extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notas: []
    }
    this.setState({ notas: [...this.state.notas, this.props.newNota] })
  }

  render() {
    const notas = this.state.notas;
    return (
      <ul>
        {notas.map((categoria, index) => {
          return (
            <li key={index}>
              <ListaNotas
                titulo={categoria.title}
                body={categoria.body}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
