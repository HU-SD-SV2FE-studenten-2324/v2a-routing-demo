import { LitElement, html, css } from 'lit';

export default class RepairAssignmentForm extends LitElement {
  static get properties() {
    return {
      assignment: { type: String, reflect: true },
      estimatedTime: { type: Number, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      textarea {
        width: 100%;
        resize: none;
      }
    `;
  }

  constructor() {
    super();
    this.assignment = '';
    this.estimatedTime = 0;
  }

  updateAssignment(e) {
    this.assignment = e.target.value;
  }

  updateEstimatedTime(e) {
    this.estimatedTime = e.target.value;
  }

  render() {
    return html`
      <fieldset>
        <legend>Reparatie Opdracht</legend>
        <textarea
          aria-label="Reparatie Opdracht"
          id="assignment"
          name="repair-assignment"
          rows="5"
          cols="33"
          placeholder="Wat moet er gebeuren?"
          @change=${this.updateAssignment}
          tabindex="3"
        ></textarea>
        <label for="estimated-time">Geschatte reparatietijd (in minuten):</label>
        <input type="number" name="repair-estimated-time" id="estimated-time" tabindex="4" @input=${this.updateEstimatedTime}/>
      </fieldset>
    `;
  }
}

customElements.define('repair-assignment-form', RepairAssignmentForm);
