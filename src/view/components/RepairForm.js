import { LitElement, html, css } from 'lit';
import './RepairAssignmentForm';
import './CustomerForm';
import './RepairExecution';
import './RepairCompletion';

export default class RepairForm extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      button {
        margin: 1rem;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: green;
        color: white;
      }
      button:hover {
        background-color: yellowgreen
      }

      @media screen {
        repair-execution {
          display: none;
        }
        repair-completion {
          display: none;
        }
      }

      @media print {
        repair-execution {
          display: block;
        }
        repair-completion {
          display: block;
        }
      }
    `;
  }

  submitForm(event) {
    event.preventDefault();
    const form = event.target;
    const data = form.querySelector('repair-assignment-form').value;
    console.log(data);
    window.print();
  }

  render() {
    return html`
      <h1>Reparatiekaart</h1>
      <form @submit=${this.submitForm}>
        <customer-form></customer-form>
        <repair-assignment-form></repair-assignment-form>
        <repair-execution></repair-execution>
        <repair-completion></repair-completion>
        <button type="submit">Print</button>
      </form>
    `;
  }
}

customElements.define('repair-form', RepairForm);
