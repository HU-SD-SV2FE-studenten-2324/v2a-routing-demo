import { LitElement, html, css } from 'lit';
import './DateTime';
import './TotalTodoTime';	

export default class HeaderBar extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        background-color: green;
        color: white;
        font-size: 1.5rem;
        padding: 1rem;
      }

      header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: "date-time total-todo-time";
      }

      date-time {
        grid-area: date-time;
        text-align: left;
      }

      total-todo-time {
        grid-area: total-todo-time;
        text-align: right;
      }
    `;

  }

  render() {
    return html`
      <header>
        <date-time></date-time>
        <total-todo-time></total-todo-time>
      </header>
    `;
  }
}

customElements.define('header-bar', HeaderBar);
