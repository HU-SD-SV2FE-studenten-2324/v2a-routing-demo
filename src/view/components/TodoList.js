import { LitElement, html, css } from 'lit';
import repairController from '../../controller/RepairController';
import './TodoListItem';

export default class ToDoList extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        font-size: 1.5rem;
      }
    `;
  }

  static get properties() {
    return {
      todos: { type: Array },
    };
  }

  constructor() {
    super();
    this.todos = [];
  }
  
  connectedCallback() {
    super.connectedCallback();
    this.updateList();
  }

  updateList() {
    repairController.getRepairs().then((repairs) => {
      this.todos = [...repairs];
    });
  }

  render() {
    return html`
      <h1>Todo List</h1>
      <ul @repairremoved=${this.updateList}>
        ${this.todos.map((todo) => html`
        <li>
          <todo-list-item id=${todo.id} estimatedTime=${todo.estimatedTime}></todo-list-item>
        </li>`)}
      </ul>
    `;
  }
}

customElements.define('todo-list', ToDoList);