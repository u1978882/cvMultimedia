QuerrySelector.ready(function() {
    
    // Dark and light mode change
    let theme = "dark";
    if (localStorage.getItem("theme") == "light") {
        theme = "light";
        setLightTheme();
    }else setDarkTheme()


    qs("#themeToggle").onClick((e) => {
        qs(":root").firstElement().style.setProperty("--transition-time", "0.2s");
        theme = theme == "light" ? "dark" : "light";
        if(theme == "dark") setDarkTheme();
        else setLightTheme();
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
        qs(".drawer-color-picker").addClass("show");
    })

    qs("#backdrop-colorpicker").onClick((e, selector) => {
        qs(".drawer-color-picker").removeClass("show");
    })


    // Color pikcer

    let colorPrimary = getComputedStyle(qs(":root").firstElement()).getPropertyValue('--main');
    const primaryColorCookie = localStorage.getItem("primaryColor");
    if (primaryColorCookie){
        colorPrimary = primaryColorCookie
        qs(":root").firstElement().style.setProperty('--main', colorPrimary);
    }

    qs("#color-picker-primary").value(colorPrimary)

    qs("#color-picker-primary").onChange((e, selector) => {
        qs(":root").firstElement().style.setProperty('--main', selector.value());
        localStorage.setItem("primaryColor", selector.value());
        //qs("#color-picker-primary").value(colorPrimary)
    })


    // Top button
    let topMenuOpen = false;
    qs("#top-button").onClick((e, selector) => {
        if (topMenuOpen) {
            selector.removeClass("show");
            topMenuOpen = false;
        }
        else {
            selector.addClass("show");
            topMenuOpen = true;
        }
    })




    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid var(--bg-primary)}";
        document.body.appendChild(css);
    };


    // Open the skill modal
    qs(".sidebar-item").onClick((e, selector) => {
        selector.addClass("show");
        qs("#sidebarBackdrop").addClass("show");
    })

    qs("#sidebarBackdrop").onClick((e, selector) => {
        selector.removeClass("show")
        qs(".sidebar-item").removeClass("show")
    })

    
    // Remove one time animations.
    setTimeout(() => {
        qs(".progress-animation").removeClass("progress-animation")
    }, 1000)


    qs(".main-image-footer").onChangeVisibility((selector) => {
        console.log(selector.data("image"))
        qs(selector.data("image")).addClass("show");
    })

})


function setDarkTheme(){
    qs("body").replaceClass("light", "dark");
    localStorage.setItem("theme", "dark");
    qs("#themeToggle").innerHTML(`<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
    </svg>`)
}

function setLightTheme() {
    qs("body").replaceClass("dark", "light");
    localStorage.setItem("theme", "light");
    qs("#themeToggle").innerHTML(`<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
    </svg>`)
}