import { LitElement, html } from 'lit';
import '../components/HeaderBar';
import '../components/RepairCard';

export default class RepairPage extends LitElement {

  render() {
    return html`
      <header-bar></header-bar>
      <main>
        <repair-card></repair-card>
      </main>
    `;
  }
}

customElements.define('repair-page', RepairPage);