import { LitElement, html, css } from 'lit';

export default class CustomerForm extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      fieldset {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
      }
    `;
  }

  render() {
    return html`
        <fieldset>
          <legend>Customer</legend>
          <label for="customer-name">Name</label>
          <input id="customer-name" name="customer-name" type="text" />
          <label for="customer-phone">Phone</label>
          <input id="customer-phone" name="customer-phone" type="text" />
        </fieldset>
      `;
  }
}

customElements.define('customer-form', CustomerForm);
