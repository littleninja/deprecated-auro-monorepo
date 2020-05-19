import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-checkbox.js';

describe('auro-checkbox', () => {
  it('sets the CSS class on auro-checkbox > div element', async () => {
    const el = await fixture(html`
      <auro-checkbox cssclass="testClass"></auro-checkbox>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-checkbox is accessible', async () => {
    const el = await fixture(html`
      <auro-checkbox cssclass="testClass"></auro-checkbox>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-checkbox custom element is defined', async () => {
    const el = await !!customElements.get("auro-checkbox");

    await expect(el).to.be.true;
  });
});
