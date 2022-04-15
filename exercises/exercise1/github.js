const repo = {
  name: "storefront3",
  author: "WollenMoth",
  language: "Python",
  numberOfCommits: 87,
  stars: 99,
  forks: 199,
  issues_open: 9,
  issues_close: 18,
  getTotalIssues() {
    return this.issues_open + this.issues_close;
  },
  getGeneralInfo() {
    return `The ${this.name} repository was created by ${this.author}`;
  },
};

console.log("Repo:\n");
console.log("Nombre del repo:", repo.name);
console.log("Issues totales:", repo.getTotalIssues());
console.log(repo.getGeneralInfo());

const issue = {
  title: "Error en el checkout",
  repositoryNameAssociated: "storefront3",
  status: "open",
  numberOfComments: 3,
  labels: ["bug", "enhancement"],
  author: "WollenMoth",
  dateCreated: "2022-03-14",
  lastUpdated: "2020-04-10",
  getTitleAndAuthor() {
    return `${this.title} by ${this.author}`;
  },
  getGeneralInfo() {
    return `The ${this.title} issue was created by ${this.author}`;
  },
};

console.log("\nIssue:\n");
console.log("Título del Issue:", issue.title);
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());

const pullRequest = {
  title: "Error en el checkout",
  branchName: "main",
  dateCreated: "2022-04-14",
  status: "open",
  repositoryNameAssociated: "storefront3",
  getStatus() {
    return `The ${this.title} pull request is ${this.status}`;
  },
  getTitleAndAuthor() {
    return `${this.title} by ${this.author}`;
  },
};

console.log("\nPull Request:\n");
console.log("Título del Pull Request:", pullRequest.title);
console.log(pullRequest.getStatus());
console.log(pullRequest.getTitleAndAuthor());
