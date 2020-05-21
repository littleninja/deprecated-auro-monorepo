## Element auro-checkbox

`<auro-checkbox>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of wrapping `<input type='checkbox'/>` elements with styling and behavior.

## Docs

All information regarding Project Setup, Technical Details, Tests and information regarding Auro Stateless Components can be found in the [docs](https://github.com/AlaskaAirlines/auro_docs/tree/master/src) project repository.

## UI development browser support

For the most up to date information on UI development browser support, see [docs/BROWSER_SUPPORT.md](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/BROWSER_SUPPORT.md)

## Install

[![Build Status](https://img.shields.io/travis/AlaskaAirlines/auro-checkbox.svg?branch=master&style=for-the-badge)](https://travis-ci.org/github/AlaskaAirlines/auro-checkbox)
[![See it on NPM!](https://img.shields.io/npm/v/@alaskaairux//auro-checkbox.svg?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@alaskaairux//auro-checkbox)
[![License](https://img.shields.io/npm/l/@alaskaairux/orion-design-tokens.svg?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

```shell
$ npm i @alaskaairux/auro-checkbox
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

### Design Token CSS Custom Property dependency

The use of any Auro custom element has a dependency on the [Auro Design Tokens](https://github.com/AlaskaAirlines/OrionDesignTokens).

For additional details in regards to using Auro Design Tokens with components, please see [docs/TECH_DETAILS.md](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/TECH_DETAILS.md)

### CSS Custom Property fallbacks

[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are [not supported](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/CUSTOM_PROPERTIES.md) in older browsers. For this, fallback properties are pre-generated and included with the npm.

Any update to the Auro Design Tokens will be immediately reflected with browsers that support CSS custom properties, legacy browsers will require updated components with pre-generated fallback properties.

### Define dependency in project component

Defining the component dependency within each component that is using the `<auro-checkbox>` component.

```javascript
import "@alaskaairux/auro-checkbox";
```

**Reference component in HTML**

```html
<auro-checkbox-group>
  <auro-checkbox></auro-checkbox>
</auro-checkbox-group>
```

## Install bundled assets from CDN

In cases where the project is not able to process JS assets, there are pre-processed assets available for use.

**NOTE:** Be sure to replace `:version` in the URL with the version of the asset you want.

```html
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/orion-design-tokens@:version/dist/tokens/CSSTokenProperties.css" />
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/orion-web-core-style-sheets@:version/dist/bundled/baseline.css" />

<script src="https://unpkg.com/@alaskaairux/auro-checkbox@:version/dist/polyfills.js"></script>
<script src="https://unpkg.com/@alaskaairux/auro-checkbox@:version/dist/auro-checkbox__bundled.js"></script>
```

### polyfills.js

The `polyfills.js` is packaged with this component, but **IT IS NOT NEEDED** to load a polyfill per component. The `polyfills.js` will work for all additional components added to the project.


## auro-checkbox use cases

The `<auro-checkbox-group` and `<auro-checkbox>` element should be used in situations where users may:

* Want to select one or more options
* Want an element that can be turned on and off
* Want to display options horizontally or vertically

## Properties: auro-checkbox-group

| Attribute | Value type | Description |
|----|----|----|
| disabled | boolean | enables disabled state of the element |
| error | string | set error message for checkbox group |
| horizontal | boolean | toggles layout direction, default is `vertical`, max 3 options |
| label | string | sets content for checkbox group label |

## Properties: auro-checkbox

| Attribute | Value type | Description |
|----|----|----|
| checked | boolean | enables checked state of the element | 
| disabled | boolean | enables disabled state of the element |
| error | string | set error state for checkbox |
| id | string | sets the individual `id` per element |
| label | string | sets content for checkbox label |
| name | string | Accepts any string, `DOMString` representing the value of the input |
| value | string | sets the elements input value |

## API Code Examples

Default Checkbox Group

```html
<auro-checkbox-group label="Form label goes here">
  <auro-checkbox id="computers" label="Computers" name="checkboxDemo1" value="computers"></auro-checkbox>
  <auro-checkbox id="music" label="Music" name="checkboxDemo1" value="music"></auro-checkbox>
  <auro-checkbox id="arts" label="Arts" name="checkboxDemo1" value="arts"></auro-checkbox>
  <auro-checkbox id="sports" label="Sports" name="checkboxDemo1" value="sports"></auro-checkbox>
  <auro-checkbox id="machines" label="Machines" name="checkboxDemo1" value="machines"></auro-checkbox>
</auro-checkbox-group>
``` 

`Horizontal` Checkbox Group (limit 3 min breakpoint-narrow)

```html
<auro-checkbox-group label="Form label goes here" horizontal>
  <auro-checkbox id="computers" label="Computers" name="checkboxDemo1" value="computers"></auro-checkbox>
  <auro-checkbox id="music" label="Music" name="checkboxDemo1" value="music"></auro-checkbox>
  <auro-checkbox id="arts" label="Arts" name="checkboxDemo1" value="arts"></auro-checkbox>
</auro-checkbox-group>
``` 

Pre-selected Option Checkbox Group

```html
<auro-checkbox-group label="Form label goes here">
  <auro-checkbox id="computers" label="Computers" name="checkboxDemo1" value="computers" checked></auro-checkbox>
  <auro-checkbox id="music" label="Music" name="checkboxDemo1" value="music"></auro-checkbox>
  <auro-checkbox id="arts" label="Arts" name="checkboxDemo1" value="arts"></auro-checkbox>
  <auro-checkbox id="sports" label="Sports" name="checkboxDemo1" value="sports"></auro-checkbox>
  <auro-checkbox id="machines" label="Machines" name="checkboxDemo1" value="machines"></auro-checkbox>
</auro-checkbox-group>
``` 

Disabled Checkbox Group

```html
<auro-checkbox-group label="Form label goes here" disabled>
  <auro-checkbox id="computers" label="Computers" name="checkboxDemo1" value="computers"></auro-checkbox>
  <auro-checkbox id="music" label="Music" name="checkboxDemo1" value="music"></auro-checkbox>
  <auro-checkbox id="arts" label="Arts" name="checkboxDemo1" value="arts"></auro-checkbox>
  <auro-checkbox id="sports" label="Sports" name="checkboxDemo1" value="sports"></auro-checkbox>
  <auro-checkbox id="machines" label="Machines" name="checkboxDemo1" value="machines"></auro-checkbox>
</auro-checkbox-group>
``` 

Checkbox Group with Error

```html
<auro-checkbox-group label="Form label goes here" error="Selection is required; please update.">
  <auro-checkbox id="computers" label="Computers" name="checkboxDemo1" value="computers"></auro-checkbox>
  <auro-checkbox id="music" label="Music" name="checkboxDemo1" value="music"></auro-checkbox>
  <auro-checkbox id="arts" label="Arts" name="checkboxDemo1" value="arts"></auro-checkbox>
  <auro-checkbox id="sports" label="Sports" name="checkboxDemo1" value="sports"></auro-checkbox>
  <auro-checkbox id="machines" label="Machines" name="checkboxDemo1" value="machines"></auro-checkbox>
</auro-checkbox-group>
``` 

## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/CONTRIBUTING.md) for this project. Please make sure to **pay special attention** to the [conventional commits](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/CONTRIBUTING.md#conventional-commits) section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open three different shell sessions. One is for the **Gulp tasks**, the second is for a series of **npm tasks** and the last is to run the **Polymer server**.

**Peer dependency:** Please make sure Polymer is installed globally in order to run the Polymer server. See [Auro Stateless Component Development Details](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/TECH_DETAILS.md) for more information.

```bash
$ npm i polymer-cli -g
```

```shell
// shell terminal one
$ npm run dev

// shell terminal two
$ npm run serve
```

Open [localhost:3001](http://localhost:3001/)

### Testing
Automated tests are required for every Auro component. See `.\test\auro-checkbox.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/TESTS.md) for more details.
