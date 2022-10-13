export class Post {
  id = 0;
  title = "";
  author = "";
  description = "";
  episodes = [];

  constructor(id, title, author, description, episodes) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.description = description;
    this.episodes = episodes;
  }
}
