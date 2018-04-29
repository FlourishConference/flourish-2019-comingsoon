var trees = document.querySelectorAll(".bg-tree")
toggleRandomTree()
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function toggleRandomTree(){

  trees[getRandomInt(18)].classList.toggle("fade")
  setTimeout(toggleRandomTree, 500)
}
