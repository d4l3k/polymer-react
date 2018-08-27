import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import React from 'react';
import ReactDOM from 'react-dom';
class Shell extends React.PureComponent {
    constructor(props) {
        super(props);
        this.ismounted = false;
        this.state = {};
    }
    componentDidMount() {
        ;
        this.props.component._react = this;
    }
    render() {
        return this.props.component.render(this.state);
    }
}
export class PolymerReact extends PolymerElement {
    static get template() {
        return html `
      <div id="container"></div>
    `;
    }
    static get observers() {
        return ['update(_react, props, props.*)'];
    }
    connectedCallback() {
        super.connectedCallback();
        ReactDOM.render(React.createElement(Shell, { component: this }), this.$.container);
    }
    render(any) { }
    update() {
        console.log('updating', this.props, this._react);
        if (!this._react) {
            return;
        }
        const props = this.props || {};
        this._react.setState(props);
    }
}
customElements.define('polymer-react', PolymerReact);
//# sourceMappingURL=index.js.map