import { LitElement, html, css } from 'lit';
import router from '../../app';
import repairController from '../../controller/RepairController';

export default class RepairCard extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      customerName: { type: String },
      customerPhone: { type: String },
      repairAssignment: { type: String },
    };
  }

  constructor() {
    super();
    this.customerName = '';
    this.customerPhone = '';
    this.repairAssignment = '';
    this.customerId = Number(router.location.params.id);
  }

  connectedCallback() {
    super.connectedCallback();
    repairController.getRepair(this.customerId).then((repair) => {
      this.customerName = repair.customerName;
      this.customerPhone = repair.customerPhone;
      this.repairAssignment = repair.repairAssignment;
      this.estimatedTime = repair.estimatedTime;
    });
  }

  render() {
    return html`
      <h1>Reparatie Opdracht</h1>
      <section>
        <h2>Klantgegevens</h2>
        <p>Naam: ${this.customerName}</p>
        <p>Telefoonnummer: ${this.customerPhone}</p>
      </section>
      <section>
        <h2>Reparatie Opdracht</h2>
        <p>Opdracht: ${this.repairAssignment}</p>
        <p>Geschatte reparatietijd: ${this.estimatedTime} minuten</p>
      </section>

      <a href="/"><button>Terug naar de homepagina</button></a>
    `;
  }
}

customElements.define('repair-card', RepairCard);
