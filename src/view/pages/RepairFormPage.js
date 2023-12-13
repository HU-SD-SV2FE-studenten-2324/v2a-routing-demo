import { LitElement, html } from 'lit';
import '../components/RepairForm';
import '../components/HeaderBar';

export default class RepairFormPage extends LitElement {
  render() {
    return html`
      <header-bar></header-bar>
      <main>
        <repair-form></repair-form>
      </main>
    `;
  }
}

customElements.define('repair-form-page', RepairFormPage);