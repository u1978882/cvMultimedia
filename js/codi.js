QuerrySelector.ready(function() {
    
    // Dark and light mode change
    qs("#themeToggle").onChange((e) => {
        if(qs("#themeToggle").attr("checked") == true) qs("body").replaceClass("light", "dark");
        else qs("body").replaceClass("dark", "light");
    })
    

    
})