import BSController from "./BSController.js";
import BSHeader from "./BSHeader.js";
import BSCardBox from "./BSCardBox.js";
import BSCartBox from "./BSCartBox.js";
import BSOrderFormBox from "./BSOrderFormBox.js";
import BSOrderBox from "./BSOrderBox.js";
import BSPopupBox from "./BSPopupBox.js";
import BSMain from "./BSMain.js";
import BSFooter from "./BSFooter.js";

import BSActions from "./BSActions.js";
import BSUtils from "./BSUtils.js";
import BSDragAndDrop from "./BSDragAndDrop.js";

const projBox = document.getElementById("projBox");
const bsActions = new BSActions();
const bsUtils = new BSUtils(bsActions);
const bsDragAndDrop = new BSDragAndDrop(bsActions);

const bsHeader = new BSHeader(bsUtils, bsActions);

const bsCardBox = new BSCardBox(bsActions);
const bsCartBox = new BSCartBox(bsActions);
const bsOrderFormBox = new BSOrderFormBox(bsActions);
const bsOrderBox = new BSOrderBox(bsActions);
const bsPopupBox = new BSPopupBox(bsActions);
const bsMain = new BSMain(bsCardBox, bsCartBox, bsOrderFormBox, bsOrderBox, bsPopupBox, bsUtils, bsActions, bsDragAndDrop);

const bsFooter = new BSFooter(bsUtils, bsActions);

const bsController = new BSController(projBox, bsHeader, bsMain, bsFooter, bsActions);
bsController.bsControl();

console.log(window.innerWidth);
