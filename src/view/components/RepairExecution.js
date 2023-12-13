import { LitElement, html, css } from 'lit';

export default class RepairExecution extends LitElement {
  static get styles() {
    return css`
      fieldset {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        grid-template-areas:
          "execution execution"
          "timelabel timeinput";
        grid-gap: 1rem;
      }

      textarea {
        grid-area: execution;
        width: 100%;
        resize: none;
      }

      label {
        grid-area: timelabel;
      }

      input {
        grid-area: timeinput;
      }
      
    `;
  } 

  render() {
    return html`
      <fieldset>
        <legend>Reparatie Uitvoering</legend>
        <textarea
          aria-label="Reparatie Uitvoering"
          id="execution"
          name="repair-execution"
          rows="5"
          cols="33"
          placeholder="Wat is daadwerkelijk gebeurd? Welke onderdelen zijn hiervoor gebruikt?"
          tabindex="-1"
        ></textarea>
        <label for="repair-time">Bestede tijd</label>
        <input id="repair-time" name="repair-time" type="text" tabindex="-1" />
      </fieldset>
    `;
  }
}

customElements.define('repair-execution', RepairExecution);