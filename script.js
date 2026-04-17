// ---------- START BUTTON (for index.html) ----------
let startBtn = document.getElementById("startBtn");

if (startBtn) {
  startBtn.addEventListener("click", () => {
    window.location.href = "quiz.html";
  });
}

// ---------- SUBMIT BUTTON (for quiz.html) ----------
let submitBtn = document.getElementById("submitBtn");

if (submitBtn) {
  submitBtn.addEventListener("click", () => {
    let head = 0;
    let pet = 0;
    let loader = 0;
    let back = 0;
    let hum = 0;
    let pcb = 0;
    let commerce = 0;
    let french = 0;
    let me = 0;

   function getCheckedValue(name) {
  let selected = document.querySelector(`input[name="${name}"]:checked`);
  return selected ? selected.value : null;
}

let q1 = getCheckedValue("q1");
let q2 = getCheckedValue("q2");
let q3 = getCheckedValue("q3");
let q4 = getCheckedValue("q4");
let q5 = getCheckedValue("q5");
let q6 = getCheckedValue("q6");
let q7 = document.getElementById("teacherCare") ? document.getElementById("teacherCare").value : "";
let q8 = getCheckedValue("q8");
let q9 = getCheckedValue("q9");
let q10 = getCheckedValue("q10");

let q11 = "";
let q11Input = document.getElementById("duringClass");
if (q11Input) {
  q11 = q11Input.value.trim().toLowerCase();
}

let q12 = getCheckedValue("q12");
let q13 = getCheckedValue("q13");
let q14 = getCheckedValue("q14");
let q15 = getCheckedValue("q15");
let q16 = getCheckedValue("q16");
let q17 = getCheckedValue("q17");

let q18 = "";
let q18Input = document.getElementById("favAnimal");
if (q18Input) {
  q18 = q18Input.value.trim().toLowerCase();
}

let missing = [];

if (!q1) missing.push("Q1");
if (!q2) missing.push("Q2");
if (!q3) missing.push("Q3");
if (!q4) missing.push("Q4");
if (!q5) missing.push("Q5");
if (!q6) missing.push("Q6");
if (!q7) missing.push("Q7");
if (!q8) missing.push("Q8");
if (!q9) missing.push("Q9");
if (!q10) missing.push("Q10");
if (q11 === "") missing.push("Q11");
if (!q12) missing.push("Q12");
if (!q13) missing.push("Q13");
if (!q14) missing.push("Q14");
if (!q15) missing.push("Q15");
if (!q16) missing.push("Q16");
if (!q17) missing.push("Q17");
if (q18 === "") missing.push("Q18");

if (missing.length > 0) {
  alert("Please answer: " + missing.join(", "));
  return;
}
    // Q1
    if (q1 === "homework") {
      head += 2;
      pet += 1;
    } else if (q1 === "walk") {
      hum += 1;
      loader += 2;
    } else if (q1 === "friends") {
      hum += 2;
      pcb += 1;
    } else if (q1 === "nap") {
      back += 1;
      pcb += 2;
    } else if (q1 === "noclass") {
      back += 3;
    }

    // Q2
    if (q2 === "math") {
      head += 2;
      pcb += 1;
    } else if (q2 === "science") {
      pcb += 3;
      pet += 1;
    } else if (q2 === "commerce") {
      commerce += 3;
      loader += 2;
    } else if (q2 === "humanities") {
      hum += 3;
      me += 1;
    } else if (q2 === "idgaf") {
      back += 3;
    }

    // Q3
    if (q3 === "math") {
      head += 3;
      pcb += 1;
    } else if (q3 === "science") {
      pcb += 2;
      loader += 1;
    } else if (q3 === "commerce") {
      commerce += 3;
      loader += 1;
    } else if (q3 === "humanities") {
      hum += 3;
      me += 1;
    } else if (q3 === "idgaf") {
      back += 2;
      loader += 1;
    }

    // Q4
    if (q4 === "comeback") {
      head += 2;
      pet += 1;
    } else if (q4 === "panic") {
      pcb += 2;
      me += 1;
    } else if (q4 === "system") {
      hum += 2;
      french += 1;
    } else if (q4 === "recover") {
      commerce += 2;
      loader += 1;
    } else if (q4 === "idgaf") {
      back += 2;
      me += 1;
    }

    // Q5
    if (q5 === "raisehand") {
      head += 2;
      pet += 1;
    } else if (q5 === "tootired") {
      pcb += 2;
      back += 1;
      me += 2;
    } else if (q5 === "daydream") {
      back += 2;
      hum += 1;
      loader += 1;
    } else if (q5 === "yap") {
      french += 1;
      hum += 2;
      loader += 1;
    } else if (q5 === "avoideyecontact") {
      loader += 1;
      back += 2;
    }

    // Q6
    if (q6 === "best") {
      head += 2;
      loader += 1;
    } else if (q6 === "notfailing") {
      pet += 1;
      pcb += 2;
    } else if (q6 === "parents") {
      pcb += 3;
      me += 1;
    } else if (q6 === "provewrong") {
      hum += 2;
      me += 1;
    } else if (q6 === "swag") {
      back += 1;
      loader += 1;
    }

    // Q7
    q7 = Number(q7);

    if (q7 >= 80) {
      pet += 3;
      head += 2;
    } else if (q7 >= 60) {
      pet += 2;
      pcb += 1;
    } else if (q7 >= 40) {
      hum += 1;
      commerce += 1;
      me += 1;
    } else if (q7 >= 20) {
      back += 2;
      loader += 1;
    } else {
      back += 2;
      me += 2;
    }

    // Q8
    if (q8 === "apologize") {
      pet += 2;
      head += 1;
    } else if (q8 === "slipin") {
      back += 2;
      hum += 1;
      loader += 1;
    } else if (q8 === "awkward") {
      me += 1;
      pcb += 2;
    } else if (q8 === "joke") {
      loader += 2;
    } else if (q8 === "dontgo") {
      back += 2;
      hum += 1;
      loader += 1;
    }

    // Q9
    if (q9 === "revise") {
      hum += 2;
      head += 2;
    } else if (q9 === "panichelp") {
      pcb += 2;
      pet += 1;
    } else if (q9 === "moveon") {
      loader += 2;
      back += 1;
    } else if (q9 === "distract") {
      french += 1;
      me += 2;
    } else if (q9 === "iampanic") {
      pcb += 2;
      me += 1;
    }

    // Q10
    if (q10 === "focus") {
      head += 2;
      pet += 1;
    } else if (q10 === "losetrack") {
      pcb += 1;
      me += 2;
    } else if (q10 === "littlebit") {
      commerce += 2;
      loader += 1;
    } else if (q10 === "conversation") {
      hum += 1;
      french += 1;
      me += 1;
    } else if (q10 === "nostudying") {
      back += 2;
      loader += 1;
    }

    // Q11
    if (
      q11.includes("studying") ||
      q11.includes("grades") ||
      q11.includes("exam") ||
      q11.includes("homework")
    ) {
      head += 2;
      pet += 1;
    }  else if (
      q11.includes("talk about myself")
    ) {
      head+=20;
    }
    
    else if (
      q11.includes("sleep") ||
      q11.includes("food") ||
      q11.includes("lunch") ||
      q11.includes("home")
    ) {
      back += 2;
      me += 1;
    } else if (
      q11.includes("panic") ||
      q11.includes("stress") ||
      q11.includes("failing") ||
      q11.includes("cry")
    ) {
      pcb += 2;
      hum+= 1;
      me += 1;
    } else if (
      q11.includes("life") ||
      q11.includes("meaning") ||
      q11.includes("overthink") ||
      q11.includes("random")
    ) {
      hum += 3;
    } else if (
      q11.includes("friends") ||
      q11.includes("fun") ||
      q11.includes("nothing")
    ) {
      loader += 1;
      back += 1;
      me += 1;
    }  else if (q11.includes("global warming")) {
      french += 20;
    }
    else {
      me += 2;
    }

    // Q12
    if (q12 === "packedlunch") {
      pet += 2;
      me += 1;
    } else if (q12 === "stealfood") {
      loader += 2;
      french += 1;
    } else if (q12 === "notime") {
      head += 2;
      pcb += 1;
    } else if (q12 === "cafeteria") {
      commerce += 1;
      back += 1;
      me += 1;
    } else if (q12 === "cafefriends") {
      loader += 2;
      back += 1;
    }

    // Q13
    if (q13 === "correctanswer") {
      head += 2;
      pcb += 1;
    } else if (q13 === "remember") {
      pcb += 2;
      pet += 1;
    } else if (q13 === "reallife") {
      commerce += 2;
      loader += 1;
    } else if (q13 === "perspective") {
      hum += 2;
      french += 1;
    } else if (q13 === "whyamihere") {
      back += 2;
      me += 1;
    }

    // Q14
    if (q14 === "humanities") {
      hum += 3;
      me += 1;
    } else if (q14 === "sciences") {
      pcb += 2;
      head += 2;
    } else if (q14 === "commerce") {
      commerce += 3;
      loader += 1;
    } else if (q14 === "dontcare") {
      back += 2;
      me += 2;
    }

    // Q15
    if (q15 === "dontcare") {
      back += 2;
      me += 1;
    } else if (q15 === "solution") {
      pet += 2;
      head += 1;
    } else if (q15 === "politehate") {
      pet += 1;
      french += 1;
      pcb += 1;
    } else if (q15 === "jokeexcuse") {
      french += 2;
      loader += 1;
    } else if (q15 === "complain") {
      hum += 1;
      me += 1;
      french += 1;
    }

    // Q16
    if (q16 === "leading") {
      head += 2;
      pet += 1;
    } else if (q16 === "passout") {
      pcb += 2;
      me += 1;
    } else if (q16 === "yapping") {
      french += 2;
      hum += 1;
    } else if (q16 === "organizing") {
      pet += 2;
      head += 1;
    } else if (q16 === "skipped") {
      loader += 2;
      back += 1;
    }

    // Q17
    if (q17 === "art") {
      hum += 2;
      me += 1;
    } else if (q17 === "sports") {
      head += 2;
      back += 1;
    } else if (q17 === "dance") {
      french += 1;
      me += 2;
    } else if (q17 === "language") {
      french += 2;
      pet += 1;
    } else if (q17 === "friends") {
      loader += 2;
      back += 1;
    }

    // Q18
    if (
      q18.includes("cat") ||
      q18.includes("crow") ||
      q18.includes("fox")
    ) {
      french += 2;
      me += 1;
    } else if (
      q18.includes("dog") ||
      q18.includes("horse") ||
      q18.includes("elephant")
    ) {
      pet += 1;
      head += 1;
      me += 1;
    } else if (
      q18.includes("owl") ||
      q18.includes("octopus") ||
      q18.includes("wolf")
    ) {
      hum += 2;
      me += 1;
    } else if (
      q18.includes("snake") ||
      q18.includes("shark") ||
      q18.includes("rat")
    ) {
      commerce += 1;
      french += 1;
      loader += 1;
    } else if (q18.includes("jellyfish")) {
      me += 100;
    } else {
      me += 1;
    }

    //---------saving and calculating scores and math and stuff :(

    let scores = {
      "The Headboy / Headgirl / Headperson": head,
      "The Teacher’s Pet": pet,
      "The Free Loader": loader,
      "The Back Bencher": back,
      "The Underestimated Humanities Student": hum,
      "The Burnt Out PCB Student": pcb,
      "Commerce Accounts Economics": commerce,
      "You’re my scary French Teacher": french,
      "You’re literally me (thats weird what the heck)" : me
    };

    //---main logic---
    let result = "";
    let maxScore = -1;

    for (let category in scores) {
      if (scores[category] > maxScore) {
        maxScore = scores[category];
        result = category;
      }
    }


    //---descriptions for each category---

    let descriptions = {
  "The Headboy / Headgirl / Headperson":
    "You're the Teacher’s favorite! Academically intense, competitive, confident.. Slightly annoying but it works. You probably run a deeply unnecessary club for your portfolio.",

  "The Teacher’s Pet":
    "Helpful, obedient, organized. You run errands for teachers who will forget you next year… but you manage your time well.",

  "The Free Loader":
    "Coasts through group work and somehow survives. I would despise and want to be you at the same time.",

  "The Back Bencher":
    "Detached, chill, funny, low-effort. When’s the last time you actually paid attention in class?",

  "The Underestimated Humanities Student":
    "Creative, observant, and smarter than people think. No one takes your subjects seriously… YAY!!",

  "The Burnt Out PCB Student":
    "Overworked, sleep-deprived, and stuck in the physics-chem-bio grind. Half ambition, half pressure.",

  "Commerce Accounts Economics":
    "#stocks #startup #finance #accountant energy",

  "You’re my scary French Teacher":
    "You have 20 ear piercings and WILL publicly humiliate me. I fear you.",

  "You’re literally me (thats weird what the heck)":
    "Damn… we would either be friends or hate each other :3"
};

//---images----

let images = {
  "The Headboy / Headgirl / Headperson": "images/headboy.png",
  "The Teacher’s Pet": "images/teacherpet.png",
  "The Free Loader": "images/freeloader.png",
  "The Back Bencher": "images/backbencher.png",
  "The Underestimated Humanities Student": "images/humanities.png",
  "The Burnt Out PCB Student": "images/pcb.png",
  "Commerce Accounts Economics": "images/commerce.png",
  "You’re my scary French Teacher": "images/french.png",
  "You’re literally me (thats weird what the heck)": "images/me-image.png"
};
    

 localStorage.setItem("quizResult", result);
localStorage.setItem("quizDesc", descriptions[result]);
localStorage.setItem("quizImg", images[result]);
    window.location.href = "submit.html";
  });
}