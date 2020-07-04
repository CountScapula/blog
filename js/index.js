function icon_hover(element) {
    switch(element.id) {
        case "github-icon":
            element.setAttribute("src", "/img/github-icon-hover.png");
            break;
        case "linkedin-icon":
            element.setAttribute("src", "/img/linkedin-icon-hover.png");
            break;
        case "email-icon":
            element.setAttribute("src", "/img/email-icon-hover.png");
            break;
    }
}

function icon_unhover(element) {
    switch(element.id) {
        case "github-icon":
            element.setAttribute("src", "/img/github-icon.png");
            break;
        case "linkedin-icon":
            element.setAttribute("src", "/img/linkedin-icon.png");
            break;
        case "email-icon":
            element.setAttribute("src", "/img/email-icon.png");
    }
}