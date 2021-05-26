import './styles.css'
import { Component } from 'react'

export class Button extends Component {
  render() {
    const { text, action, disabled } = this.props;
    return (
      <button
        className="button"
        onClick={action}
        disabled={disabled}
      >
        {text}
      </button >
    )
  }
}