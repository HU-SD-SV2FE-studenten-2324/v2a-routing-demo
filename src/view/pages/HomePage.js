import { LitElement, html } from 'lit';
import '../components/RepairForm';
import '../components/DateTime';

export default class HomePage extends LitElement {
  render() {
    return html`
      <header>
        <date-time></date-time>
      </header>
      <main>
        <repair-form></repair-form>
      </main>
    `;
  }
}

customElements.define('home-page', HomePage);