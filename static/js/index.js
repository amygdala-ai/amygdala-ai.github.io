import Home from "./views/Home.js"
import Publications from "./views/Publications.js";
import Openings from "./views/Openings.js";
import Team from "./views/Team.js";
import Bio from "./views/Bio.js";
import Contact from "./views/Contact.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {

    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect != location.href) {
        history.replaceState(null, null, redirect);
    }

    const routes = [
        { path: "/", view: Home, nav_id: "home-link" },
        { path: "/publications", view: Publications, nav_id: "pubs-link" },
        { path: "/openings", view: Openings, nav_id: "open-link" },
        { path: "/team", view: Team, nav_id: "team-link" },
        { path: "/team/:id", view: Bio, nav_id: "team-link" },
        { path: "/contact", view: Contact, nav_id: "cont-link" }
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    $(".nav-link").removeClass("active");
    $("#" + match.route.nav_id).addClass("active");
    document.getElementById("app").innerHTML = await view.getHtml();

};

window.addEventListener("popstate", router);


// Use SPA router
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        var link;
        if (e.target.matches("[data-link]")) {
            link = e.target.href;
        }
        else if (e.target.parentElement.matches("[data-link]")) {
            link = e.target.parentElement.href;
        }
        e.preventDefault();
        navigateTo(link);
    });
    router();
});


// Switch between dark and light mode
document.getElementById("light-switch").addEventListener("click", () => {
    var curr = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--on'));
    document.documentElement.style.setProperty('--on', 1 - curr);
    // dark mode
    if (curr) {
        const newColor = "#fff";
        $.each(pJSDom[0].pJS.particles.array, function(i,p){
            pJSDom[0].pJS.particles.array[i].color.value = newColor;
            pJSDom[0].pJS.particles.array[i].color.rgb = hexToRgb(newColor);
            pJSDom[0].pJS.particles.line_linked.color_rgb_line = hexToRgb(newColor);
        });
        $("#navbar").removeClass("navbar-light");
        $("#navbar").addClass("navbar-dark");
        $("#news-carousel").removeClass("carousel-dark");
    }
    // light mode
    else {
        const newColor = "#000";
        $.each(pJSDom[0].pJS.particles.array, function(i,p){
            pJSDom[0].pJS.particles.array[i].color.value = newColor;
            pJSDom[0].pJS.particles.array[i].color.rgb = hexToRgb(newColor);
            pJSDom[0].pJS.particles.line_linked.color_rgb_line = hexToRgb(newColor);
        });
        $("#navbar").removeClass("navbar-dark");
        $("#navbar").addClass("navbar-light");
        $("#news-carousel").addClass("carousel-dark");
    }
});
