class CounterComponent extends HTMLElement {
  constructor() {
    super();
    this._counter = 0; // Estado interno
    this.attachShadow({ mode: 'open' });
    this.setupTemplate();
    this.setupEvents();
    this.render();
  }

  setupTemplate() {
    this.shadowRoot.innerHTML = `
      <div>
        <div id="counter-container">
          <p>Contador: <span id="counter-value">${this._counter}</span></p>
        </div>
        <div id="button-container">
          <button id="increment">Incrementar</button>
          <button id="decrement">Decrementar</button>
        </div>
      </div>
    `;
  }

// Funciones del incremento y decremento del contador
  setupEvents() {
    this.shadowRoot.getElementById('increment').addEventListener('click', () => this.increment());
    this.shadowRoot.getElementById('decrement').addEventListener('click', () => this.decrement());
  }

  increment() {
    this._counter++;
    this.render();
  }

  decrement() {
    this._counter--;
    this.render();
  }

  render() {
    this.shadowRoot.getElementById('counter-value').textContent = this._counter;
  }
}
customElements.define('counter-component', CounterComponent);
