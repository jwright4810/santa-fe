

function mobileToggle() {
    const link = document.getElementsByClassName("nav-link");
     
    [...link].forEach(a => {
        if(document.body.clientWidth <= 842) {  
            if (a.style.display === "block") {
               a.style.display = "none";
              } else {
               a.style.display = "block";
              }
            } else {
              a.style.display = "block";
            }   
    });

  }

  window.onclick = function (event) {
    if (document.body.clientWidth <= 842) {
        const nxtlink = document.getElementsByClassName("nav-link");
        [...nxtlink].forEach(b => {
            if (!event.target.matches("#logo")) {
                b.style.display = "none";
            }
        });
    }
};