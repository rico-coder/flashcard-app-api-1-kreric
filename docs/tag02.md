# Tag 02 - Flashcard App

## Erklärungen

### Was wurde gemacht?

Am zweiten Tag haben wir die App so erweitert, dass Daten wirklich gespeichert werden. Vorher waren alle Decks weg, sobald die App geschlossen wurde. Jetzt bleiben sie gespeichert, auch nach einem Neustart.

Das wurde umgesetzt:

- Ein Eingabefeld eingebaut, damit der Benutzer einen Deck-Namen eintippen kann
- Eine Prüfung eingebaut: Wenn das Eingabefeld leer ist, erscheint eine Fehlermeldung
- Beim Speichern wird ein neues Deck-Objekt erstellt mit einem Namen, einer Farbe, einer ID und drei Beispiel-Fragen
- Das Deck wird auf dem Gerät gespeichert, damit es nicht verloren geht
- Auf der Startseite werden alle gespeicherten Decks als Karten angezeigt
- Wenn man auf ein Deck tippt, öffnet sich eine Detailseite mit dem richtigen Namen

### Was war neu?

- **AsyncStorage**: So speichert man Daten auf dem Gerät. Wie ein kleines Notizbuch, man schreibt etwas rein und kann es später wieder lesen. Daten müssen als Text gespeichert werden, deshalb braucht man JSON.stringify() zum Speichern und JSON.parse() zum Lesen.

- **useState**: Ein Weg, um Daten in einer Seite zu speichern, die sich verändern können. Zum Beispiel: Was hat der Benutzer ins Eingabefeld getippt? Man bekommt immer zwei Dinge: den aktuellen Wert und eine Funktion um ihn zu ändern.

- **useEffect**: Damit kann man Code ausführen, sobald eine Seite geöffnet wird. Zum Beispiel: Beim Öffnen der Detailseite sofort das richtige Deck laden.

- **useFocusEffect**: Fast gleich wie useEffect, aber es läuft jedes Mal, wenn man auf die Seite zurückkommt. Das braucht man auf der Startseite, damit neue Decks sofort erscheinen.

- **FlatList**: Eine Komponente um eine Liste anzuzeigen. Man gibt ihr die Daten und sagt ihr, wie jedes Element aussehen soll, sie kümmert sich um den Rest.

- **TextInput**: Das Eingabefeld in React Native. Was der Benutzer tippt, wird direkt im State gespeichert.

- **Alert.alert()**: Zeigt ein kleines Popup mit einer Nachricht an. Wird verwendet, wenn der Benutzer einen Fehler macht, z. B. ein leeres Eingabefeld abschickt.

- **Date.now()**: Gibt die aktuelle Uhrzeit als Zahl zurück. Da diese Zahl immer einzigartig ist, eignet sie sich gut als ID für neue Decks.

- **.find()**: Durchsucht eine Liste und gibt das erste Element zurück, das zur Suche passt. Wie eine Suchfunktion für Arrays.

---

## Reflexion / Herausforderungen

### Was lief gut?

Die Grundlagen von Tag 1 wie Navigation und Styling waren bereits bekannt, das hat den Start erleichtert. Sobald man verstanden hat, wie useState funktioniert, war es einfacher den Rest aufzubauen.

### Was war herausfordernd?

- **Code an der falschen Stelle**: Am Anfang habe ich useState und die Speicherfunktion ausserhalb der Komponente geschrieben. Das hat nicht funktioniert, weil diese Dinge immer innerhalb der Komponente stehen müssen.

- **useEffect vs. useFocusEffect**: Der Unterschied war nicht sofort klar. Einfach gesagt: useEffect läuft einmal beim Öffnen, useFocusEffect läuft jedes Mal wenn man auf die Seite kommt.

- **Warten auf Daten**: AsyncStorage braucht einen kurzen Moment zum Laden. Deshalb muss man async und await verwenden, damit die App wartet, bis die Daten wirklich da sind, bevor sie weiter macht.