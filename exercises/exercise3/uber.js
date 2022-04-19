const profile = {
  name: "Alex",
  number: "+52 555 555 5555",
  location: "México",
  language: "Spanish",
  email: "launchx@innovaccion.mx",
  getGeneralInfo() {
    return `Name: ${this.name}\nEmail: ${this.email}\nLocation: ${this.location}\nLanguage: ${this.language}`;
  },
};

console.log("Profile:\n");
console.log(profile.getGeneralInfo());

const travel = {
  pickupLocation: "Puebla",
  destination: "Mexico City",
  departure: "now",
  plan: "Uber Planet",
  paymentMethod: "Cash",
  getGeneralInfo() {
    return `Pickup: ${this.pickupLocation}\nDestination: ${this.destination}\nDeparture: ${this.departure}\nPlan: ${this.plan}\nPayment Method: ${this.paymentMethod}`;
  },
};

console.log("\nTravel:\n");
console.log(travel.getGeneralInfo());
