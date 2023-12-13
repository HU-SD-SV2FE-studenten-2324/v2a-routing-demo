import { LitElement, html, css } from 'lit';

export default class DateTime extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        background-color: green;
        color: white;
        font-size: 1.5rem;
        padding: 0.5rem;
      }
    `;
  }

  static get properties() {
    return {
      currentDateTime: { type: Date },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.currentDateTime = new Date();
    this.dateTimeInterval = setInterval(() => this.updateDateTime(), 1000);
  }

  disconnectedCallback() {
    clearInterval(this.dateTimeInterval);
    super.disconnectedCallback();
  }

  updateDateTime() {
    this.currentDateTime = new Date();
  }

  render() {
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return html`
      <span>${this.currentDateTime.toLocaleDateString('nl-NL', options)}</span> - 
      <span>${this.currentDateTime.toLocaleTimeString('nl-NL')}</span>
    `;
  }
}

customElements.define('date-time', DateTime);
