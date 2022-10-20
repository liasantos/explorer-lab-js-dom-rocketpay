import "./css/index.css"

const creditCardBGColor01 = document.querySelector(
  ".cc-bg svg > g g:nth-child(1) path"
)
const creditCardBGColor02 = document.querySelector(
  ".cc-bg svg > g g:nth-child(2) path"
)

function setCardType(type) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#DF6F29", "#C69347"],
    default: ["black", "gray"],
  }
  creditCardBGColor01.setAttribute("fill", colors[type][0])
  creditCardBGColor02.setAttribute("fill", colors[type][1])
}

setCardType("mastercard")
