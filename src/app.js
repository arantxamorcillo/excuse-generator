/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  var randomItem = function(parts) {
    for (let i = 0; i < parts.length; i++) {
      let randomIndex = Math.floor(Math.random() * parts.length);
      return parts[randomIndex];
    }
  };
  const excuse = function(subject, verb, object, time) {
    return (
      randomItem(subject) +
      " " +
      randomItem(verb) +
      " " +
      randomItem(object) +
      " " +
      randomItem(time)
    );
  };
  document.getElementById("excuse").innerHTML = excuse(who, action, what, when);
};
