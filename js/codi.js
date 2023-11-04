QuerrySelector.ready(function() {
    
    // Dark and light mode change
    const theme = localStorage.getItem("theme");
    if (theme == "light") {
        qs("body").replaceClass("dark", "light");
        qs("#themeToggle").attr("checked", true);
    }

    qs("#themeToggle").onChange((e) => {
        qs(":root").firstElement().style.setProperty("--transition-time", "0.2s");
        if(qs("#themeToggle").attr("checked") == false){
            qs("body").replaceClass("light", "dark");
            localStorage.setItem("theme", "dark");
        }
        else {
            qs("body").replaceClass("dark", "light");
            localStorage.setItem("theme", "light");
        }
    })



    // Sharp and rounded mode change
    const border = localStorage.getItem("border");
    if (border == "sharp") {
        qs("body").replaceClass("border", "sharp");
        qs("#borderRadiusToggle").attr("checked", true);
    }

    qs("#borderRadiusToggle").onChange((e) => {
        qs(":root").firstElement().style.setProperty("--transition-time", "0.8s");
        if(qs("#borderRadiusToggle").attr("checked") == true){
            qs("body").replaceClass("round", "sharp");
            localStorage.setItem("border", "sharp");
        }
        else {
            qs("body").replaceClass("sharp", "round");
            localStorage.setItem("border", "round");
        }
    })
    

    qs("#button-colorpicker").onClick((e) => {
        qs("#backdrop-colorpicker").addClass("show");
    })

    qs("#backdrop-colorpicker").onClick((e, selector) => {
        selector.removeClass("show")
    })


    // Color pikcer

    let colorPrimary = getComputedStyle(qs(":root").firstElement()).getPropertyValue('--main');
    let colorSecondary = getComputedStyle(qs(":root").firstElement()).getPropertyValue("--secondary");
    const primaryColorCookie = localStorage.getItem("primaryColor");
    if (primaryColorCookie) colorPrimary = primaryColorCookie
    const secondaryColorCookie = localStorage.getItem("secondaryColor");
    if (secondaryColorCookie) colorSecondary = primaryColorCookie

    qs("#color-picker-primary").value(colorPrimary)

    qs("#color-picker-primary").onChange((e, selector) => {
        qs(":root").firstElement().style.setProperty('--main', selector.value());
        //qs("#color-picker-primary").value(colorPrimary)
    })
    

})