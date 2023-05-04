const elem = document.getElementById("shappd_display");
const contrlContainer= document.getElementById("controlContainer");
const domObj = document.querySelectorAll("input");
const radToggle = document.querySelector('#toggleContainer')
const morphToggle = document.querySelector('#topShadContainer')
const slidePanel = document.querySelector('#mobileSlidePanel')
const txtArea = document.getElementById('txtArea')
const contrlView = document.getElementById("control_view");

const bgColorElem = domObj[0];
const sizeElem = domObj[1];
const borderRad = domObj[2];
const radiusToggle = domObj[3];
const htLeft = domObj[4];
const htRight = domObj[5];
const hbRight = domObj[6];
const hbLeft = domObj[7];
const vtLeft = domObj[8];
const vtRight = domObj[9];
const vbRight = domObj[10];
const vbLeft = domObj[11];
const shadX = domObj[12];
const shadY = domObj[13];
const shadBlur = domObj[14];
const shadColor = domObj[15];
const morphismToggle = domObj[16];
const topShadX = domObj[17];
const topShadY = domObj[18];
const topShadBlur = domObj[19];

export {
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
  morphismToggle,
  topShadX,
  topShadY,
  topShadBlur,
  radToggle,
  morphToggle,
  slidePanel,
  contrlView
};
