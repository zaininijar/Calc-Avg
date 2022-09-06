const pai = document.getElementById("pai");
const ppk = document.getElementById("ppk");
const bi = document.getElementById("bi");
const mtk = document.getElementById("mtk");
const bing = document.getElementById("bing");
const bd = document.getElementById("bd");
const pbo = document.getElementById("pbo");
const pwpb = document.getElementById("pwpb");
const pkk = document.getElementById("pbo");

const btnCalc = document.getElementById("btn-calc");

const total = document.getElementById("total");
const average = document.getElementById("average");

btnCalc.addEventListener("click", () => {
  let totalVal =
    parseInt(pai.value) +
    parseInt(ppk.value) +
    parseInt(bi.value) +
    parseInt(mtk.value) +
    parseInt(bing.value) +
    parseInt(bd.value) +
    parseInt(pbo.value) +
    parseInt(pwpb.value) +
    parseInt(pkk.value);
  let averageVal = totalVal / 9;

  total.innerHTML = totalVal;
  average.innerHTML = averageVal;
});
