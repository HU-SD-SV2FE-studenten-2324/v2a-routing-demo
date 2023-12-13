import { LitElement, html, css } from 'lit';

export default class RepairAssignmentForm extends LitElement {
  static get properties() {
    return {
      value: { type: String, reflect: true },
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
    this.value = '';
  }

  updateAssignment(e) {
    this.value = e.target.value;
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
      </fieldset>
    `;
  }
}

customElements.define('repair-assignment-form', RepairAssignmentForm);
