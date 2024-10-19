const vragenEnAntwoorden = [
    {vraag: "Wat is de sneltoets voor knippen?", antwoord: "CTRL + X"} ,
    {vraag: "Wat is de sneltoets voor plakken?", antwoord: "CTRL + V"} ,
    {vraag: "Wat is de sneltoets voor kopiëren?", antwoord: "CTRL + C"} ,
    {vraag: "Wat is de sneltoets voor vet maken?", antwoord: "CTRL + B"} ,
    {vraag: "Wat is de sneltoets voor vergrendelen?", antwoord: "WNDW + L"} ,
    {vraag: "Wat is de sneltoets voor inzoomen?", antwoord: "WNDW + +"} ,
    {vraag: "Wat is de sneltoets voor uitzoomen?", antwoord: "WNDW + -"} ,
    {vraag: "Wat is de sneltoets voor alles selecteren?", antwoord: "CTRL + A"} ,
    {vraag: "Wat is de sneltoets voor het kopieren van een cel erboven?", antwoord: "CTRL + D"} ,
    {vraag: "Wat is de sneltoets voor een hyperlink?", antwoord: "CTRL + K"} ,
    {vraag: "Wat is de sneltoets voor een document opnieuw openen?", antwoord: "CTRL + N"} ,
    {vraag: "Wat is de sneltoets voor nieuw tabblad?", antwoord: "SHIFT + FN + F11"} ,
    {vraag: "Wat is de sneltoets voor een nieuw bestand openen?", antwoord: "CTRL + O"} ,
    {vraag: "Wat is de sneltoets voor printen?", antwoord: "CTRL + P"} ,
    {vraag: "Wat is de sneltoets voor celeigenschap openen?", antwoord: "CTRL + 1"} ,
    {vraag: "Wat is de sneltoets voor ongedaan maken?", antwoord: "CTRL + Z"} ,
    {vraag: "Wat is de sneltoets voor een actie opnieuw uitvoeren?", antwoord: "CTRL + Y"} ,
    {vraag: "Wat is de sneltoets voor onderstrepen?", antwoord: "CTRL + U"} ,
    {vraag: "Wat is de sneltoets voor naar cel A1 gaan?", antwoord: "CTRL + HOME"} ,
    {vraag: "Wat is de sneltoets voor lettertypen openen?", antwoord: "CTRL + SHIFT + F"} ,
    {vraag: "Wat is de sneltoets voor formules weergeven?", antwoord: "CTRL + T"} ,
    {vraag: "Wat is de sneltoets voor een getal in 2 decimalen zetten?", antwoord: "CTRL + SHIFT + !"} ,
    {vraag: "Wat is de sneltoets voor opslaan?", antwoord: "CTRL + S"} ,
    {vraag: "Wat is de sneltoets voor opslaan als?", antwoord: "F12"} ,
    {vraag: "Wat is de sneltoets voor een opmerking bij cel plaatsen?", antwoord: "SHIFT + F2"} ,
    {vraag: "Wat is de sneltoets voor procenten noteren?", antwoord: "CTRL + SHIFT + %"} ,
    {vraag: "Wat is de sneltoets voor een datum in cel toevoegen?", antwoord: "CTRL + ;"} ,
    {vraag: "Wat is de sneltoets voor de tijd in cel toevoegen?", antwoord: "CTRL + SHIFT + ;"} ,
    {vraag: "Wat is de sneltoets voor windows openen?", antwoord: "WNDW"} ,
    {vraag: "Wat is de sneltoets voor gegevens vervangen?", antwoord: "CTRL + H"} ,
    {vraag: "Wat is de sneltoets voor tekst doorhalen?", antwoord: "CTRL + 5"} ,
    {vraag: "Wat is de sneltoets voor cellen, rijen of kolommen invoegen?", antwoord: "CTRL + SHIFT + +"} ,
    {vraag: "Wat is de sneltoets voor cellen, rijen of kolommen verwijderen?", antwoord: "CTRL + -"} ,
    {vraag: "Wat is de sneltoets voor rij verbergen?", antwoord: "CTRL + 9"} ,
    {vraag: "Wat is de sneltoets voor rij weergeven?", antwoord: "ALT + 9"} ,
    {vraag: "Wat is de sneltoets voor rij selecteren?", antwoord: "SHIFT + SPATIE"} ,
    {vraag: "Wat is de sneltoets voor kolom selecteren?", antwoord: "CTRL + SPATIE"} ,
    {vraag: "Wat is de sneltoets voor tekst schuin zetten?", antwoord: "CTRL + 3"} ,
    {vraag: "Wat is de sneltoets voor naar volgende regel inzelfde cel?", antwoord: "ALT + ENTER"} ,
    {vraag: "Wat is de sneltoets voor werkblad naar rechterkant van scherm?", antwoord: "WNDW + >"} ,
    {vraag: "Wat is de sneltoets voor werkblad naar linkerkant van scherm?", antwoord: "WNDW + <"} ,
    {vraag: "Wat is de sneltoets voor meerdere aangesloten cellen optellen?", antwoord: "ALT + ="} ,
    {vraag: "Wat is de sneltoets voor screenshot?", antwoord: "SHIFT + WNDW + S"} ,
    {vraag: "Wat is de sneltoets voor emoji toevoegen?", antwoord: "WNDW + ."} ,
    {vraag: "Wat is de sneltoets voor gegevens vinden?", antwoord: "CTRL + F"} ,
    {vraag: "Wat is de sneltoets voor kolom verbergen?", antwoord: "CTRL + 0"} ,
    {vraag: "Wat is de sneltoets voor kolom weergeven?", antwoord: "ALT + 0"} ,
  ];

// Willekeurig een vraag en antwoord selecteren
function kiesWillekeurigeVraagEnAntwoord() {
    const willekeurigeIndex = Math.floor(Math.random() * vragenEnAntwoorden.length);
    return vragenEnAntwoorden[willekeurigeIndex];
}

// Begin met een willekeurige vraag en antwoord
const geselecteerdeVraagEnAntwoord = kiesWillekeurigeVraagEnAntwoord();
document.getElementById("vraag").innerText = geselecteerdeVraagEnAntwoord.vraag;

// Evenement voor de "Toon Antwoord" knop
document.getElementById("antwoordtonen").addEventListener("click", function() {
    document.getElementById("antwoord").innerText = geselecteerdeVraagEnAntwoord.antwoord; // Stel het antwoord in
    document.getElementById("antwoord").style.display = "block"; // Maak het antwoord zichtbaar
});

// Evenement voor de "Volgende Vraag" knop
document.getElementById("volgende").addEventListener("click", function() {
    const nieuweVraagEnAntwoord = kiesWillekeurigeVraagEnAntwoord(); // Kies een nieuwe vraag en antwoord
    document.getElementById("vraag").innerText = nieuweVraagEnAntwoord.vraag; // Stel de vraag in
    document.getElementById("antwoord").style.display = "none"; // Verberg het antwoord opnieuw
    geselecteerdeVraagEnAntwoord.antwoord = nieuweVraagEnAntwoord.antwoord; // Update de geselecteerde vraag en antwoord
});