import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./styles/style.css";
import "./scripts/components/app-bar.js";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import main from "./scripts/view/main.js";
import $ from "jquery";

$(document).ready(main);
