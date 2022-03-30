import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Amygdala AI");
    }

    async getHtml() {
        return `
        <h2 class="liner"> Latest in AI </h2>
        <div id="news-carousel" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="8000">
                    <a href="https://ai.googleblog.com/2022/03/detecting-signs-of-disease-from.html" target="_blank">
                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuWJqISEwcCiISX2YX7tBiVHMyJlihMsAf486Jl8QXS6Sag7Ma5zlQ6i0Js9b2nf6H0eY9_2pll8c3nuIt2cmRjPf8h-Z_Vx4wEj3TaiKWu8I8703xFbz4X5tNfRoZoANrTbSROWCIX-qRsqCqa-YyhgYECOpUl5Ew8BYXp-XtfyM3Kb2hhINxuvMmSw/w640-h342/image2.gif"
                            alt="Detecting Signs of Disease from External Images of the Eye">
                        <div class="carousel-caption">
                            <h5>
                                Detecting Signs of Disease from External Images of the Eye
                            </h5>
                            
                        </div>
                    </a>
                </div>
                <div class="carousel-item" data-bs-interval="8000">
                    <a href="https://www.deepmind.com/blog/predicting-the-past-with-ithaca" target="_blank">
                        <img src="https://assets-global.website-files.com/621e749a546b7592125f38ed/6231e47ba59f4a050e873f3a_Fig%201animated.gif"
                            alt="Predicting the past with Ithaca">
                        <div class="carousel-caption">
                            <h5>
                                Predicting the past with Ithaca
                            </h5>
                        </div>
                    </a>
                </div>
                <div class="carousel-item" data-bs-interval="8000">
                <a href="https://ai.facebook.com/blog/teaching-ai-to-translate-100s-of-spoken-and-written-languages-in-real-time/" target="_blank">
                    <img src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.2365-6/271312373_486465006245666_1266192446695989160_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=maiL-XbU8e4AX_W-KET&_nc_ht=scontent.fccu3-1.fna&oh=00_AT-759zoKkRHGcZKDL-f4JLgo1HGeuhOQbXb0LXTPi4VEQ&oe=6248C360"
                        alt="Teaching AI to translate 100s of spoken and written languages in real time">
                    <div class="carousel-caption d-md-block">
                        <h5>
                            Teaching AI to translate 100s of spoken and written languages in real time
                        </h5>
                    </div>
                </a>
            </div>
            </div>
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#news-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#news-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#news-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
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
        <div class=WordSection1>
            <p class=MsoNormal style='margin-bottom:10.0pt;text-align:justify;line-height:
                115%;mso-layout-grid-align:none;text-autospace:none'>
                <span lang=EN
                    style='mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:
                    Calibri;mso-ansi-language:EN'>Amygdala AI is an open non-profit platform for
                cutting edge AI research with a pragmatic focus on addressing real-life use
                cases with intelligent algorithms for a better tomorrow. </span>
                <span
                    lang=EN-GB style='mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri;
                    mso-bidi-font-family:Calibri;mso-ansi-language:EN-GB'>
                    Our goal is to co-operate,
                    complement and collaborate globally to push the current state of the arts in
                    varied subdomains of artificial intelligence and machine learning research with sustainable development goals. 
                    <o:p></o:p>
                </span>
            </p>
            <p class=MsoNormal align=center style='margin-bottom:10.0pt;text-align:center;
                line-height:115%;mso-layout-grid-align:none;text-autospace:none'>
                <b>
                    <span
                        lang=EN style='mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri;
                        mso-bidi-font-family:Calibri;mso-ansi-language:EN'>
                        &quot;No one can whistle a
                        symphony. It takes a whole orchestra to play it.&quot; 
                        <o:p></o:p>
                    </span>
                </b>
            </p>
            <p class=MsoNormal align=right style='margin-bottom:10.0pt;text-align:right;
                line-height:115%;mso-layout-grid-align:none;text-autospace:none'>
                <b>
                    <span
                        lang=EN style='mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri;
                        mso-bidi-font-family:Calibri;mso-ansi-language:EN'>
                        – H.E. <span class=SpellE>Luccock</span>
                        <o:p></o:p>
                    </span>
                </b>
            </p>
            <p class=MsoNormal style='margin-bottom:10.0pt;text-align:justify;line-height:
                115%;mso-layout-grid-align:none;text-autospace:none'>
                <span lang=EN
                    style='mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:
                    Calibri;mso-ansi-language:EN'>
                    Currently, we have voluntary collaborators from
                    Technical University of Munich, Germany and KIIT University, India and we are
                    growing quite fast to include collaborators from several other eminent research
                    institutes around the world. 
                    <o:p></o:p>
                </span>
            </p>
            <p class=MsoNormal align=center style='margin-bottom:10.0pt;text-align:center;
                line-height:115%;mso-layout-grid-align:none;text-autospace:none'>
                <b>
                    <span
                        lang=EN style='mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri;
                        mso-bidi-font-family:Calibri;mso-ansi-language:EN'>
                        &quot;Many ideas grow better
                        when transplanted into another mind than the one where they sprang up.&quot; 
                        <o:p></o:p>
                    </span>
                </b>
            </p>
            <p class=MsoNormal align=right style='margin-bottom:10.0pt;text-align:right;
                line-height:115%;mso-layout-grid-align:none;text-autospace:none'>
                <b>
                    <span
                        lang=EN style='mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri;
                        mso-bidi-font-family:Calibri;mso-ansi-language:EN'>
                        – Oliver Wendell Holmes
                        <o:p></o:p>
                    </span>
                </b>
            </p>
            <p class=MsoNormal style='margin-bottom:10.0pt;text-align:justify;line-height:
                115%;mso-layout-grid-align:none;text-autospace:none'>
                <span lang=EN
                    style='mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:
                    Calibri;mso-ansi-language:EN'>
                    At Amygdala we work as voluntary research
                    enthusiasts in multiple parallel ideas divided in smaller sub teams of our
                    research associates, headed by a research advisor, and closely guided by our
                    mentors. The sub teams are formed internally based on individual research
                    interest and area of expertise. So, if you are an AI aficionado, ML expert or
                    just a research enthusiast with an overlapping subdomain, feel free join us to strengthen
                    our research community even more. 
                    <o:p></o:p>
                </span>
            </p>
            <p class=MsoNormal align=center style='margin-bottom:10.0pt;text-align:center;
                line-height:115%;mso-layout-grid-align:none;text-autospace:none'>
                <b>
                    <span
                        lang=EN style='mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri;
                        mso-bidi-font-family:Calibri;mso-ansi-language:EN'>
                        &quot;Coming together is a
                        beginning, staying together is progress, and working together is success.&quot;
                        <o:p></o:p>
                    </span>
                </b>
            </p>
            <p class=MsoNormal align=right style='margin-bottom:10.0pt;text-align:right;
                line-height:115%;mso-layout-grid-align:none;text-autospace:none'>
                <b>
                    <span
                        lang=EN style='mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri;
                        mso-bidi-font-family:Calibri;mso-ansi-language:EN'>
                        – Henry Ford 
                        <o:p></o:p>
                    </span>
                </b>
            </p>
            <p class=MsoNormal>
                <span lang=EN style='mso-ansi-language:EN'>
                    <o:p>&nbsp;</o:p>
                </span>
            </p>
        </div>

        <h2 class="liner"> Research Areas </h2>
        <div style="display: inline-block; padding-bottom: 2rem;">
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
        </div>

        <h2 class="liner"> Collaborators </h2>
        <div class="container-fluid" style="width: auto !important; margin: 2rem 1rem 1rem 1rem;">
            <div class="row text-center" style="justify-content: space-between;">
                <div class="col-lg-3">
                    <a class="link" href="https://kiit.ac.in/" target="_blank"> <img src="static/img/KIIT-logo.png" style="height:50px;  margin-bottom:10px">
                    <h6> Kalinga Institute of Industrial Technology </h6> </a>
                </div>
                <div class="col-lg-3">
                    <a class="link" href="https://www.cineconf.org/" target="_blank"> <img src="static/img/CINE2020-logo.webp" style="height:50px;  margin-bottom:10px">
                    <h6> International Conference on Computational Intelligence and Networks </h6> </a>
                </div>
                <div class="col-lg-3">
                    <a class="link" href="https://www.tum.de/" target="_blank"><img src="static/img/TUM-logo.png" style="height:50px; margin-bottom:10px">
                    <h6> Technical University Munich </h6> </a>
                </div>
            </div>
        </div>
        `;
    }
}
