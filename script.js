function scan(){

    let img = document.getElementById("bag")

    img.style.transition = "all 1s"
    img.style.filter = "invert(1) brightness(2) contrast(2)"

    setTimeout(()=>{
        img.style.filter = "grayscale(100%)"
    },2000)

}
