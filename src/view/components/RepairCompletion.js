import { LitElement, html, css } from 'lit';

export default class RepairCompletion extends LitElement {

  static get styles() {
    return css`
      fieldset {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
      }
    `;
  }

  render() {
    return html`
      <fieldset>
        <legend>Reparatie Afronding</legend>
        <label>Materiaal kosten</label>
        <input id="material-cost" name="material-cost" type="text" tabindex="-1" />
        <label>Arbeid kosten</label>
        <input id="labor-cost" name="labor-cost" type="text" tabindex="-1" />
        <label>Totaal kosten</label>
        <input id="total-cost" name="total-cost" type="text" tabindex="-1" />
      </fieldset>
    `;
  }
}

customElements.define('repair-completion', RepairCompletion);
