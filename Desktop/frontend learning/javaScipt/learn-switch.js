let team = "RCB";

switch (team) {
  case "RCB":
    console.log("way to finals");
    break;
  case "CSK":
    console.log("Eliminated");
    break;
  case "PBKS":
    console.log("lost in end");
    break;
  default:
    console.log("no team");
}

//example-2
let score = 80;
switch (true) {
  case score > 75:
    console.log("distinction");
    break;
  case score > 65 && score < 75:
    console.log("first class");
    break;
  default:
    console.log("did not get result");
}
