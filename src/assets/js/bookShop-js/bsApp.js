import BSController from "./BSController.js";
import BSHeader from "./BSHeader.js";
import BSCardBox from "./BSCardBox.js";
import BSCartBox from "./BSCartBox.js";
import BSOrderFormBox from "./BSOrderFormBox.js";
import BSPopupBox from "./BSPopupBox.js";
import BSMain from "./BSMain.js";
import BSFooter from "./BSFooter.js";

import BSActions from "./BSActions.js";
import BSUtils from "./BSUtils.js";

const projBox = document.getElementById("projBox");
const bsActions = new BSActions();
const bsUtils = new BSUtils(bsActions);

const bsHeader = new BSHeader(bsUtils, bsActions);

const bsCardBox = new BSCardBox(bsUtils, bsActions);
const bsCartBox = new BSCartBox(bsUtils, bsActions);
const bsOrderFormBox = new BSOrderFormBox(bsUtils, bsActions);
const bsPopupBox = new BSPopupBox(bsUtils, bsActions);
const bsMain = new BSMain(bsCardBox, bsCartBox, bsOrderFormBox, bsPopupBox, bsUtils, bsActions);

const bsFooter = new BSFooter(bsUtils, bsActions);

const bsController = new BSController(projBox, bsHeader, bsMain, bsCardBox, bsCartBox, bsOrderFormBox, bsPopupBox, bsFooter, bsUtils, bsActions);
bsController.bsControl();

console.log(window.innerWidth);
