const user = {
  name: "WollenMoth",
  friends: 200,
  email: "launchx@innovaccion.mx",
  phone: "55-55-55-55-55",
  gender: "male",
  birthDate: "2000-08-29",
  getGeneralInfo() {
    return `Name: ${this.name}\nEmail: ${this.email}\nFriends: ${this.friends}`;
  },
};

console.log("User:\n");
console.log(user.getGeneralInfo());

const post = {
  user: user,
  text: "I am watching the new LaunchX live stream",
  privacy: "public",
  background: "watermelon",
  photos: ["Foto1", "Foto2", "Foto3"],
  tags: ["Carlo"],
  feeling: "happy",
  location: "LaunchX",
  getGeneralInfo() {
    return `${this.user.name} is feeling ${this.feeling} with ${this.tags.join(
      ", "
    )} in ${this.location}\n${this.text}${this.photos.map(
      (photo) => `\n${photo}`
    )}`;
  },
};

console.log("\nPost:\n");
console.log(post.getGeneralInfo());

const biography = {
  user: user,
  work: "Software Developer",
  education: "Computer Science",
  currentCity: "Mexico City",
  hometown: "Guadalajara",
  relationship: "...",
  joined: "2011-10-01",
  followers: 100,
  getGeneralInfo() {
    return `${this.user.name} is a ${this.work} from ${this.currentCity}`;
  },
};

console.log("\nBiography:\n");
console.log(biography.getGeneralInfo());
