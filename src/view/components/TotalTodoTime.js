import { LitElement, html, css } from 'lit';
import repairController from '../../controller/RepairController';

export default class TotalTodoTime extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      todoTime: { type: Number }
    };
  }

  constructor() {
    super();
    this.todoTime = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    this.updateTodoTime();
    window.addEventListener('repairremoved', this.updateTodoTime.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('repairremoved', this.updateTodoTime.bind(this));
    super.disconnectedCallback();
  }

  updateTodoTime() {
    repairController.getTotalTodoTime().then((totalTodoTime) => {
      this.todoTime = totalTodoTime;
    });
  }

  render() {
    return html`
      <p>De totale reparatietijd is: ${this.todoTime} minuten</p>
    `;
  }
}

customElements.define('total-todo-time', TotalTodoTime);