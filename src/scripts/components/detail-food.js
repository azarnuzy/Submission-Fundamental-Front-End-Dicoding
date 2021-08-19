class DetailFood extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div
            class="modal fade"
            id="foodDetailModal"
            tabindex="-1"
            aria-labelledby="foodDetailModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered modal-fullscreen">
              <div class="modal-content" id="modalFoodContent"></div>
            </div>
        </div>
        `;
  }
}

customElements.define("detail-food", DetailFood);
