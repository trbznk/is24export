# is24export

Exportfunktion für Exposes auf immobilienscout24.de

## Installation

1. Download des Repository als ZIP-Datei
2. Entspacken der ZIP-Datei
3. Google Chrome öffenen und in 'Erweiterungen verwalten' wechseln
4. 'Entwicklermodus' aktivieren
5. Auf 'Entpackte Erweiterung laden' klicken und das Verzeichnis der entpackten ZIP-Datei auswählen

## Benutzung

Nach der Installation bekommst du auf jeder Expose-Seite (https://www.immobilienscout24.de/expose/*) einen `Export` Button.

![Export Button](images/export_button.png)

Durch den Export wird ein Download einer JSON-Datei gestartet. Der Inhalt von `131095863.json` könnte so aussehen:

```json
{
    "link_canonical": "https://www.immobilienscout24.de/expose/131095863",
    "scout_id": "131095863",
    "expose_title": "Schöne 1-Zimmerwohnung direkt an der Eilenriede",
    "zip_region_and_country": "30173 Hannover, Südstadt",
    "typ": "Etagenwohnung",
    "wohnflaeche": "38  m²",
    "bezugsfrei": "01.02.2022",
    "zimmer": "1",
    "badezimmer": "1",
    "heizungsart": "Zentralheizung",
    "objektbeschreibung": "Ich suche Nachmieter zum 1.2.22 für diese schöne 1-Zimmer Wohnung in der Südstadt. Sie befindet sich im 3. Stock der über einen Aufzug erreichbar ist. Das mit Parkett ausgelegte Zimmer ist durch die große Fensterfront lichtdurchflutet und direkt an einen Balkon angeschlossen. Die Küche ist ausgestattet mit einem Kühlschrank mit Gefrierfach, Herd, Spülmaschine und Waschmaschine. Im Bad befindet sich eine Dusche mit Echtglastüren. Zur Wohnung gehört ein Dachbodenabteil, welches auch über den Aufzug erreichbar ist. Die Wohnung wird frisch gestrichen übergeben. Der Kleiderschrank müsste gegen einen Abschlag von 230€ übernommen werden. Falls die Entscheidung schnell fällt und der Maler vor Einzugsdatum fertig ist kann die Wohnung auch schon vorher übergeben werden. ",
    "lage": "Das Objekt liegt in der belebten Südstadt 2 Gehminuten entfernt von der Eilenriede. Direkt gegenüber liegt die S-Bahn Station Bismarckstraße, sodass man mit der Bahn in 4 Minuten am Hauptbahnhof ist. Es besteht jedoch keine große Belastung durch Zuglärm, da die Fenster 3-fach verglast sind. "
}
```
