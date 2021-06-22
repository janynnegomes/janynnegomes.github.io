export interface Portfolio{
    title:string;
    slug:string;
    external_url:string;
    icon:string;
    cover:string;
    excerpt:string;
    period:string;
    details:string;
    videoId:string;
    skills:Array<{name:string}>;
    tools:Array<{name:string,reason:string}>;
    categories:Array<{name:string,icon:string}>;
    features:Array<{name:string}>;
    screenshots:Array<{url:string,name:string,subtitle:string}>;
    content:string;
}