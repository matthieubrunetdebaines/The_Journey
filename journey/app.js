// SUIVANTS

function next_one(){
    event.preventDefault();
    const img1=document.getElementById("kyoto1");
    const img2=document.getElementById("kyoto2");
    const next1=document.getElementById("suivant1");
    const next2=document.getElementById("suivant2");
    const prev1=document.getElementById("precedent1");
    const prev2=document.getElementById("precedent2");
    img1.setAttribute("style","visibility:hidden;");
    img2.setAttribute("style","visibility:visible;");
    next1.setAttribute("style","visibility:hidden;");
    next2.setAttribute("style","visibility:visible;");
    prev1.setAttribute("style","visibility:hidden;");
    prev2.setAttribute("style","visibility:visible;");
}

function next_two(){
    event.preventDefault();
    const img2=document.getElementById("kyoto2");
    const img3=document.getElementById("kyoto3");
    const next2=document.getElementById("suivant2");
    const next3=document.getElementById("suivant3");
    const prev2=document.getElementById("precedent2");
    const prev3=document.getElementById("precedent3");
    img2.setAttribute("style","visibility:hidden;");
    img3.setAttribute("style","visibility:visible;");
    next2.setAttribute("style","visibility:hidden;");
    next3.setAttribute("style","visibility:visible;");
    prev2.setAttribute("style","visibility:hidden;");
    prev3.setAttribute("style","visibility:visible;");
}

function next_three(){
    event.preventDefault();
    const img3=document.getElementById("kyoto3");
    const img4=document.getElementById("kyoto4");
    const next3=document.getElementById("suivant3");
    const next4=document.getElementById("suivant4");
    const prev3=document.getElementById("precedent3");
    const prev4=document.getElementById("precedent4");
    img3.setAttribute("style","visibility:hidden;");
    img4.setAttribute("style","visibility:visible;");
    next3.setAttribute("style","visibility:hidden;");
    next4.setAttribute("style","visibility:visible;");
    prev3.setAttribute("style","visibility:hidden;");
    prev4.setAttribute("style","visibility:visible;");
}

function next_four(){
    event.preventDefault();
    const img4=document.getElementById("kyoto4");
    const img1=document.getElementById("kyoto1");
    const next4=document.getElementById("suivant4");
    const next1=document.getElementById("suivant1");
    const prev4=document.getElementById("precedent4");
    const prev1=document.getElementById("precedent1");
    img4.setAttribute("style","visibility:hidden;");
    img1.setAttribute("style","visibility:visible;");
    next4.setAttribute("style","visibility:hidden;");
    next1.setAttribute("style","visibility:visible;");
    prev4.setAttribute("style","visibility:hidden;");
    prev1.setAttribute("style","visibility:visible;");
}

// PRECEDENTS

function prev_1(){
    event.preventDefault();
    const img1=document.getElementById("kyoto1");
    const img4=document.getElementById("kyoto4");
    const next1=document.getElementById("suivant1");
    const next4=document.getElementById("suivant4");
    const prev1=document.getElementById("precedent1");
    const prev4=document.getElementById("precedent4");
    img1.setAttribute("style","visibility:hidden;");
    img4.setAttribute("style","visibility:visible;");
    next1.setAttribute("style","visibility:hidden;");
    next4.setAttribute("style","visibility:visible;");
    prev1.setAttribute("style","visibility:hidden;");
    prev4.setAttribute("style","visibility:visible;");
}

function prev_2(){
    event.preventDefault();
    const img2=document.getElementById("kyoto2");
    const img1=document.getElementById("kyoto1");
    const next2=document.getElementById("suivant2");
    const next1=document.getElementById("suivant1");
    const prev2=document.getElementById("precedent2");
    const prev1=document.getElementById("precedent1");
    img2.setAttribute("style","visibility:hidden;");
    img1.setAttribute("style","visibility:visible;");
    next2.setAttribute("style","visibility:hidden;");
    next1.setAttribute("style","visibility:visible;");
    prev2.setAttribute("style","visibility:hidden;");
    prev1.setAttribute("style","visibility:visible;");
}

function prev_3(){
    event.preventDefault();
    const img3=document.getElementById("kyoto3");
    const img2=document.getElementById("kyoto2");
    const next3=document.getElementById("suivant3");
    const next2=document.getElementById("suivant2");
    const prev3=document.getElementById("precedent3");
    const prev2=document.getElementById("precedent2");
    img3.setAttribute("style","visibility:hidden;");
    img2.setAttribute("style","visibility:visible;");
    next3.setAttribute("style","visibility:hidden;");
    next2.setAttribute("style","visibility:visible;");
    prev3.setAttribute("style","visibility:hidden;");
    prev2.setAttribute("style","visibility:visible;");
}

function prev_4(){
    event.preventDefault();
    const img4=document.getElementById("kyoto4");
    const img3=document.getElementById("kyoto3");
    const next4=document.getElementById("suivant4");
    const next3=document.getElementById("suivant3");
    const prev4=document.getElementById("precedent4");
    const prev3=document.getElementById("precedent3");
    img4.setAttribute("style","visibility:hidden;");
    img3.setAttribute("style","visibility:visible;");
    next4.setAttribute("style","visibility:hidden;");
    next3.setAttribute("style","visibility:visible;");
    prev4.setAttribute("style","visibility:hidden;");
    prev3.setAttribute("style","visibility:visible;");
}