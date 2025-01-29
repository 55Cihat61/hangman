let wort = "Hallo".toLowerCase(); // Das zu erratende Wort
let vWort = "_".repeat(wort.length).split(""); // Sichtbares Wort als Array
let versuch = 7; // Anzahl der Versuche
let guessedLetters = []; // Array zur Speicherung der geratenen Buchstaben

// Funktion: Buchstabe ist im Wort
function bImW(buchstabe) {
  console.log(`Der Buchstabe "${buchstabe}" ist im Wort!`);
  for (let i = 0; i < wort.length; i++) {
      if (wort[i] === buchstabe) {
          vWort[i] = buchstabe; // Unterstrich durch den Buchstaben ersetzen
      }
  }
}

// Funktion: Buchstabe ist nicht im Wort
function bNichtImW(buchstabe) {
  console.log(`Der Buchstabe "${buchstabe}" ist nicht im Wort.`);
  versuch--; // Reduziere die Anzahl der Versuche
}

while (versuch > 0) {
    let buchstabe = prompt("Gib deinen Buchstaben hier ein:").toLowerCase();

    // Überprüfung auf doppelte Eingabe
    if (guessedLetters.includes(buchstabe)) {
        console.log("Diesen Buchstaben hast du bereits geraten!");
        continue; // Überspringe den Rest der Schleife und fordere eine neue Eingabe an
    }

    guessedLetters.push(buchstabe); // Füge den geratenen Buchstaben zum Array hinzu

    // Ist der Buchstabe im Wort?
    if (wort.includes(buchstabe)) {
        bImW(buchstabe); // Buchstabe ist im Wort
    } else {
        bNichtImW(buchstabe); // Buchstabe ist nicht im Wort
    }

    // Zeige den Fortschritt
    console.log(`Aktuelles Wort: ${vWort.join(" ")}`);
    console.log(`Verbleibende Versuche: ${versuch}`);

    // Überprüfen, ob das Wort erraten wurde
    if (vWort.join("") === wort) {
        console.log("Du hast gewonnen!");
        break;
    }
}

if (versuch === 0) {
    console.log(`Du hast verloren. Das Wort war: ${wort}`);
}
