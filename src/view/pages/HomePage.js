import { LitElement, html } from 'lit';
import '../components/RepairForm';

export default class HomePage extends LitElement {
  render() {
    return html`
      <main>
        <repair-form></repair-form>
      </main>
    `;
  }
}

customElements.define('home-page', HomePage);