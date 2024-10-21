# GIS24-HFU-NH
The Repository for my Project in GIS24/25 at the HFU. This is a Project in German and the following text will also be in German.

## Themenvorschlag:
Eine persönliche Website, um mich vorzustellen und meine privaten Projekte zu veröffentlichen. In Zukunft wird eventuell noch eine Einbindung mit meinem lokalen Server oder meinen Obsidian.md-Mitschriften online sein. Der interaktive Teil soll ein Forum sein, in dem eine Registrierung erfolgt, bevor man Beiträge hinzufügen kann. Dies dient dazu, eine eventuelle Moderation zu verhindern. Die genaue Umsetzung ist noch nicht ganz klar, sie wird jedoch über irgendeine Datenbank erfolgen. Der grobe Aufbau ist im Bild dargestellt.

### Umfang an Seiten
Die Seite soll aus verschiedenen Unterseiten bestehen. Ein grober vorläufiger Aufbau sieht wie folgt aus:

![Projekte](pictures/Projektidee%20GIS.png)

## Link zur Seite:
https://bibs628.github.io/GIS24-HFU-NH/

## Fragen

### Website pushing
Das Pushen des Projektes ins GitHub scheint die GitHub Page nicht genau wie im Localhost zu aktualisieren. Der Localhost zeigt die Website wie gewünscht an, aber GitHub nicht, und ich kann mir dies nicht erklären.

### Zentrieren von <a href>
Ich möchte gerne den "Button" auf Seiten wie unter Projekte/HomeLab zentrieren, jedoch bin ich mir nicht sicher, wie das geht. Am besten passt sich der Overhang dann auch ein Stück weit an die Bildschirmbreite an.

### Bessere Anpassungen der Textboxen
Ich bin an sich mit der Art und Weise, wie die Textboxen gerendert werden, zufrieden. Jedoch finde ich die Art und Weise, wie Zeilenumbrüche bis jetzt auf verschiedenen Bildschirmbreiten skalieren, nicht so gut. Ich habe dazu jedoch bis jetzt keine elegantere Variante gefunden.

### Bild auf Startseite
Ich bin nicht zufrieden, wie das Bild auf der Startseite sich skaliert. Entsprechend würde ich da auch gerne ein paar mehr Informationen zu haben. Wahrscheinlich würde es in JavaScript besser gehen, jedoch habe ich da noch nicht reingeschaut.

### Macht es Sinn, mehrere CSS-Dateien zu erstellen?
Eine Überlegung ist es, mehrere CSS-Dateien zu erschaffen, um mehr Übersichtlichkeit zu schaffen. Ist es möglich, mehrere CSS-Dateien in einer zu verweisen und daraufhin nach wie vor nur eine zu verlinken?
Mein Gedanke war, dies so ähnlich wie in LaTeX zu handhaben, dort sind wie \Input \include, um mehrere Dateien in eine zu inkludieren.

### Colorschemes
Ich bin mir nicht sicher, wie ich vernünftig mit den primären, sekundären und tertiären Farben umgehen soll. Ich würde gerne bei einem dunklen Design bleiben, jedoch sind die anderen Farben meines Farbschemas nicht wirklich anwendbar. https://colorhunt.co/palette/0c0c0c481e149b3922f2613f
Stand jetzt verwende ich hauptsächlich:
Hintergrund: #0C0C0C
Akzentfarbe: #F2613F
gelegentlich:
Überschriften und TopNav: #9B3922
gar nicht: #481E14

### Impressumspflicht
Kennen Sie die Notwendigkeiten des Impressums? Nach meinen Informationen sollten meine angegebenen Daten ausreichen.

### Umgang mit Unterseiten komplett anderer Struktur
Wie geht man mit Unterseiten um, die sich komplett unabhängig von der eigentlichen Website agieren? In meinem Fall handelt es sich um einen Vortrag, welchen ich bald im UnFug halte. Gibt es da elegante Wege, um einfach zu dem normalen Bereich zurückzugehen, oder soll ich einfach Links am Anfang & Ende zur Website packen?

### Bildgröße und Optimierung der Speichergröße
Mir persönlich ist die Bildqualität wichtig und deswegen würde ich gerne diese möglichst verlustfrei laden. Ich habe die Dateien im Moment auf eine Auflösung von WQHD / 4k ausgelegt, was bis jetzt die Bilder angeht. Dies bedeutet bei den Projekten im Moment eine Bildauflösung von 850x750px im Dateiformat .png, welche in Dateigrößen zwischen 2MB und 23 KB resultiert. Die Größenunterschiede liegen mitunter an der Transparenz, welche bei einem .jpeg nicht bestehen würde, und nach meinen Tests ist die Speicherplatzgröße nicht großartig veränderbar oder massiv in die Bildqualität eingreifend.

### Einklappen der TopNav bei geringen Auflösungen / Burgermenu
Ich habe versucht, zwischendurch mal ein Burgermenu einzubinden, jedoch hat dies bei mir nicht so funktioniert, wie ich wollte. Ich habe versucht, mich an diesem Guide von w3schools zu halten: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp

Der Versuch ist im Impressum zu sehen, jedoch scheint der nicht wirklich zu sehen. 

### Verbesserte Einstellung der TopNav
Die TopNav ist an sich benutzbar, diese erzeugt jedoch einen Zeilenumbruch bei mittleren Auflösungen und ich habe online keine ausreichenden Ressourcen gefunden, wie ich mit <span> umzugehen habe.