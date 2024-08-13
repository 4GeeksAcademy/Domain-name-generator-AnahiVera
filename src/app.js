/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "his", "my"];
  let adj = ["great", "big", "strong", "little"];
  let noun = ["jogger", "racoon", "guardian", "fiend"];
  let domain = [".com", ".cl", ".net"];

  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < domain.length; d++) {
          let domainGenerator = pronoun[a] + adj[b] + noun[c] + domain[d];

          console.log(domainGenerator);
          //document.querySelector("#generador").innerHTML = domainGenerator;
        }
      }
    }
  }
};
