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

  static get properties() {
    return {
      customerName: { type: String, reflect: true },
      customerPhone: { type: String, reflect: true },
    };
  }

  constructor() {
    super();

    this.customerName = '';
    this.customerPhone = '';
  }

  updateCustomerNameValue(event) {
    this.customerName = event.target.value;
  }

  updateCustomerPhoneValues(event) {
    this.customerPhone = event.target.value;
  }

  render() {
    return html`
      <fieldset>
        <legend>Customer</legend>
        <label for="customer-name">Name</label>
        <input
          id="customer-name"
          name="customer-name"
          type="text"
          @input=${this.updateCustomerNameValue}
          tabindex="1"
        />
        <label for="customer-phone">Phone</label>
        <input
          id="customer-phone"
          name="customer-phone"
          type="tel"
          @input=${this.updateCustomerPhoneValues}
          tabindex="2"
        />
      </fieldset>
    `;
  }
}

customElements.define('customer-form', CustomerForm);
