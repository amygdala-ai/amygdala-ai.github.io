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

    // Sort alphabetically
    teamObj.people.sort( function( a, b ) {
        a = a.name.toLowerCase();
        b = b.name.toLowerCase();
        return a < b ? -1 : a > b ? 1 : 0;
    });

    var resultHtml = "";

    resultHtml += `
    <div style="text-align: center; padding: 2rem 0 2rem 0;">
        <svg viewBox="0 0 4652.04 4424.36" preserveAspectRatio="xMidYMid meet" width="65%">
            <g id="jigsaw">
                <g id="top-middle-piece">
                    <path class="piece" d="M1571.64,1139.31l54.27-75.78c53-74.2,140.26-74.52,193.86-.74L2019.7,1338c53.61,73.78,26.35,156.68-60.56,184.21l-88.92,28.08c-86.53,27.5-114,109.7-61.24,183.29l516.77,711.53,517.06-711.37c53.69-72.89,140.35-72.19,193.24,1.6l54.18,75.89c53,74.15,140.3,74.46,193.91.68l199.93-275.18c53.6-73.78,26.34-156.67-60.61-184.15l-88.84-28.19c-86.61-27.39-114-109.7-61.28-183.23l206.73-284.54L2326,18.12,1171.88,856.66,1378.44,1141C1432.1,1213.8,1518.83,1213.21,1571.64,1139.31Z"/>
                    <text class="piece-text" transform="translate(1957.85 1025.42)">Founders</text>
                </g>

                <g id="top-left-piece">
                    <path class="piece" d="M2325.75,2445.08,1809,1733.55c-52.73-73.59-25.29-155.79,61.24-183.29l88.92-28.08c86.91-27.53,114.17-110.43,60.56-184.21l-199.93-275.18c-53.6-73.78-140.86-73.46-193.86.74l-54.27,75.78c-52.81,73.9-139.54,74.49-193.2,1.66L1171.88,856.66,17.24,1695.55,457.93,3051.86l334.81-108.79c85.84-28.52,112.08-111.19,58.12-184.26l-55.3-75c-54.19-73.34-27.53-156.43,59.2-184.61l323.5-105.11c86.73-28.18,157.14,23.37,156.47,114.53l-.77,93.25c-.58,90.78,69.11,142.28,155.39,114.87Z"/>
                    <text class="piece-text" transform="translate(703.55 2153.79)">Mentors</text>
                </g>

                <g id="top-right-piece">
                    <path class="piece" d="M3334.62,1324.36l88.84,28.19c86.95,27.48,114.21,110.37,60.61,184.15l-199.93,275.18c-53.61,73.78-140.87,73.47-193.91-.68l-54.18-75.89c-52.89-73.79-139.55-74.49-193.24-1.6l-517,711.35L3162.12,2717c85.91,28.54,112,111.17,58.19,184.28l-55.43,75c-54.13,73.36-27.46,156.44,59.27,184.63L3547.65,3266c86.73,28.18,157.14-23.37,156.41-114.55l-.65-93.21c-.71-90.83,69.11-142.28,155.33-114.9L4194,3052.26l440.82-1356.71-1154.74-839-206.73,284.54C3220.65,1214.66,3248,1297,3334.62,1324.36Z"/>
                    <text class="piece-text" transform="translate(3221.2 2153.79)">Advisors</text>
                </g>

                <g id="bottom-left-piece">
                    <path id="bottom-left-piece" class="piece" d="M2168.36,3944.78l-88.44,29.41c-86.49,28.87-157.27-22.17-157.27-113.36V3520.69c0-91.2,70.78-142.24,157.27-113.42l88.44,29.54c86.17,28.61,156.68-21.76,157.28-112.28l.15-879.39-836.44,271.58c-86.28,27.41-156-24.09-155.39-114.87l.77-93.25c.67-91.16-69.74-142.71-156.47-114.53l-323.5,105.11c-86.73,28.18-113.39,111.27-59.2,184.61l55.3,75c54,73.07,27.72,155.74-58.12,184.26L457.93,3051.86,899.11,4409.7H2325.64V4057C2325,3966.53,2254.53,3916,2168.36,3944.78Z"/>
                    <text class="piece-text" transform="translate(1000.95 3604.77)">
                        <tspan x="0">Web &</tspan>
                        <tspan x="2rem" dy="14rem">Media</tspan>
                    </text>
                </g>

                <g id="bottom-right-piece">
                    <path class="piece" d="M4194,3052.26l-335.25-108.93c-86.22-27.38-156,24.07-155.33,114.9l.65,93.21c.73,91.18-69.68,142.73-156.41,114.55l-323.5-105.11c-86.73-28.19-113.4-111.27-59.27-184.63l55.43-75c53.84-73.11,27.72-155.74-58.19-184.28l-836.3-271.89-.18,879.43c-.6,90.52-71.11,140.89-157.28,112.28l-88.44-29.54c-86.49-28.82-157.27,22.22-157.27,113.42v340.14c0,91.19,70.78,142.23,157.27,113.36l88.44-29.41C2254.53,3916,2325,3966.53,2325.64,4057V4409.7H3752.93Z"/>
                    <text class="piece-text" transform="translate(2587.32 3604.77)">
                        <tspan x="0">Associates /</tspan>
                        <tspan x="0" dy="14rem">Apprentices</tspan>
                    </text>
                </g>
            </g>
        </svg>
    </div>
    <div id="team">
    `

    teamObj.roles.forEach(role => {
        resultHtml += `
        <div id="${pascalize(role)}" style="display: none">
            <div class="row">
                <h2 class="liner"> ${pascalize(role)} </h2>
            </div>
            <div class="row" style="margin-bottom: 2rem">
        `
        
        teamObj.people.forEach(person => {
            if (person.roles.some(item => item == role)) {
                resultHtml += `
                    <div class="col-lg-3 text-center">
                        <div class="row">
                            <div class="col">
                                <a href="/team/${person.id}" data-link>
                                    <img class="rounded-circle" src="${person.img}" style="width: 8.75rem; height: 8.75rem; margin-top: 1vw; margin-bottom: 1vw; border: solid 0.2rem teal;"/>
                                </a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <a class="link" href="/team/${person.id}" data-link> ${pascalize(person.name)} </a>
                            </div>
                        </div>
                    </div>
                `
            }
        });
        resultHtml += `
            </div>
        </div>
        `
    });
    resultHtml += `</div>`
    return resultHtml;
}

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Amygdala AI: Team");
    }

    async getHtml() {
        return fetchTeam();
    }
}