import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Openings - Amygdala AI");
    }

    async getHtml() {
        return `
            <h2 class="liner">Join Us</h2>
            <div>
                <p style="text-align: justify">
                    We at Amygdala work as voluntary collaborators in different roles and we are open to collaborate with highly motivated and enthusiastic researchers worldwide.
                    For each research idea we work in balanced sub teams consisting of advisors, mentors and associates. Sub teams are formed internally based on individual research interest and area of expertise.
                </p>

                <p style="text-align: justify">
                    <b style="font-size: 1.25rem; color: teal">Advisors</b> are usually experienced eminent researchers with several prestigious publications in top conferences and journals.
                    Their role is to come up with high level research ideas and lead some sub teams who will implement these ideas.
                    Usually, the professors, postdocs, PhD holders or someone pursuing PhD with good track record are well suited for this role. However, that’s not a strict requirement.
                    If you are motivated to be one of our advisors, please <b>fill the Google form</b> at the end of this page.
                </p>

                <p style="text-align: justify">
                    <b style="font-size: 1.25rem; color: teal">Mentors</b> are usually master’s students or bachelor’s students with a few publications and more practical experience with the usual structure of ML / DL code.
                    Knowledge of frameworks like PyTorch, TensorFlow, Keras is a plus. Mentors’ role is to closely guide and help the associates in implementation of the research ideas proposed by advisors.
                    If you want to join us as a mentor, please <b>fill the Google form</b> at the end of this page.
                </p>

                <p style="text-align: justify">
                    <b style="font-size: 1.25rem; color: teal">Associates</b> are the ones who work on the hands-on implementation of the research ideas of the advisors with help of the mentors.
                    Anyone with research high research interest and motivation for academic publication are suitable for this role.
                    Having previous publications is not required, however, good coding skills (preferably in Python or C++) and familiarity with object-oriented programming approach would be optimal.
                    If you want to join us as an associate, please <b>fill the Google form</b> at the end of this page. But please note, one can not get this position directly. First you need to be an apprentice and work for a project with some of our mentors and advisors. After you write and submit a research paper with us, you will be given the associate position.
                </p>
                
                <p style="text-align: justify">
                    <b style="font-size: 1.25rem; color: teal">Intern</b> is the initial step of being an associate. Role wise it is same as associate but it is kind of a temporary position. After you submit a research paper with us you will be upgraded to associate post. However, even after some reasonable amount of time, if your efforts for making progress is not satisfactory as an intern, you may lose the position. 
                    If you want to join us as an associate, please <b>fill the Google form</b> at the end of this page. You will be given intern post initially.
                </p>

                <div style="display: none;" class="alert alert-danger" role="alert">
                    <i class="fa fa-exclamation-circle fa-sm"></i> <b>Note: </b>
                    Thank you so much for your interest in Amygdala AI. But unfortunately we have temporarily paused accepting new application. We are going to reopen this application once again after few weeks. So please keep checking.
                </div>

                <p style="text-align: center; margin-top: 4rem; margin-bottom: 4rem">
                    <a class="link" style="font-size: 1.5rem" href="https://forms.gle/zmw6ZzExX47WwsiD8" target="_blank"><i class="fa fa-file-text-o fa-lg"></i><b> Google Form </b></a>
                </p>

                <div class="alert alert-success" role="alert">
                    <i class="fa fa-exclamation-triangle fa-sm"></i> <b>Disclaimer: </b>
                    Please note as of now Amygdala AI works on voluntary collaboration which means neither we pay, nor we ask for money from our collaborators.
                    However, everyone working on different ideas on different sub teams gets due credit as authorship if that idea yields an academic publication.
                    It is also to clarify that different sub teams work on different research ideas and there is no cross sub team authorship unless there is overlap of their research ideas and they collaborate as two sub teams.
                </div>
            </div>
        `;
    }
}
