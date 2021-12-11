function background(writeH,size,position,repeat){
    let link = document.querySelector(writeH)
    let link_bg = link.getAttribute("ws-background")
    link.style.background = link_bg
    link.style.backgroundSize = size
    link.style.backgroundPosition = position
    link.style.backgroundRepeat = repeat
}
