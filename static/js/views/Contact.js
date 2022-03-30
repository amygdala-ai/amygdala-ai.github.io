import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Contact");
    }

    async getHtml() {
        return `
            <h2 class="liner">Any questions?</h2>
            <p>
            Please write to us your queries or suggestions to the following email id. Ideally, you should be getting a response within two days, if not, please feel free to write a short reminder.
            </p>
            <p style="font-weight:bold">Email Id: amygdalaai@gmail.com </p>
        `;
    }
}
