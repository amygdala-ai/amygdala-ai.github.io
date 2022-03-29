import AbstractView from "./AbstractView.js";

function loadTeam() {
    let xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", "static/data/team.json", false)
    xhttp.send(null);

    sessionStorage['team'] = xhttp.responseText;
    return;
}

function pascalize(str) {
    return str.replace(/(\w)(\w*)/g,
    function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();});
}

function fetchTeam() {
    if (sessionStorage.getItem("team") === null) {
        loadTeam();
    }
    
    const teamObj = JSON.parse(sessionStorage['team']);
    var resultHtml = "";

    Object.entries(teamObj).forEach(([key, value]) => {
        if (value.length != 0) {
            resultHtml += `
            <div class="row">
                <h2 class="liner"> ${pascalize(key)} </h2>
            </div>
            <div class="row" style="margin-bottom: 2rem">
            `
            value.forEach(element => {
                resultHtml += `
                <div class="col-lg-3 text-center">
                    <div class="row">
                        <div class="col">
                            <a href="/team/${element.id}" data-link>
                                <img class="rounded-circle" src="${element.img}" style="pointer-events: inherit; width: 8.75rem; height: 8.75rem; margin-top: 1vw; margin-bottom: 1vw; border: solid 0.2rem grey;"/>
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <a class="link" href="/team/${element.id}" data-link> ${pascalize(element.name)} </a>
                        </div>
                    </div>
                </div>
                `
            });
            resultHtml += `</div>`
        }
    });
    return resultHtml;
}

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Team");
    }

    async getHtml() {
        return fetchTeam();
    }
}