import AbstractView from "./AbstractView.js";

function sortDate(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
}

function fetchPubs() {
    let xhttp = new XMLHttpRequest();
    var pubArr;
    
    xhttp.open("GET", "/static/data/publications.json", false)
    xhttp.send(null)

    pubArr = JSON.parse(xhttp.responseText);
    pubArr.sort(sortDate);

    var resultHtml = "";
    var currYear;
    var year = "";
    
    pubArr.forEach(element => {
        currYear = new Date(element.date).getFullYear();
        if (currYear != year) {
            resultHtml += `
            ${year != "" ? "</div>" : ""}
            <h2 data-bs-toggle="collapse" href="#pubs_${currYear}" role="button" aria-expanded="true" aria-controls="${currYear}" class="liner">
                <span class="fa fa-fw fa-caret-down"></span>
                ${currYear}
            </h2>
            <div class="collapse show" id="pubs_${currYear}">
            `
            year = currYear;
        }
        resultHtml += `
        <div class="row" style="font-family: var(--bs-font-sans-serif); margin: 1rem !important">
            <div class="col-lg-3" style="vertical-align: middle; text-align: center">
                    <a href=${element.link} target="_blank"> <img class="thumbnail" src="static/img/pubs/${element.id}.jpg" onerror=this.src="static/img/pubs/books.jpg"></a>
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
    resultHtml += `
    </div>
    `

    return resultHtml;
}

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Publications - Amygdala AI");
    }

    async getHtml() {
        return fetchPubs();
    }
}