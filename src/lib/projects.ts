export default class Project {
    title: string;
    proj_status: string;
    desc: string;
    colab: string;
    link: string;

    constructor(title: string, proj_status: string, desc: string, link: string, colab: string) {
        this.title = title;
        this.proj_status = proj_status;
        this.desc = desc;
        this.link = link;
        this.colab = colab;      
    }
    
}