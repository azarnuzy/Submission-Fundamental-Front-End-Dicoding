import "./food-item.js";

class FoodList extends HTMLElement {
  set foods(foods) {
    this._foods = foods;
    this.render();
  }

  render() {
    this.innerHTML = ``;
    this._foods.forEach((food) => {
      const foodItemElement = document.createElement("food-item");
      foodItemElement.food = food;
      foodItemElement.classList.add("col-md-4", "my-3");
      this.appendChild(foodItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = "";
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define("food-list", FoodList);
