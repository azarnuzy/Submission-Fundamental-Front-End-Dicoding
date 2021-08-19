class CategoryFood extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="mt-lg-3">
      <div class="container mt-4 pb-3">
        <div class="selectors d-flex justify-content-around">
          <div class="categories dropdown-toggle d-flex align-items-center">
            <h3 class="mb-0">Categories</h3>
          </div>
          <div class="areas dropdown-toggle d-flex align-items-center">
            <h3 class="mb-0">Areas</h3>
          </div>
        </div>
        <div
          class="
            options
            d-flex
            flex-column flex-nowrap
            justify-content-center
            text-center
          "
        >
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define("category-food", CategoryFood);
