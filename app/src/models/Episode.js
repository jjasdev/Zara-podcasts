export class Episode {
  id = 0;
  title = "";
  publicationDate = new Date();
  duration = 0;
  podcastId = "";

  constructor(id, title, publicationDate, duration, podcastId) {
    this.id = id;
    this.title = title;
    this.publicationDate = publicationDate;
    this.duration = duration;
    this.podcastId = podcastId;
  }
}
