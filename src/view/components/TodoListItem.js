import { LitElement, html, css } from 'lit';
import { BASE } from '../../app';
import repairController from '../../controller/RepairController';

export default class TodoListItem extends LitElement {
  static get properties() {
    return {
      id: { type: Number },
      estimatedTime: { type: Number },
    }
  }

  constructor() {
    super();
    this.id = 0;
  }

  remove() {
    repairController.removeRepair(this.id).then(() => {
      this.dispatchEvent(new CustomEvent('repairremoved', { bubbles: true, composed: true }));
      console.log(`removed ${this.id}`)
    });
  }

  render() {
    return html`
      <span><a href="${BASE}/repair/${this.id}">Reparatie ID: ${this.id}</a></span>
      <span>Geschatte Reparatietijd: ${this.estimatedTime}</span>
      <span><button @click=${this.remove}>X</button></span>
    `;
  }

}

customElements.define('todo-list-item', TodoListItem);
