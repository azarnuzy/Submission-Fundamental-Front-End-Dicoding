import "../components/search-bar.js";
import "../components/food-list.js";
import "../components/detail-food.js";
import "../components/category-food.js";
import DataSource from "../data/data-source.js";
import $ from "jquery";

const main = () => {
  const searchElement = document.querySelector("#searchElement");
  const buttonSearchElement = document.querySelector("#searchButtonElement");
  const foodListElement = document.querySelector("food-list");
  const foodDetailElement = document.querySelector("#modalFoodContent");
  const menuCategory = document.querySelector(".options");

  const onButtonSearchClicked = () => {
    DataSource.searchFood(
      searchElement.value,
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    )
      .then(renderResult)
      .catch(fallbackResult);
  };

  const renderResult = (results) => {
    foodListElement.foods = results;
  };

  const fallbackResult = (message) => {
    foodListElement.renderError(message);
  };

  const categoryRecipe = (results) => {
    const categories = document.createElement("div");
    categories.classList.add("category-menus", "hidden");
    categories.innerHTML = "";
    results.forEach((category) => {
      const { strCategory } = category;
      categories.innerHTML += `
          <a href="#" class="category-menu ">${strCategory}</a>
        `;
    });

    menuCategory.appendChild(categories);
  };

  DataSource.searchFood(
    "list",
    "https://www.themealdb.com/api/json/v1/1/list.php?c="
  )
    .then(categoryRecipe)
    .catch(fallbackResult);

  const areasRecipe = (results) => {
    const categories = document.createElement("div");
    categories.classList.add("areas-menus", "hidden");
    categories.innerHTML = "";
    results.forEach((area) => {
      const { strArea } = area;
      categories.innerHTML += `
            <a href="#" class="areas-menu">${strArea}</a>
          `;
    });

    menuCategory.appendChild(categories);
  };

  DataSource.searchFood(
    "list",
    "https://www.themealdb.com/api/json/v1/1/list.php?a="
  )
    .then(areasRecipe)
    .catch(fallbackResult);

  const onButtonClicked = (e) => {
    const detailButton = e.target.classList.contains("modal-detail-button");
    const target = e.target.innerText;
    const categoryTarget = e.target.parentElement.parentElement;

    if (detailButton) {
      const foodId = e.target.dataset.foodid;
      DataSource.searchFood(
        foodId,
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
      )
        .then(detailResult)
        .catch(fallbackResult);
    }

    if (categoryTarget.classList.contains("options")) {
      if (e.target.classList.contains("category-menu")) {
        DataSource.searchFood(
          target,
          "https://www.themealdb.com/api/json/v1/1/filter.php?c="
        )
          .then(renderResult)
          .catch(fallbackResult);
      } else if (e.target.classList.contains("areas-menu")) {
        DataSource.searchFood(
          target,
          "https://www.themealdb.com/api/json/v1/1/filter.php?a="
        )
          .then(renderResult)
          .catch(fallbackResult);
      }
    }

    if (target == "Categories") {
      $(".category-menus").slideToggle();
    } else if (target == "Areas") {
      $(".areas-menus").slideToggle();
    }
  };

  const detailResult = (results) => {
    foodDetailElement.innerHTML = "";
    results.forEach((food) => {
      const {
        strMeal,
        strMealThumb,
        strCategory,
        strInstructions,
        strArea,
        strTags,
      } = food;

      const foodDetail = document.createElement("div");
      foodDetail.setAttribute("class", "modal-content");
      foodDetail.innerHTML = `
      <div class="modal-header text-center">
        <h3 class="modal-title" id="foodDetailModalLabel">
          Detail Recipe
        </h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <div class="img-detail">
                <img
                  src="${strMealThumb}"
                  class="img-fluid rounded"
                />
              </div>
            </div>
            <div class="col-md">
              <ul class="list-group">
                <li class="list-group-item">
                  <h4>${strMeal}</h4>
                </li>
                <li class="list-group-item">
                  <strong>Category : </strong>${strCategory}
                </li>
                <li class="list-group-item">
                  <strong>Area : </strong>${strArea}
                </li>
                <li class="list-group-item">
                  <strong>Tags : </strong>${strTags}
                </li>
                <li class="list-group-item">
                  <strong>Instructions : </strong>${strInstructions}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
      </div>
      `;

      foodDetailElement.appendChild(foodDetail);
    });
  };

  $(buttonSearchElement).click(onButtonSearchClicked);
  $(document).click(onButtonClicked);
};

export default main;
