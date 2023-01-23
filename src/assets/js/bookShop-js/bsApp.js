import BSController from "./BSController.js";

// import BSActions from "./BSActions.js";
// import BSUtils from "./BSUtils.js";

import BSHeader from "./BSHeader.js";

import BSCardBox from "./BSCardBox.js";
import BSCartBox from "./BSCartBox.js";
import BSMain from "./BSMain.js";

import BSActions from "./BSActions.js";
import BSUtils from "./BSUtils.js";


const projBox = document.getElementById("projBox");
const bsActions = new BSActions();
const bsUtils = new BSUtils(bsActions);

const bsHeader = new BSHeader(projBox, bsUtils, bsActions);

const bsCardBox = new BSCardBox(projBox, bsUtils, bsActions);
const bsCartBox = new BSCartBox(projBox, bsUtils, bsActions);

const bsMain = new BSMain(projBox, bsCardBox, bsCartBox, bsUtils, bsActions);


const bsController = new BSController(projBox, bsHeader, bsMain, bsCardBox, bsCartBox, bsUtils, bsActions);
bsController.bsControl();

console.log(window.innerWidth);
