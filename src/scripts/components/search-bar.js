class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `
         <div class="container mt-4">
           <div class="row d-flex justify-content-center">
             <div class="search">
               <input
                 type="text"
                 id="searchElement"
                 class="search-input"
                 placeholder="Search Term"
                 name=""
               />
               <button
                 id="searchButtonElement"
                 type="submit"
                 class="search-icon justify-content-center align-items-center"
               >
                 <i class="fa fa-search"></i>
               </button>
             </div>
           </div>
         </div>
    `;

    this.querySelector("#searchButtonElement").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("search-bar", SearchBar);
