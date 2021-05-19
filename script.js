var p = null;
var r = null;
var t = null;
var i = null;
var a = null;
function calculateInterest() {
      p = document.getElementById("PriInt").value;
      r = document.getElementById("RoiInt").value;
      t = document.getElementById("TimInt").value;
      i = (p * r * t) / 100;
      document.getElementById("DisInt").innerHTML = i;
}
function calculateAmount() {
      p = document.getElementById("PriAmo").value;
      i = document.getElementById("IntAmo").value;
      a = p + i;
      document.getElementById("DisAmo").innerHTML = a;
}
function calculatePrinciple() {
      r = document.getElementById("RoiPri").value;
      t = document.getElementById("TimPri").value;
      i = document.getElementById("IntPri").value;
      p = (100 * i) / (r * t);
      document.getElementById("DisPri").innerHTML = p;
}
function calculateRateOfInterest() {
      i = document.getElementById("IntRoi").value;
      p = document.getElementById("PriRoi").value;
      t = document.getElementById("TimRoi").value;
      r = (100 * i) / (r * t);
      document.getElementById("DisRoi").innerHTML = r;
}
function calculateTime() {
      i = document.getElementById("IntTim").value;
      p = document.getElementById("PriTim").value;
      r = document.getElementById("RoiTim").value;
      t = (100 * i) / (p * r)
}
