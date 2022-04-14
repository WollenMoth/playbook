// Ejemplo 5: Atributos con valores por default
class PullRequest {
  constructor(repo, title, lines_changed) {
    this.repo = repo;
    this.title = title;
    this.lines_changed = lines_changed;
    this.status = "OPEN";
    this.dateCreated = new Date(); // esto guardará la fecha actual en que se instancia el objeto
  }

  getInfo = () => {
    return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`;
  };
}

console.log("Ejemplo 5: Atributos con valores por default");
const myPR1 = new PullRequest("storefront3", "Mi Primer PR", 55);
console.log(myPR1.getInfo());

// Puedes instanciar n cantidad de objetos de la misma clase
const myPR2 = new PullRequest("storefront3", "Mi segundo PR", 33);
console.log(myPR2.getInfo());
