let elements = document.getElementsByClassName("column");

let i ;

one = () => {
    for(i =0 ;i <elements.length;i++){

        elements[i].style.flex = "100%";
    }
}

two = () => {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "50%";
      }
}

four = () => {

    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "25%";
      }
}