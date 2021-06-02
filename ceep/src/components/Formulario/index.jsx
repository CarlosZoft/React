import "./styles.css"
import React, { Component } from "react";


export default class Formulario extends Component {
  constructor(props) {
    super(props)
    this.titulo = "";
    this.text = "";
  }
  _handleChangeTitle = e => {
    e.stopPropagation();
    this.titulo = e.target.value;
  }

  _handleChangeText = e => {
    e.stopPropagation();
    this.text = e.target.value;
  }

  _createNota = e => {
    e.preventDefault();
    e.stopPropagation();
    //if (this.titulo.lenght && this.titulo.length)
    this.props.getNota(this.titulo, this.body);
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._createNota.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="textInput"
          onChange={this._handleChangeTitle.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota"
          className="textInput"
          onChange={this._handleChangeText.bind(this)}
        />
        <button className="buttonNota">Criar Nota</button>
      </form >
    )
  }
}