import { environment, environmentApi } from "src/environments/environment";
import { Categorie } from "./categorie";

export class Post {
  
    public id?: number;
    public content?: string;
    public title?: string;
    public username?: string;
    public createdOn?: string;
    public updatedOn?: string;
    public categorie?: Categorie;
    public image?: string;

    constructor(title, content, username, categorie){
      this.title = title;
      this.content = content;
     // this.username = username;
      this.categorie = categorie;
    }
   
}