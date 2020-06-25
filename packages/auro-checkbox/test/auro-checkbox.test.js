/* eslint-disable max-statements */
/* eslint-disable no-console */
/* eslint-disable one-var */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import { fixture, html, expect, elementUpdated } from '@open-wc/testing';

import '../src/auro-checkbox.js';
import '../src/auro-checkbox-group.js';

describe('auro-checkbox-group', () => {
  it('has the expected properties', async () => {
    const expectedError = "Expected error message";

    const el = await fixture(html`
      <auro-checkbox-group
        horizontal
        required
        error=${expectedError}
      ></ods-inputoption-radio-group>
    `);

    const root = el.shadowRoot;
    const error = root.querySelector('p');

    expect(el.horizontal).to.be.true;
    expect(el.required).to.be.true;
    expect(error.textContent).be.equal(expectedError);
  });
});

describe('auro-checkbox', () => {
  it('has the expected properties', async () => {
    const expectedId = "testId",
      expectedName = "testName",
      expectedValue = "testValue",
      expectedError = "testError";

    const el = await fixture(html`
      <auro-checkbox
        id="${expectedId}"
        name="${expectedName}"
        value="${expectedValue}"
        checked
        disabled
        error="${expectedError}"
      ></auro-checkbox>
    `);

    const root = el.shadowRoot;
    const input = root.querySelector('input');
    const errorBorder = root.querySelector('.errorBorder');

    expect(input.checked).to.be.true;
    expect(input.disabled).to.be.true;
    expect(input.value).to.equal(expectedValue);
    expect(input.name).to.equal(expectedName);
    expect(input.type).to.equal('checkbox');
    expect(errorBorder).to.not.be.undefined;
  });

  it('should fire a input event with correct data', async () => {
    const el = await fixture(html`
      <auro-checkbox-group>
        <auro-checkbox
          id="alaska"
          name="states"
          value="alaska"
        ></auro-checkbox>

        <auro-checkbox
          id="washington"
          name="states"
          value="washington"
        ></auro-checkbox>
      </auro-checkbox-group>
    `),
    alaskaCheckbox = el.querySelector("auro-checkbox[id=alaska]"),
    alaskaCheckboxInput = alaskaCheckbox.shadowRoot.querySelector('input');

    let result = false;

    el.addEventListener('input', (event) => {
      result = event.target.checked;
    });

    alaskaCheckboxInput.click();

    expect(result).to.be.true;
  });

  it('can select multiple checkboxes', async () => {
    const el = await fixture(html`
      <auro-checkbox-group>
        <auro-checkbox
          id="alaska"
          name="states"
          value="alaska"
        ></auro-checkbox>

        <auro-checkbox
          id="washington"
          name="states"
          value="washington"
        ></auro-checkbox>
      </auro-checkbox-group>
    `),

     alaskaCheckbox = el.querySelector("auro-checkbox[id=alaska]"),
     alaskaCheckboxInput = alaskaCheckbox.shadowRoot.querySelector('input'),

     washingtonCheckbox = el.querySelector("auro-checkbox[id=washington]"),
     washingtonCheckboxInput = washingtonCheckbox.shadowRoot.querySelector('input');

    expect(alaskaCheckbox.checked).to.not.be.true;
    expect(washingtonCheckbox.checked).to.not.be.true;

    alaskaCheckboxInput.click();
    washingtonCheckboxInput.click();
    await elementUpdated(el);

    // Selecting the first radio button should make it `checked`
    expect(alaskaCheckbox.checked).to.be.true;
    expect(washingtonCheckbox.checked).to.be.true;
  });

  it('is accessible', async () => {

    const el = await fixture(html`
      <auro-checkbox-group>
        <auro-checkbox
          id="alaska"
          name="states"
          value="alaska"
          checked
        ></auro-checkbox>

        <auro-checkbox
          id="washington"
          name="states"
          type="radio"
          value="washington"
        ></auro-checkbox>
      </auro-checkbox-group>
    `);

    expect(el).to.be.accessible();
  });
});
