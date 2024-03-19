import { ProgrammingLanguage, TechTag } from "../enums/enums";

interface Article {
  title: string;
  body: string;
  techTag: TechTag;
  photo: string;
  programmingLanguage?: ProgrammingLanguage;
  dateCreated?: Date;
  dateUpdated?: Date;
}

export default Article;
