class FoodContent extends HTMLElement {
  set food(food) {
    this._food = food;
    this.render();
  }

  render() {
    console.log(this);
    this.innerHTML = `
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <div
            class="modal fade"
            id="foodDetailModal"
            tabindex="-1"
            aria-labelledby="foodDetailModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered modal-fullscreen">
              <div class="modal-content" id="modalFoodContent">
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
                        <img
                          src="${this._food.strMealThumb}"
                          class="img-fluid rounded"
                        />
                      </div>
                      <div class="col-md">
                        <ul class="list-group">
                          <li class="list-group-item">
                            <h4>${this._food.strMeal}</h4>
                          </li>
                          <li class="list-group-item">
                            <strong>Director : </strong>${this._food.strCategory}
                          </li>
                          <li class="list-group-item">
                            <strong>Actors : </strong>lorem ipsum dolor sit amet consectetur
                          </li>
                          <li class="list-group-item">
                            <strong>Writer : </strong>Lorem ipsum dolor sit amet.
                          </li>
                          <li class="list-group-item">
                            <strong>Plot : </strong>${this._food.strInstructions}
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
              </div>
            </div>
        </div>     
        `;
  }
}

customElements.define("food-content", FoodContent);
