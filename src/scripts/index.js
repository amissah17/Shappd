import {
  elem,
  contrlContainer,
  txtArea,
  bgColorElem,
  sizeElem,
  borderRad,
  radiusToggle,
  htLeft,
  htRight,
  hbLeft,
  hbRight,
  vtLeft,
  vtRight,
  vbLeft,
  vbRight,
  shadBlur,
  shadColor,
  shadX,
  shadY,
  topShadX,
  topShadY,
  topShadBlur,
  morphismToggle,
  radToggle,
  morphToggle,
  slidePanel,
  contrlView
} from "./dom_loader.js";

var shadowX = 14;
var shadowY = 14;
var blurShadow = 25;
var shadowColor = "#787878";

var topXOffset = 14;
var topYOffset = 14;
var topShadowBlur = 25;
var topShadowColor = "#f6f6f6";

var hor_radiusL = 50;
var hor_radiusR = 50;
var hor_radiusBL = 50;
var hor_radiusBR = 50;

var vert_radiusL = 50;
var vert_radiusR = 50;
var vert_radiusBL = 50;
var vert_radiusBR = 50;

var computedStyle;

//event listener for my inputs elements
bgColorElem.addEventListener("change", handleBgColor);
sizeElem.addEventListener("change", handleSzChange);
borderRad.addEventListener("change", handleRadius);
radiusToggle.addEventListener("change", handleRadToggler);
htLeft.addEventListener("change", handleBorderRadiusHTL);
htRight.addEventListener("change", handleBorderRadiusHTR);
hbLeft.addEventListener("change", handleBorderRadiusHBL);
hbRight.addEventListener("change", handleBorderRadiusHBR);
vtLeft.addEventListener("change", handleBorderRadiusVTL);
vtRight.addEventListener("change", handleBorderRadiusVTR);
vbLeft.addEventListener("change", handleBorderRadiusVBL);
vbRight.addEventListener("change", handleBorderRadiusVBR);
shadBlur.addEventListener("change", handleBlur);
shadColor.addEventListener("change", handleShadowColor);
shadX.addEventListener("change", handleXOffset);
shadY.addEventListener("change", handleYOffset);
morphismToggle.addEventListener("change", handleMorphToggler);
topShadX.addEventListener("change", topX);
topShadY.addEventListener("change", topY);
topShadBlur.addEventListener("change", topBlur);
// end of input element eventlisteners

slidePanel.addEventListener("click", showPanel); //opens the control on mobile devices

window.onload = () => {
  elem.style.boxShadow = ` ${shadowX}px ${shadowY}px ${blurShadow}px ${shadowColor}`;

  codeUpdate();
};

var size;
var border_rad;
var bgd;
var box_shads;

var drawControl = false;

function codeUpdate() {
computedStyle = window.getComputedStyle(elem);
 size = computedStyle.getPropertyValue("width");
 border_rad = computedStyle.getPropertyValue("border-radius");
 bgd = computedStyle.getPropertyValue("background-color");
 box_shads = computedStyle.getPropertyValue("box-shadow");

 txtArea.innerHTML = `width: ${size} \nheight:${size} \nborder-radius: ${border_rad} \nbackground-color: ${bgd} \nbox-shadow: ${box_shads}`;
}

var show = false;
var active = false;

function showPanel() {
  drawControl = !drawControl

  contrlContainer.style.width = `${drawControl? "90%" : ""}`;
  // contrlView.style.display = 'revert';
}

function handleRadToggler() {
  show = !show;
  radToggle.style.display = `${show ? "block" : ""}`;
}

function handleMorphToggler() {
  active = !active;
  morphToggle.style.display = `${active ? "block" : ""}`;
  elem.style.boxShadow = `${
    active
      ? `-${topXOffset}px -${topYOffset}px ${topShadowBlur}px ${topShadowColor}, ${shadowX}px ${shadowY}px ${blurShadow}px ${shadowColor}`
      : ` ${shadowX}px ${shadowY}px ${blurShadow}px ${shadowColor}`
  }`;
  codeUpdate();
}

function handleBgColor(e) {
  elem.style.backgroundColor = `${e.target.value}`;
  codeUpdate();
}

function handleSzChange(e) {
  elem.style.width = `${e.target.value}px`;
  elem.style.height = `${e.target.value}px`;
  codeUpdate();
}

function handleRadius(e) {
  elem.style.borderRadius = `${e.target.value}px`;
  codeUpdate();
}

function handleXOffset(e) {
  if (active) {
    handleMorphToggler();
    morphismToggle.checked = false;
   
  }
  shadowX = e.target.value;
  elem.style.boxShadow = ` ${shadowX}px ${shadowY}px ${blurShadow}px ${shadowColor}`;
  codeUpdate(); 
}

function handleYOffset(e) {
  if (active) {
    handleMorphToggler();
    morphismToggle.checked = false;
  }
  shadowY = e.target.value;
  elem.style.boxShadow = ` ${shadowX}px ${shadowY}px ${blurShadow}px ${shadowColor}`;
  codeUpdate();
}

function handleBlur(e) {
  if (active) {
    handleMorphToggler();
    morphismToggle.checked = false;
  }
  blurShadow = e.target.value;
  elem.style.boxShadow = `${shadowX}px ${shadowY}px ${blurShadow}px ${shadowColor}`;
  codeUpdate();
}
function handleShadowColor(e) {
  shadowColor = e.target.value;
  elem.style.boxShadow = ` ${shadowX}px ${shadowY}px ${blurShadow}px ${shadowColor}`;
  codeUpdate();
}

function topX(e) {
  topXOffset = e.target.value;
  elem.style.boxShadow = `-${topXOffset}px -${topYOffset}px ${topShadowBlur}px ${topShadowColor}, ${shadowX}px ${shadowY}px ${blurShadow}px ${shadowColor}`;
  codeUpdate();
}

function topY(e) {
  topYOffset = e.target.value;
  elem.style.boxShadow = `-${topXOffset}px -${topYOffset}px ${topShadowBlur}px ${topShadowColor}, ${shadowX}px ${shadowY}px ${blurShadow}px ${shadowColor}`;
  codeUpdate();
}

function topBlur(e) {
  topShadowBlur = e.target.value;
  elem.style.boxShadow = `-${topXOffset}px -${topYOffset}px ${topShadowBlur}px ${topShadowColor}, ${shadowX}px ${shadowY}px ${blurShadow}px ${shadowColor}`;
  codeUpdate();
}

function handleBorderRadiusHTR(e) {
  hor_radiusR = e.target.value;
  elem.style.borderTopRightRadius = `${hor_radiusR}px ${vert_radiusR}px`;
  codeUpdate();
}

function handleBorderRadiusHTL(e) {
  hor_radiusL = e.target.value;
  elem.style.borderTopLeftRadius = `${hor_radiusL}px ${vert_radiusL}px`;
  codeUpdate();
}
function handleBorderRadiusHBR(e) {
  hor_radiusBR = e.target.value;
  elem.style.borderBottomRightRadius = `${hor_radiusBR}px ${vert_radiusBR}px`;
  codeUpdate();
}
function handleBorderRadiusHBL(e) {
  hor_radiusBL = e.target.value;
  elem.style.borderBottomLeftRadius = `${hor_radiusBL}px ${vert_radiusBL}px`;
  codeUpdate();
}

function handleBorderRadiusVTR(e) {
  vert_radiusR = e.target.value;
  elem.style.borderTopRightRadius = `${hor_radiusR}px ${vert_radiusR}px`;
  codeUpdate();
}

function handleBorderRadiusVTL(e) {
  vert_radiusL = e.target.value;
  elem.style.borderTopLeftRadius = `${hor_radiusL}px ${vert_radiusL}px`;
  codeUpdate();
}
function handleBorderRadiusVBR(e) {
  vert_radiusBR = e.target.value;
  elem.style.borderBottomRightRadius = `${hor_radiusBR}px ${vert_radiusBR}px`;
  codeUpdate();
}
function handleBorderRadiusVBL(e) {
  vert_radiusBL = e.target.value;
  elem.style.borderBottomLeftRadius = `${hor_radiusBL}px ${vert_radiusBL}px`;
  codeUpdate();
}
