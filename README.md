# polymer-react [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/polymer-react) [![npm version](https://badge.fury.io/js/polymer-react.svg)](https://badge.fury.io/js/polymer-react) [![Build Status](https://travis-ci.com/d4l3k/polymer-react.svg?branch=master)](https://travis-ci.com/d4l3k/polymer-react)

Use React in Polymer 3 elements.

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
