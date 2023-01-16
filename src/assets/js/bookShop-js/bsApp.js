import BSController from "./BSController.js";
import BSActions from './BSActions.js';
import BSUtils from './BSUtils.js';
import BSHeader from './BSHeader.js';


const projBox = document.getElementById('projBox');
const bsActions = new BSActions();
const bsUtils = new BSUtils(bsActions);

const bsHeader = new BSHeader(projBox, bsUtils, bsActions);



const bsController = new BSController(projBox, bsHeader, bsUtils, bsActions);
bsController.bsControl();





console.log(window.innerWidth);
