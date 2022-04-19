class Repo {
  constructor(
    name,
    author,
    language,
    nuberOfCommits,
    stars,
    forks,
    issues_open,
    issues_close
  ) {
    this.name = name;
    this.author = author;
    this.language = language;
    this.nuberOfCommits = nuberOfCommits;
    this.stars = stars;
    this.forks = forks;
    this.issues_open = issues_open;
    this.issues_close = issues_close;
  }

  getTotalIssues() {
    return this.issues_open + this.issues_close;
  }

  getGeneralInfo() {
    return `The ${this.name} repository was created by ${this.author}`;
  }
}

const storefront3 = new Repo(
  "storefront3",
  "WollenMoth",
  "Python",
  87,
  99,
  199,
  9,
  18
);

console.log("Repo:\n");
console.log("Nombre del repo:", storefront3.name);
console.log("Issues totales:", storefront3.getTotalIssues());
console.log(storefront3.getGeneralInfo());

class Issue {
  constructor(
    title,
    repositoryNameAssociated,
    status,
    numberOfComments,
    labels,
    author,
    dateCreated,
    lastUpdated
  ) {
    this.title = title;
    this.repositoryNameAssociated = repositoryNameAssociated;
    this.status = status;
    this.numberOfComments = numberOfComments;
    this.labels = labels;
    this.author = author;
    this.dateCreated = dateCreated;
    this.lastUpdated = lastUpdated;
  }

  getTitleAndAuthor() {
    return `${this.title} by ${this.author}`;
  }

  getGeneralInfo() {
    return `The ${this.title} issue was created by ${this.author}`;
  }
}

const checkoutIssue = new Issue(
  "Error en el checkout",
  "storefront3",
  "open",
  3,
  ["bug", "enhancement"],
  "WollenMoth",
  "2022-03-14",
  "2020-04-10"
);

console.log("\nIssue:\n");
console.log("Título del Issue:", checkoutIssue.title);
console.log(checkoutIssue.getTitleAndAuthor());
console.log(checkoutIssue.getGeneralInfo());

class PullRequest {
  constructor(
    title,
    branchName,
    dateCreated,
    status,
    repositoryNameAssociated,
    author
  ) {
    this.title = title;
    this.branchName = branchName;
    this.dateCreated = dateCreated;
    this.status = status;
    this.repositoryNameAssociated = repositoryNameAssociated;
    this.author = author;
  }

  getStatus() {
    return `The ${this.title} pull request is ${this.status}`;
  }

  getTitleAndAuthor() {
    return `${this.title} by ${this.author}`;
  }
}

const checkoutPullRequest = new PullRequest(
  "Error en el checkout",
  "main",
  "2022-04-14",
  "open",
  "storefront3",
  "WollenMoth"
);

console.log("\nPull Request:\n");
console.log("Título del Pull Request:", checkoutPullRequest.title);
console.log(checkoutPullRequest.getStatus());
console.log(checkoutPullRequest.getTitleAndAuthor());
