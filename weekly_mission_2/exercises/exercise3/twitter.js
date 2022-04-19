class User {
  constructor(
    username,
    name,
    bio,
    location,
    website,
    birthDate,
    joined,
    following,
    followers
  ) {
    this.username = username;
    this.name = name;
    this.bio = bio;
    this.location = location;
    this.website = website;
    this.birthDate = birthDate;
    this.joined = joined;
    this.following = following;
    this.followers = followers;
  }

  getGeneralInfo() {
    return `Username: ${this.username}\nBio: ${this.bio}\nFollowers: ${this.followers}`;
  }
}

const WollenMoth = new User(
  "wollenmoth",
  "WollenMoth",
  "I am a software developer",
  "México",
  "https://github.com/WollenMoth",
  "2000-08-29",
  "2011-10-01",
  97,
  100
);

console.log("User:\n");
console.log(WollenMoth.getGeneralInfo());

class TrendingTopic {
  constructor(name, rank, category, numberOfTweets) {
    this.name = name;
    this.rank = rank;
    this.category = category;
    this.numberOfTweets = numberOfTweets;
  }

  getGeneralInfo() {
    return `${this.rank} - ${this.category} - Trending\n${this.name}\n${this.numberOfTweets} Tweets`;
  }
}

const rihannaTrendingTopic = new TrendingTopic("Rihanna", 1, "Pop", 484000);

console.log("\nTrending Topic:\n");
console.log(rihannaTrendingTopic.getGeneralInfo());

class Hashtag {
  constructor(name, category, numberOfTweets, trending) {
    this.name = name;
    this.category = category;
    this.numberOfTweets = numberOfTweets;
    this.trending = trending;
  }

  getGeneralInfo() {
    return `${this.category} - Trending\n#${this.name}\n${this.numberOfTweets} Tweets`;
  }
}

const selfiesForChan = new Hashtag(
  "selfiesforchan",
  "Only on Twitter",
  42700,
  true
);

console.log("\nHashtag:\n");
console.log(selfiesForChan.getGeneralInfo());
