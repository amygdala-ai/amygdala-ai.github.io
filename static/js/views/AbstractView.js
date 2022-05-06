export default class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }

    setDesc(desc) {
        document.querySelector('meta[name="description"]').setAttribute("content", desc);
    }

    async getHtml() {
        return "";
    }
}