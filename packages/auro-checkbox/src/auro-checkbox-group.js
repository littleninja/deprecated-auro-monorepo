// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.
// ---------------------------------------------------------------------
import { LitElement, html } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';

// Import touch detection lib
import 'focus-visible/dist/focus-visible.min.js';

// Import the processed CSS file into the scope of the component
import componentProperties from './tokens/componentShapeProperties-css.js';
import styleCss from "./ods-style-css.js";

class AuroCheckboxGroup extends LitElement {
  constructor() {
    super();

    this.index = 0;
  }

  static get properties() {
    return {
      disabled:   { type: Boolean },
      horizontal: { type: Boolean },
      error:      { type: String },
      label:      { type: String }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.items = Array.from(this.querySelectorAll('auro-checkbox')) || [];

    this.items.forEach((el) => {
      el.disabled = this.disabled
    });
  }

  errorChange() {
    this.items.forEach((el) => {
      el.error = Boolean(this.error)
    });
  }

  render() {
    const groupClasses = {
      'displayFlex': this.horizontal && this.items.length <= 3
    }

    return html`
      ${componentProperties}
      ${styleCss}

      ${this.errorChange()}

      <fieldset class="${classMap(groupClasses)}">
        ${this.label
          ? html`<legend>${this.label}</legend>`
          : html``
        }
        <slot></slot>
      </fieldset>

      ${this.error
        ? html`<p class="errorText">${this.error}</p>`
        : html``}
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-checkbox-group")) {
  customElements.define("auro-checkbox-group", AuroCheckboxGroup);
}
