// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';
import { ifDefined } from 'lit-html/directives/if-defined';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./auro-checkbox-css.js";

// build the component class
class AuroCheckbox extends LitElement {
  constructor() {
    super();
    this.checked = false;
    this.disabled = false;
  }

  // function to define props used within the scope of thie component
  static get properties() {
    return {
      checked: {
        type: Boolean,
        reflect: true
      },
      disabled: {
        type: Boolean,
        reflect: true
      },
      required: {
        type: Boolean,
        reflect: true
      },
      error: {
        type: String,
        reflect: true
      },
      id:       { type: String },
      name:     { type: String },
      value:    { type: String }
    };
  }

  handleInput(event) {
    this.checked = event.target.checked;
  }

  invalid(error) {
    if (error) {
      return 'true';
    }

    return 'false'
  }

  isRequired(required) {
    if (required) {
      return 'true';
    }

    return 'false'
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const labelClasses = {
      'label': true,
      'label--cbx': true,
      'errorBorder': Boolean(this.error)
    }

    return html`
      ${styleCss}

      <div class="cbxGroup">
        <input
          class="util_displayHiddenVisually cbx--input"
          @input="${this.handleInput}"
          ?disabled="${this.disabled}"
          aria-invalid="${this.invalid(this.error)}"
          aria-required="${this.isRequired(this.required)}"
          ?checked="${this.checked}"
          id="${ifDefined(this.id)}"
          name="${ifDefined(this.name)}"
          type="checkbox"
          .value="${ifDefined(this.value)}"
        />

        <label for="${ifDefined(this.id)}" class="${classMap(labelClasses)}">
          <slot></slot>
        </label>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-checkbox")) {
  customElements.define("auro-checkbox", AuroCheckbox);
}
