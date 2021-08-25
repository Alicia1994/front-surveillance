import { Categorie } from "./categorie";

export class Post {
  
    public id?: number;
    public content?: string;
    public title?: string;
    public username?: string;
    public createdOn?: string;
    public categorie?: Categorie

    constructor(title, content, username, categorie){
      this.title = title;
      this.content = content;
     // this.username = username;
      this.categorie = categorie;
    }

}