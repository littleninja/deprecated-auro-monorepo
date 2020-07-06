import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-header.js';

describe('auro-header', () => {
  it('sets the CSS class on auro-header > div element', async () => {
    const el = await fixture(html`
      <auro-header cssclass="testClass"></auro-header>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-header is accessible', async () => {
    const el = await fixture(html`
      <auro-header cssclass="testClass"></auro-header>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-header custom element is defined', async () => {
    const el = await !!customElements.get("auro-header");

    await expect(el).to.be.true;
  });
});
