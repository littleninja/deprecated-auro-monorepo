// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit-element";
import { ifDefined } from 'lit-html/directives/if-defined.js';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

// build the component class
class AuroHeader extends LitElement {
  constructor() {
    super();

    this.display = 'display'
  }

  // function to define props used within the scope of thie component
  static get properties() {
    return {
      level:    { type: String },
      display:  { type: String },
      color:    { type: String }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  template(level) {
    switch (level) {
      case '2': return html`<h2 class="heading heading--${this.display}" style="color: ${ifDefined(this.color ? this.color : undefined)}"><slot></slot></h2>`;
      case '3': return html`<h3 class="heading heading--${this.display}" style="color: ${ifDefined(this.color ? this.color : undefined)}"><slot></slot></h3>`;
      case '4': return html`<h4 class="heading heading--${this.display}" style="color: ${ifDefined(this.color ? this.color : undefined)}"><slot></slot></h4>`;
      case '5': return html`<h5 class="heading heading--${this.display}" style="color: ${ifDefined(this.color ? this.color : undefined)}"><slot></slot></h5>`;
      case '6': return html`<h6 class="heading heading--${this.display}" style="color: ${ifDefined(this.color ? this.color : undefined)}"><slot></slot></h6>`;
      default: return html`<h1 class="heading heading--${this.display}" style="color: ${ifDefined(this.color ? this.color : undefined)}"><slot></slot></h1>`;
    }
  }
  // function that renders the HTML and CSS into  the scope of the component

  render() {
    return this.template(this.level);
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-header")) {
  customElements.define("auro-header", AuroHeader);
}
