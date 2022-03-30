import AbstractView from "./AbstractView.js";

function loadTeam() {
    let xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", "../static/data/team.json", false)
    xhttp.send(null);

    sessionStorage['team'] = xhttp.responseText;
    return;
}

function pascalize(str) {
    return str.replace(/(\w)(\w*)/g,
    function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();});
}

function fetchPersonBio(person_id) {
    if (sessionStorage.getItem("team") === null) {
        loadTeam();
    }
    
    const teamObj = JSON.parse(sessionStorage['team']);
    const foundId = [].concat.apply([], Object.values(teamObj)).find(element => element.id === person_id);
    var resultHtml = "";

    if (foundId) {
        resultHtml += `
        <div class="row" style="margin-top: 0.625rem; margin-bottom: 1.25rem;">
            <h2 class="text-center"> ${pascalize(foundId.name)} </h2>
        </div>
        <div class="row" style="margin-top: 0.625rem; margin-bottom: 0.625rem; align-items: center;">
            <div class="col-xs-8 col-sm-6 col-md-6 col-lg-6 text-end">
                <img class="rounded-circle" height="200px" width="200px" src="../${foundId.img}" style="border: solid 0.2rem teal;">
            </div>
            <div class="col-xs-8 col-sm-6 col-md-6 col-lg-6 text-start" style="display: flex; flex-direction: column; gap: 0.5rem">
                <div>
                    <span class="fa fa-fw fa-profile fa-briefcase"></span>
                    ${foundId.position}
                </div>
        `
        if (foundId.e_mail) {
            resultHtml += `
                <div>
                    <span class="fa fa-fw fa-profile fa-at"></span>
                    <a href="mailto:${foundId.e_mail}" class="link">${foundId.e_mail}</a>
                </div>
            `
        }
        if (foundId.phone) {
            resultHtml += `
                <div>
                    <span class="fa fa-fw fa-profile fa-phone"></span>
                    ${foundId.phone}
                </div>
            `
        }
        resultHtml += `
                <div style="display:flex; gap: 0.75rem;">
                `
        if (foundId.google_scholar) {
            resultHtml += `
                    <a href="${foundId.google_scholar}" class="link" target="_blank"><span class="ai ai-google-scholar-square fa-lg" style="color: teal"></span></a>
            `
        }
        if (foundId.linkedin) {
            resultHtml += `
                    <a href="${foundId.linkedin}" class="link" target=" _blank"><span class="fa fa-linkedin-square fa-lg" style="color: teal"></span></a>
            `
        }
        if (foundId.website) {
            resultHtml += `
                    <a href="${foundId.website}" class="link" target="_blank"><span class="fa fa-globe fa-lg" style="color: teal"></span></a>
            `
        }
        if (foundId.facebook) {
            resultHtml += `
                    <a href="${foundId.facebook}" class="link" target="_blank"><span class="fa fa-facebook-square fa-lg" style="color: teal"></span></a>
            `
        }
        if (foundId.twitter) {
            resultHtml += `
                    <a href="${foundId.twitter}" class="link" target="_blank"><span class="fa fa-twitter-square fa-lg" style="color: teal"></span></a>
            `
        }
        resultHtml += `
                </div>
            </div>
        </div>
        `

        resultHtml += `
        <div class="row">
            <h2 class="liner"> Bio </h2>
        </div>
        <div class="row" style="text-align: justify; margin-bottom: 1.5rem;">
            <div>${foundId.bio}</div>
        </div>
        `
    }
    return resultHtml;
}

function sortDate(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
}

function loadPubs() {
    let xhttp = new XMLHttpRequest();
    var pubArr;
    
    xhttp.open("GET", "../static/data/publications.json", false)
    xhttp.send(null)

    pubArr = JSON.parse(xhttp.responseText);
    pubArr.sort(sortDate);
    sessionStorage['pubs'] = JSON.stringify(pubArr);
    return;
}

function fetchPersonPubs(person_id) {
    if (sessionStorage.getItem("pubs") === null) {
        loadPubs();
    }
    
    var pubArr = JSON.parse(sessionStorage['pubs']);
    var resultHtml = "";

    pubArr = pubArr.filter( x => x.author_ids.includes(person_id) );

    if (pubArr.length != 0) {
        resultHtml += `
        <div class="row row-bio">
            <h2 class="liner"> Publications </h2>
        </div>
        `
        pubArr.forEach(element => {
            resultHtml += `
            <div class="row" style="font-family: var(--bs-font-sans-serif); margin: 1rem !important">
                <div class="col-lg-3" style="vertical-align: middle; text-align: center">
                        <a href=${element.link} target="_blank"> <img class="thumbnail" src="../static/img/pubs/${element.id}.jpg" onerror=this.src="../static/img/pubs/books.jpg"></a>
                </div>
                <div class="col-lg-9">
                    <table cellpadding="2">
                        <thead>
                        <tr>
                            <th class="text-left">
                            <a class="link" href=${element.link} target="_blank"> ${element.title} </a>
                        </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr> <td scope="row"> <small> <i> ${element.authors} </i> </small> </td> </tr>
                        <tr> <td scope="row"> <small> <b> ${element.conference}, ${element.date} </b> </small> </td> </tr>
                        <tr> <td scope="row" style="text-align: justify"> <small> ${element.brief} </small>  </td> </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            `
        });
    }
    return resultHtml;
}

function fetchPersonPage(person_id) {
    var resultHtml = "";

    resultHtml += fetchPersonBio(person_id);
    resultHtml += fetchPersonPubs(person_id);

    return resultHtml;
}

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.personId = parseInt(params.id);
        this.setTitle("Amygdala AI: Bio");
    }

    async getHtml() {
        return fetchPersonPage(this.personId);
    }
}