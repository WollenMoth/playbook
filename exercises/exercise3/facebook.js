class User {
  constructor(name, friends, email, phone, gender, birthDate) {
    this.name = name;
    this.friends = friends;
    this.email = email;
    this.phone = phone;
    this.gender = gender;
    this.birthDate = birthDate;
  }

  getGeneralInfo() {
    return `Name: ${this.name}\nEmail: ${this.email}\nFriends: ${this.friends}`;
  }
}

const WollenMoth = new User(
  "WollenMoth",
  200,
  "launchx@innovaccion.mx",
  "55-55-55-55-55",
  "male",
  "2000-08-29"
);

console.log("User:\n");
console.log(WollenMoth.getGeneralInfo());

class Post {
  constructor(
    user,
    text,
    privacy,
    background,
    photos,
    tags,
    feeling,
    location
  ) {
    this.user = user;
    this.text = text;
    this.privacy = privacy;
    this.background = background;
    this.photos = photos;
    this.tags = tags;
    this.feeling = feeling;
    this.location = location;
  }

  getGeneralInfo() {
    return `${this.user.name} is feeling ${this.feeling} with ${this.tags.join(
      ", "
    )} in ${this.location}\n${this.text}${this.photos.map(
      (photo) => `\n${photo}`
    )}`;
  }
}

const post = new Post(
  WollenMoth,
  "I am watching the new LaunchX live stream",
  "public",
  "watermelon",
  ["Foto1", "Foto2", "Foto3"],
  ["Carlo"],
  "happy",
  "LaunchX"
);

console.log("\nPost:\n");
console.log(post.getGeneralInfo());

class Biography {
  constructor(
    user,
    work,
    education,
    currentCity,
    hometown,
    relationship,
    joined,
    followers
  ) {
    this.user = user;
    this.work = work;
    this.education = education;
    this.currentCity = currentCity;
    this.hometown = hometown;
    this.relationship = relationship;
    this.joined = joined;
    this.followers = followers;
  }

  getGeneralInfo() {
    return `${this.user.name} is a ${this.work} from ${this.currentCity}`;
  }
}

const biography = new Biography(
  WollenMoth,
  "Software Developer",
  "Computer Science",
  "Mexico City",
  "Guadalajara",
  "...",
  "2011-10-01",
  100
);

console.log("\nBiography:\n");
console.log(biography.getGeneralInfo());
