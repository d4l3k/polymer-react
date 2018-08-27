import {PolymerElement, html} from '@polymer/polymer/polymer-element.js'

import React from 'react'
import ReactDOM from 'react-dom'

type ShellProps = {
  component: PolymerReact
}

class Shell extends React.PureComponent {
  private props?: ShellProps
  public state: any
  public ismounted: boolean = false

  constructor (props: ShellProps) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    ;(this.props as ShellProps).component._react = this
  }

  render () {
    return (this.props as ShellProps).component.render(this.state)
  }
}

export class PolymerReact extends PolymerElement {
  public _react?: Shell
  public props: any

  static get template () : HTMLTemplateElement {
    return html`
      <div id="container"></div>
    `
  }

  static get observers () {
    return ['update(_react, props, props.*)']
  }

  connectedCallback () {
    super.connectedCallback()

    ReactDOM.render(<Shell component={this} />, this.$.container)
  }

  render (any): any { }

  update () {
    console.log('updating', this.props, this._react)
    if (!this._react) {
      return
    }
    const props = this.props || {}
    ;(this._react as any).setState(props)
  }
}

customElements.define('polymer-react', PolymerReact)
