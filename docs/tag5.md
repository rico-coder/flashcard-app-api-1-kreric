# Tag 05 – Flashcard App

## Erklärungen

### Was wurde gemacht?

Am fünften Tag habe ich die App um zwei wichtige Funktionen erweitert. Decks können jetzt gelöscht werden, und jedes Deck bekommt beim Erstellen automatisch eine zufällige Farbe, die gespeichert und als Farbverlauf angezeigt wird.

Folgende Schritte wurden durchgeführt:

- Eine deleteDeck-Funktion in index.tsx eingebaut
- Beim LongPress auf ein Deck erscheint ein Bestätigungsdialog mit „Löschen" und „Abbrechen"
- Nach dem Löschen wird das Deck sofort aus der Liste entfernt und in AsyncStorage aktualisiert
- Eine getRandomColor-Funktion in create.tsx eingebaut, die beim Erstellen eines Decks eine zufällige Farbe auswählt
- Die Farbe wird zusammen mit dem Deck in AsyncStorage gespeichert
- In index.tsx wird die gespeicherte Farbe im LinearGradient jeder Deck-Karte verwendet
- Die Kartenanzahl zeigt jetzt die echte Anzahl gespeicherter Cards an statt immer „0 Karten"

### Was war neu?

- **filter()**: Eine JavaScript-Array-Methode die durch eine Liste geht und nur die Elemente behält, die eine Bedingung erfüllen. Zum Löschen eines Decks behält man alles ausser dem zu löschenden Element. decks.filter(d => d.id !== deckId). Das Original-Array wird dabei nicht verändert. Es wird ein neues Array zurückgegeben.

- **Alert.alert() mit mehreren Buttons**: Man kann Alert.alert() ein Array von Buttons mitgeben. Jeder Button hat einen text, einen optionalen style ('cancel') und eine onPress-Funktion.

- **Zufällige Farbe mit Math.random()**: Math.floor(Math.random() * array.length) gibt eine zufällige Zahl zwischen 0 und der Länge des Arrays zurück. Damit kann man ein zufälliges Element aus einer Liste auswählen.

- **Optional Chaining ?.**: Mit item.cards?.length kann man sicher auf eine Eigenschaft zugreifen, auch wenn sie vielleicht nicht vorhanden ist. Ohne ?. würde die App abstürzen, wenn cards undefined ist.

- **Nullish Coalescing ??**: Der ??-Operator gibt den rechten Wert zurück, wenn der linke null oder undefined ist. Zum Beispiel: item.cards?.length ?? 0 gibt 0 zurück, wenn cards nicht vorhanden ist.

---

## Reflexion / Herausforderungen

### Was lief gut?

Die deleteDeck-Funktion war schnell umgesetzt, da das Muster, laden, anpassen, speichern, State updaten, bereits von den vorherigen Tagen bekannt war. Nur statt einem neuen Element hinzuzufügen, wird diesmal eines herausgefiltert.

Die zufällige Farbe war einfach einzubauen: Ein Array mit Farben definieren und mit Math.random() eine davon auswählen.

### Was war herausfordernd?

- **filter() verstehen**: Am Anfang war nicht ganz klar, was filter() genau zurückgibt. Wichtig: Es verändert das Original-Array nicht, sondern gibt ein neues Array zurück. Man muss das Ergebnis also in einer neuen Variable speichern und dann den State und AsyncStorage aktualisieren.

- **Hardcodierte Werte ersetzen**: Die Kartenanzahl zeigte immer „0 Karten" weil der Wert fest im Code stand. Die Lösung war item.cards?.length ?? 0. Damit wird die echte Anzahl aus dem gespeicherten Deck gelesen.

- **Farbverlauf mit gespeicherter Farbe**: Bisher war die Farbe im LinearGradient fest einprogrammiert. Nach der Anpassung kommt die Farbe jetzt direkt aus dem gespeicherten Deck-Objekt. Jedes Deck sieht dadurch anders aus.