import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Contact - Amygdala AI");
    }

    async getHtml() {
        return `
            <h2 class="liner">Any questions?</h2>
            <p>
            Please write to us your queries or suggestions to the following email ID. Ideally, you should be getting a response within two days, if not, please feel free to write a short reminder.
            </p>
            <p>
                <i class="fa fa-fw fa-envelope-o"></i>
                <a href="mailto:amygdalaai@gmail.com" class="link">
                    amygdalaai@gmail.com
                </a>
            </p>
        `;

        /* For adding discord, cut paste this above and replace the server invite link
            <p>
                <i class="fa-brands fa-discord"></i>
                <a href="Server link here" class="link">
                    Server name here
                </a>
            </p>
        */
    }
}
