class FoodItem extends HTMLElement {
  set food(food) {
    this._food = food;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="card">
          <img src="${this._food.strMealThumb}" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">${this._food.strMeal}</h5>
            <a
              href="#"
              class="
                btn btn-primary
                modal-detail-button
                food-detail-button
              "
              data-bs-toggle="modal"
              data-bs-target="#foodDetailModal"
              data-foodid="${this._food.idMeal}"
              >Show Details</a
            >
          </div>
        </div>
    `;
  }
}

customElements.define("food-item", FoodItem);
