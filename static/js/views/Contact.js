import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Amygdala AI: Contact");
    }

    async getHtml() {
        return `
            <h2 class="liner">Any questions?</h2>
            <p>
            Please write to us your queries or suggestions to the following email ID. Ideally, you should be getting a response within two days, if not, please feel free to write a short reminder.
            </p>
            <p>
                Reach out 
                <span class="fa fa-fw fa-profile fa-at"></span>:
                <a href="mailto:amygdalaai@gmail.com" class="link">amygdalaai@gmail.com</a>
            </p>
        `;
    }
}
