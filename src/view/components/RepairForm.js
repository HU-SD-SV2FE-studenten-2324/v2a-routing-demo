import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import { BASE } from '../../app';
import repairController from '../../controller/RepairController';

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
      button:hover,
      button:focus {
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
        .controls {
          display: none;
        }
      }
    `;
  }

  submitForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = {
      customerName: form.querySelector('customer-form').getAttribute('customername'),
      customerPhone: form.querySelector('customer-form').getAttribute('customerphone'),
      repairAssignment: form.querySelector('repair-assignment-form').getAttribute('assignment'),
      estimatedTime: Number(form.querySelector('repair-assignment-form').getAttribute('estimatedtime')),
    }

    repairController.addRepair(formData)
      .then((data) => {
        Router.go(`${BASE}/`);
      });
  }

  print() {
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
        <section class="controls">
          <button type="button" @click=${this.print}>Print</button>
          <button type="submit" tabindex="0">Save</button>
        </section>
      </form>
    `;
  }
}

customElements.define('repair-form', RepairForm);
