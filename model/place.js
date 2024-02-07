class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; //{lat: 0.14141, lng: 127.234}
    this.id = new Date().toString() + Math.random().toString();
  }
}
