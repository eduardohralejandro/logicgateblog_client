import { ProgrammingLanguage, TechTag } from "../enums/enums";

interface Article {
  articleId: number;
  title: string;
  techTag: TechTag;
  photo: string;
  programmingLanguage: ProgrammingLanguage;
  dateCreated: Date;
  dateUpdated: Date;
}

export default Article;