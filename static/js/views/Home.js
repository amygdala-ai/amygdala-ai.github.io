import AbstractView from "./AbstractView.js";

function loadNews() {
    let xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", "static/data/news.json", false)
    xhttp.send(null);

    sessionStorage['news'] = xhttp.responseText;
    return;
}

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Amygdala AI");
    }

    async getHtml() {

        if (sessionStorage.getItem("news") === null) {
            loadNews();
        }

        const newsArr = JSON.parse(sessionStorage['news']);
        var resultHtml = "";

        var curr = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--on'));
        
        resultHtml += `
        <h2 class="liner"> Latest in AI </h2>
        <section id="news-carousel" class="carousel ${curr ? "carousel-dark": ""} slide" data-bs-ride="carousel">
            <div class="carousel-inner">
        `

        newsArr.forEach(function(element, index) {
            resultHtml += `
            <div class="carousel-item ${index == 0 ? "active": ""}" data-bs-interval="8000">
                <a href=${element.link} target="_blank">
                    <img src=${element.img}>
                    <div class="carousel-caption d-md-block">
                        <h5>
                            ${element.title}
                        </h5>
                        <p class="fst-italic text-end mb-0">
                            ${element.source}
                        </p>
                    </div>
                </a>
            </div>
            `
        });

        resultHtml += `
            </div>
            <div class="carousel-indicators">
        `

        newsArr.forEach(function(element, index) {
            resultHtml += `
                <button type="button" data-bs-target="#news-carousel" data-bs-slide-to="${index}" ${index == 0 ? 'class="active" aria-current="true"' : ""} aria-label="Slide ${index + 1}"></button>
            `
        })

        resultHtml += `
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#news-carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#news-carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </section>

        <h2 class="liner"> Who We Are </h2>
        <section>
            <p style="text-align: justify">
                Amygdala AI is an open non-profit platform for cutting edge AI research with a pragmatic focus on addressing real-life use cases with intelligent algorithms for a better tomorrow.
                Our goal is to co-operate, complement and collaborate globally to push the current state of the arts in varied subdomains of artificial intelligence and machine learning research with sustainable development goals. 
            </p>
            <figure class="quote text-center">
                <blockquote class="blockquote">
                    <p class="pb-3">
                        <i class="fa fa-quote-left fa-lg text-success" style="padding-right: 0.5rem"></i>
                        <span class="lead font-italic"> No one can whistle a symphony. It takes a whole orchestra to play it. </span>
                        <i class="fa fa-quote-right fa-lg text-success" style="padding-left: 0.5rem"></i>
                    <p>
                </blockquote>
                <figcaption class="blockquote-footer">
                    H.E. Luccock
                </figcaption>
            </figure>
            <p style="text-align: justify">
                Currently, we have voluntary collaborators from Technical University of Munich, Germany and KIIT University, India and we are growing quite fast to include collaborators from several other eminent research institutes around the world.
            </p>
            <figure class="quote text-center">
                <blockquote class="blockquote">
                    <p class="pb-3">
                        <i class="fa fa-quote-left fa-lg text-success" style="padding-right: 0.5rem"></i>
                        <span class="lead font-italic"> Many ideas grow better when transplanted into another mind than the one where they sprang up. </span>
                        <i class="fa fa-quote-right fa-lg text-success" style="padding-left: 0.5rem"></i>
                    <p>
                </blockquote>
                <figcaption class="blockquote-footer">
                    Oliver Wendell Holmes
                </figcaption>
            </figure>
            <p style="text-align: justify">
                At Amygdala we work as voluntary research enthusiasts in multiple parallel ideas divided in smaller sub teams of our research associates, headed by a research advisor, and closely guided by our mentors.
                The sub teams are formed internally based on individual research interest and area of expertise.
                So, if you are an AI aficionado, ML expert or just a research enthusiast with an overlapping subdomain, feel free join us to strengthen our research community even more.
            </p>
            <figure class="quote text-center">
                <blockquote class="blockquote">
                    <p class="pb-3">
                        <i class="fa fa-quote-left fa-lg text-success" style="padding-right: 0.5rem"></i>
                        <span class="lead font-italic"> Coming together is a beginning, staying together is progress, and working together is success. </span>
                        <i class="fa fa-quote-right fa-lg text-success" style="padding-left: 0.5rem"></i>
                    <p>
                </blockquote>
                <figcaption class="blockquote-footer">
                    Henry Ford
                </figcaption>
            </figure>
        </section>

        <h2 class="liner"> Research Areas </h2>
        <section style="display: inline-block">
            <div class="img-container">
                <div class="content">
                    <div class="content-overlay"></div>
                    <img class="content-image" src="static/img/research/cv.jpg">
                    <h3 class="content-title">Computer Vision</h3>
                    <p class="content-details fadeIn-bottom">In this subdomain, we work on problems like object detection, segmentation and tracking in images or videos. Some of the examples include activity detection from body joint tracking, 3D pose estimation, image classification, object localization in 2D and 3D scenes, face recognition with mask constraints and so on.</p>
                    </a>
                </div>
            </div>
            <div class="img-container">
                <div class="content">
                    <div class="content-overlay"></div>
                    <img class="content-image" src="static/img/research/biomedical.png">
                    <h3 class="content-title">Biomedical Image Processing</h3>
                    <p class="content-details fadeIn-bottom">This subdomain deals with segmentation and classification of MRI, X-RAY, CT or Histopathology images to aid the medical practitioners in faster disease diagnosis. Some examples include Retinal Lesions identification in Fundus images, pneumonia detection from chest X-Ray and so on.</p>
                    </a>
                </div>
            </div>
            <div class="img-container">
                <div class="content">
                    <div class="content-overlay"></div>
                    <img class="content-image" src="static/img/research/bci.jpg">
                    <h3 class="content-title">Brain-Computer Interface & Biosignal Processing</h3>
                    <p class="content-details fadeIn-bottom">Here we focus on brain state discrimination with non-invasive methods like EEG or f-MRI signals and use that to communicate with the computers directly. Some examples include motor imagery intention (like limb movement) recognition, attention and cognitive load estimation, emotion recognition and so on.</p>
                    </a>
                </div>
            </div>
            <div class="img-container">
                <div class="content">
                    <div class="content-overlay"></div>
                    <img class="content-image" src="static/img/research/nlp.jpg">
                    <h3 class="content-title">Text Processing & NLP</h3>
                    <p class="content-details fadeIn-bottom">Here our focus is mostly on developing data efficient and easily customizable intelligent chatbots and text summarization tools with mixed language support.</p>
                    </a>
                </div>
            </div>
            <div class="img-container">
                <div class="content">
                    <div class="content-overlay"></div>
                    <img class="content-image" src="static/img/research/audio.png">
                    <h3 class="content-title">Speech & Audio Signal Understanding</h3>
                    <p class="content-details fadeIn-bottom">Here we work on automatic speech recognition (ASR), speech enhancement, blind source separation from single channel audio, music matching, content-based audio retrieval and so on.</p>
                    </a>
                </div>
            </div>
            <div class="img-container">
                <div class="content">
                    <div class="content-overlay"></div>
                    <img class="content-image" src="static/img/research/gis.jpg">
                    <h3 class="content-title">ML in Geographic Information Systems</h3>
                    <p class="content-details fadeIn-bottom">Here we deal with satellite-imagery and other Geo-Spatial data to build predictive models to ease site selection for different purposes like heavy industry, renewable energy farms, corporate office and so on.</p>
                    </a>
                </div>
            </div>
        </section>

        <h2 class="liner"> We Have Collaborators From </h2>
        <section class="container-fluid" style="width: auto !important; margin: 2rem 1rem 1rem 1rem;">
            <div class="row text-center" style="justify-content: space-between;">
                <div class="col-lg-3">
                    <a class="link" href="https://kiit.ac.in/" target="_blank"> <img src="static/img/KIIT-logo.png" style="height:50px;  margin-bottom:10px">
                    <h6> Kalinga Institute of Industrial Technology </h6> </a>
                </div>
                <div class="col-lg-3">
                    <a class="link" href="https://www.tum.de/" target="_blank"><img src="static/img/TUM-logo.png" style="height:50px; margin-bottom:10px">
                    <h6> Technical University Munich </h6> </a>
                </div>
                <div class="col-lg-3">
                    <a class="link" href="https://www.uni-saarland.de/" target="_blank"> <img src="static/img/Saarland-Uni-logo.png" style="height:50px;  margin-bottom:10px">
                    <h6> Saarland University </h6> </a>
                </div>
            </div>
        </section>
        `;

        return resultHtml;
    }
}
