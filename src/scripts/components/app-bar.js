class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header>
          <div class="container app-bar">
            <h2 class="text-light text-center">Food Recipes</h2>
          </div>
        </header>
        `;
  }
}

customElements.define("app-bar", AppBar);
