const buttonMission = document.getElementById("button-mission")
const buttonVision = document.getElementById("button-vision")

const descriptionMission = document.getElementById("mission-description")
const descriptionVision = document.getElementById("vision-description")

buttonMission.onclick = () => {
  buttonMission.classList.add('focus')
  buttonVision.classList.remove('focus')
  descriptionMission.classList.add('active')
  descriptionVision.classList.remove('active')
}

buttonVision.onclick = () => {
  buttonVision.classList.add('focus')
  buttonMission.classList.remove('focus')
  descriptionVision.classList.add('active')
  descriptionMission.classList.remove('active')
}

