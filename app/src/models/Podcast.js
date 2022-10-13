export class Podcast {
  id = 0;
  title = "";
  author = "";
  image = "";
  description = "";

  constructor(id, title, author, image, description) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.image = image;
    this.description = description;
  }
}
