# polymer-react
Include react in polymer elements.

## Usage

```javascript
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js'
import React from 'react'

import 'polymer-react'

export class PRExample extends PolymerElement {
  const props = {
    bar: 10
  }

  static get template () {
    return html```
      <polymer-react render="[[render]]" props="[[props]]"></polymer-react>
    ```
  }

  render (props) {
    return <YourReactElement foo={props.bar}></YourReactElement>
  }
}

customElements.define('pr-example', PRExample)
```
