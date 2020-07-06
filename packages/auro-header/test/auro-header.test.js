import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-header.js';

describe('auro-header', () => {
  it('sets the CSS class on auro-header', async () => {
    const el = await fixture(html`
      <auro-header level="h1" display="display">Hello World!</auro-header>
    `);

    const heading = el.shadowRoot.querySelector('h1');
    expect(heading.className).to.equal('heading heading--display');
  });

  it('sets correct heading element', async () => {
    const el = await fixture(html`
      <auro-header level="1" display="display" color="orange">Hello World!</auro-header>
      <auro-header level="2" display="display" color="orange">Hello World!</auro-header>
      <auro-header level="3" display="display" color="orange">Hello World!</auro-header>
      <auro-header level="4" display="display" color="orange">Hello World!</auro-header>
      <auro-header level="5" display="display" color="orange">Hello World!</auro-header>
      <auro-header level="6" display="display" color="orange">Hello World!</auro-header>
    `);

    const heading = el.shadowRoot.querySelector('h1');
    expect(heading.tagName).to.equal('H1');
  });

  it('sets color to orange', async () => {
    const el = await fixture(html`
      <auro-header level="1" display="display" color="orange">Hello World!</auro-header>
    `);

    const heading = el.shadowRoot.querySelector('h1');
    expect(heading.style.color).to.equal('orange');
  });

  it('sets color no color', async () => {
    const el = await fixture(html`
      <auro-header level="1" display="display">Hello World!</auro-header>
      <auro-header level="2" display="display">Hello World!</auro-header>
      <auro-header level="3" display="display">Hello World!</auro-header>
      <auro-header level="4" display="display">Hello World!</auro-header>
      <auro-header level="5" display="display">Hello World!</auro-header>
      <auro-header level="6" display="display">Hello World!</auro-header>
    `);

    const heading = el.shadowRoot.querySelector('h1');
    expect(heading.style.color).to.equal('');
  });

  it('auro-header is accessible', async () => {
    const el = await fixture(html`
      <auro-header level="h1" display="display">Hello World!</auro-header>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-header custom element is defined', async () => {
    const el = await !!customElements.get("auro-header");

    await expect(el).to.be.true;
  });
});
