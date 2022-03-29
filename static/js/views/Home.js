import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
        <h2 class="liner"> Latest in AI </h2>
        <div id="news-carousel" class="carousel carousel-dark slide" data-bs-ride="carousel" style="width: 80%; 
        margin: auto;">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#news-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#news-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#news-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                <img src="static/img/research/nlp.png" class="d-block" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                <img src="static/img/research/nlp.png" class="d-block" alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                <img src="static/img/research/nlp.png" class="d-block" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#news-carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#news-carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <h2 class="liner"> Who We Are </h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h2 class="liner"> Research Areas </h2>
        <div style="display: inline-block; padding-bottom: 2rem;">
            <div class="img-container">
                <div class="content">
                    <div class="content-overlay"></div>
                    <img class="content-image" src="static/img/research/cv.jpg">
                    <h3 class="content-title">Computer Vision</h3>
                    <p class="content-details fadeIn-bottom">This is a short description</p>
                    </a>
                </div>
            </div>
            <div class="img-container">
                <div class="content">
                    <div class="content-overlay"></div>
                    <img class="content-image" src="static/img/research/biomedical.png">
                    <h3 class="content-title">Biomedical Image Processing</h3>
                    <p class="content-details fadeIn-bottom">This is a short description</p>
                    </a>
                </div>
            </div>
            <div class="img-container">
                <div class="content">
                    <div class="content-overlay"></div>
                    <img class="content-image" src="static/img/research/bci.jpg">
                    <h3 class="content-title">Brain-Computer Interface & Biosignal Processing</h3>
                    <p class="content-details fadeIn-bottom">This is a short description</p>
                    </a>
                </div>
            </div>
            <div class="img-container">
                <div class="content">
                    <div class="content-overlay"></div>
                    <img class="content-image" src="static/img/research/nlp.png">
                    <h3 class="content-title">Text Processing & NLP</h3>
                    <p class="content-details fadeIn-bottom">This is a short description</p>
                    </a>
                </div>
            </div>
            <div class="img-container">
                <div class="content">
                    <div class="content-overlay"></div>
                    <img class="content-image" src="static/img/research/audio.png">
                    <h3 class="content-title">Speech & Audio Signal Understanding</h3>
                    <p class="content-details fadeIn-bottom">This is a short description</p>
                    </a>
                </div>
            </div>
            <div class="img-container">
                <div class="content">
                    <div class="content-overlay"></div>
                    <img class="content-image" src="static/img/research/gis.jpg">
                    <h3 class="content-title">ML in Geographic Information Systems</h3>
                    <p class="content-details fadeIn-bottom">This is a short description</p>
                    </a>
                </div>
            </div>
        </div>

        <h2 class="liner"> Collaborators </h2>
        <div class="container-fluid" style="width: auto !important; margin: 2rem 1rem 1rem 1rem;">
            <div class="row text-center" style="justify-content: space-between;">
                <div class="col-lg-3">
                    <a class="link" href="https://kiit.ac.in/"> <img src="static/img/KIIT-logo.png" style="height:50px;  margin-bottom:10px">
                    <h6> Kalinga Institute of Industrial Technology </h6> </a>
                </div>
                <div class="col-lg-3">
                    <a class="link" href="https://www.cineconf.org/"> <img src="static/img/CINE2020-logo.webp" style="height:50px;  margin-bottom:10px">
                    <h6> International Conference on Computational Intelligence and Networks </h6> </a>
                </div>
                <div class="col-lg-3">
                    <a class="link" href="https://www.tum.de/"><img src="static/img/TUM-logo.png" style="height:50px; margin-bottom:10px">
                    <h6> Technical University Munich </h6> </a>
                </div>
            </div>
        </div>
        `;
    }
}