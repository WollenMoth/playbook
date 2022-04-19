const user = {
  username: "wollenmoth",
  name: "WollenMoth",
  bio: "I am a software developer",
  location: "México",
  website: "https://github.com/WollenMoth",
  birthDate: "2000-08-29",
  joined: "2011-10-01",
  following: 97,
  followers: 100,
  getGeneralInfo() {
    return `Username: ${this.username}\nBio: ${this.bio}\nFollowers: ${this.followers}`;
  },
};

console.log("User:\n");
console.log(user.getGeneralInfo());

const trendingTopic = {
  name: "Rihanna",
  rank: 1,
  category: "Pop",
  numberOfTweets: 484000,
  getGeneralInfo() {
    return `${this.rank} - ${this.category} - Trending\n${this.name}\n${this.numberOfTweets} Tweets`;
  },
};

console.log("\nTrending Topic:\n");
console.log(trendingTopic.getGeneralInfo());

const hashtag = {
  name: "selfiesforchan",
  category: "Only on Twitter",
  numberOfTweets: 42700,
  trending: true,
  getGeneralInfo() {
    return `${this.category} - Trending\n#${this.name}\n${this.numberOfTweets} Tweets`;
  },
};

console.log("\nHashtag:\n");
console.log(hashtag.getGeneralInfo());
