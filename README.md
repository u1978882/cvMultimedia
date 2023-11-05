Figma link [Figma](https://www.figma.com/file/6tSPyoCh2MNAHBG4IOT4ns/Figma-basics?type=design&node-id=1669%3A162202&mode=design&t=hVjjyhXmL5xLWfUw-1).

# Project analisis

## Target user profile

The target users of this website are people with prior experience in web development, specifically in frontend technologies. This choice is deliberate, as the site features a multitude of animations and CSS techniques. By catering to those with web development expertise, I aim to provide a reference point that showcases my capabilities. This not only demonstrates my skills but also increases the likelihood of securing opportunities in the field.


## Information architecture

In my web cv the main part that regards information architecture is the top button. Is a flying button that will make an animation when you hover over it, and if you click on it, it will drop down and let you select witch part of the document you wanna read. The links are icons without text, and that is by design, because if you dont know what the icon do, it is more likely that you click-it. And when they click, it focuses the important part on the text with a smooth animation from the scroll and with an animation from the top button. It is basically to show of more animations, but at the same time the user has a quik menu to navigate.

## Visual design

The visual desing of my cv is quite minimalist, emulating some of the discord app looks and feels. 
It has several animations, like: 
- When page opens the percentage barrs fill up.
- When a skill is clicked an animation reveals some information about it.
- The name has an animation that emulates typing on a terminal and changing the name to other phrases.
- The top right button animates on hover and on click.
- The theme change have an animation.
- The photos apear with an animation when they are on viewport.
- The theme selector apears from the right.

The theme is react/discord inspired in the way that both websites have dark theme by default, but can be changed on to a white theme. The colors are similar, with the darkest color on the left to make a sidebar that seems on top, and the light for the content.
Then i have a accent color, by default its light-purple, because i only have one photo of myselve and i like how the color of my hoodie looks with that accent color.

The distribuition its a sidebar to show my photo, my contacts and my skills. And the main content have an alternating pattern of parragraph on the left and photo on the right, and the next have the parragraph on the right and the photo on the left.
Then there is the top-left button, acts like a navigation bar but it does not take that much space.

###Theme change

When oppening the navigation bar if you select the first option you will be able to shange the theme and the accent color. The theme changer is a toggle button and the accent color changer is a color picker. Both of these values will be saved using cookies.

## Framework

I used a framework to code the entire web, but i made that framework from scratsh. I always have seen JQuerry as a simple thing and i thought to myselve that will be easy to build it, so i took this oportunity to do that. The code of the framework is on this other repository:
https://github.com/u1978882/QuerrySelector
The sintax is similar to jquery and you will se that when it comes to js all the app have ben using it.
Example to animate the images:

```
    qs(".observed-image").onChangeVisibility((selector) => {
        qs(selector.data("image")).addClass("show");
    })
```

Or open modals:

```
    qs(".sidebar-item").onClick((e, selector) => {
        selector.addClass("show");
        qs("#sidebarBackdrop").addClass("show");
    })
```

Or change the css variable of the accent color.
```
    qs("#color-picker-primary").onChange((e, selector) => {
        qs(":root").firstElement().style.setProperty('--main', selector.value());
        localStorage.setItem("primaryColor", selector.value());
    })
```


Other than that, its plain js, html and css. To do some of this stuff i have used css variables.
