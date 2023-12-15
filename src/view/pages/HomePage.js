import { LitElement, html } from 'lit';
import { BASE } from '../../app';
import '../components/HeaderBar';
import '../components/ToDoList';

export default class HomePage extends LitElement {
  render() {
    return html`
      <header-bar></header-bar>
      <main>
        <todo-list></todo-list>
        <a href="${BASE}/repair-form">
          <button>Nieuwe Reparatie</button>
        </a>
      </main>
    `;
  }
}

customElements.define('home-page', HomePage);
