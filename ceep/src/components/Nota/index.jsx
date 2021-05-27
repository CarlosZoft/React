import React, { Component } from 'react';
import ListaNotas from '../ListaNotas';

export default class Nota extends Component {
  render() {
    const notas = this.props.notas;
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
