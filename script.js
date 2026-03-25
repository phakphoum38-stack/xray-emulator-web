function scan(){

    let img = document.getElementById("bag")

    img.style.filter = "invert(1) brightness(2)"

    setTimeout(()=>{
        img.style.filter = "grayscale(100%)"
    },2000)

}
