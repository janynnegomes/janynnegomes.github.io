import { ActivatedRoute } from "@angular/router";

export class PageInfo{
    public title:string = '';
    public excerpt:string = '';
    public icon:string = '';
    public slug:string = '';

    constructor(route:ActivatedRoute){
        const {title, subtitle, icon} = route.snapshot.data;
        this.title  = title;
        this.excerpt = subtitle;
        this.icon = icon; 
    }
}