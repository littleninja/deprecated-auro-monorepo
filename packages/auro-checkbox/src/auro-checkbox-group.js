// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';

// Import touch detection lib
import 'focus-visible/dist/focus-visible.min.js';

// Import the processed CSS file into the scope of the component
import styleCss from "./auro-checkbox-group-css.js";

class AuroCheckboxGroup extends LitElement {
  constructor() {
    super();

    this.index = 0;
    this.maxNumber = 3;
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  static get properties() {
    return {
      disabled:   { type: Boolean },
      horizontal: { type: Boolean },
      required:   { type: Boolean },
      error:      { type: String }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.items = Array.from(this.querySelectorAll('auro-checkbox'));

    this.items.forEach((el) => {
      el.disabled = this.disabled
    });

    this.items.forEach((el) => {
      el.required = this.required
    });
  }

  errorChange() {
    this.items.forEach((el) => {
      el.error = Boolean(this.error)
    });
  }

  render() {
    const groupClasses = {
      'displayFlex': this.horizontal && this.items.length <= this.maxNumber
    }

    return html`
      ${this.errorChange()}

      <fieldset class="${classMap(groupClasses)}">
        ${this.required
          ? html`<legend><slot name="legend"></slot></legend>`
          : html`<legend><slot name="legend"></slot> (optional)</legend>`
        }
        <slot></slot>
      </fieldset>

      ${this.error
        ? html`<p role="alert" aria-live="assertive" class="errorText">${this.error}</p>`
        : html``}
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-checkbox-group")) {
  customElements.define("auro-checkbox-group", AuroCheckboxGroup);
}
