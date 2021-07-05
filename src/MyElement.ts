import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--my-element-text-color, #000);
    }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;

    console.log('DISPATCH counter-changed');
    this.dispatchEvent(
      new CustomEvent('counter-changed', {
        bubbles: true,
        composed: true,
        detail: {
          counter: this.counter,
        },
      })
    );
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
