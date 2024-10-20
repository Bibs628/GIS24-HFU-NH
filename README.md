# GIS24-HFU-NH
The Repository for my Project in GIS24/25 at the HFU. This is a Project in german and the following text will also be in german.

## Themenvorschlag:
Eine Persönliche Website um mich Vorzustellen und meine Privaten Projekte zu veröffentlichen. In Zukunft wird evtl noch eine Einbindung mit meinem Lokalen server oder meiner Obsidian.md mitschriften online sein. Den Interaktiven Teil soll ein Forum sein wo eine Registrierung erfolgt bevor man Beiträge hinzufügen kann, dies dient dazu um eine evtl Moderation zu verhindern. Die genaue Umsetzung ist noch nicht ganz klar, es wird jedoch über igend eine Datenbank erfolgen. Den groben Aufbau ist im Bild dargestellt. 

### Umfang an Seiten
Die Seite soll aus verschiedenen Unterseiten bestehen, ein grober vorläufiger Aufbau sieht wie folgt aus:

[Projektidee GIS]([https://myoctocat.com/assets/images/base-octocat.svg](https://raw.githubusercontent.com/Bibs628/GIS24-HFU-NH/refs/heads/main/pictures/Projektidee%20GIS.png))

## Link zur Seite:
https://bibs628.github.io/GIS24-HFU]-NH/

## Fragen

### Website pushing
Das Pushen des Projektes ins GitHub scheint sich nicht die GitHub page genau wie im localhost zu aktualisieren. Der Localhost zeigt die Website wie es soll an aber GitHub nicht und ich kann mir dies nicht erklären. 

### Zentrieren von <a href> 
Ich möchte gerne den "Button" auf Seiten wie unter Projekte/HomeLab gerne zentrieren, jedoch bin ich mir nicht sicher wie das geht. Am besten passt sich der Overhang dann auch ein Stück weit an der Bildschrirmbreite an.

### bessere Anpassungen der Textboxen
Ich bin an sich mit der Art und Weise wie die Textboxen gerendert werden zufrieden, jedoch finde ich die Art und Weise wie Zeilenumbrüche bis jetzt auf verschiedenen Bildschirmbreiten Skalieren bis jetzt nicht so geil. Ich habe dazu jedoch bis jetzt keine Elegantere variante gefunden.

### Bild auf Startseite
Ich bin nicht zufrieden wie das Bild auf der Startseite sich skalliert, entsprechend würde ich da auch gerne ein paar mehr Informationen zu haben. Wahrscheinlich würde es in JavaSkript besser gehen, jedoch habe ich da noch nicht rein geschaut.

### macht es Sinn mehrere CSS Datein zu erstellen
Eine Überlegung ist es mehrere CSS Datein zu erschaffen um mehr übersichtlichkeit zu schaffen. Ist es möglich mehrere CSS-Datein in einer wie zu Verweise und daraufhin nach wie vor nur eine zu verlinken?
Mein Gedanke war dies so ähnlich wie in LaTeX zu handhaben, dort sind wie \Input \include, um mehrere Datein in eine zu inkludieren.

### Colorshemes
Ich bin mir nicht sicher wie ich Vernünftig mit der primär, sekundär und tertiär Farben umgehen soll. Ich würde gerne bei einem dunklem Design beilben, jedoch sind die anderen Farben meines Farbshemas nicht wirklich anwendbar. https://colorhunt.co/palette/0c0c0c481e149b3922f2613f
Stand jetzt verwende ich haptsächlich:
Hintergrund: #0C0C0C
Akzendfarbe: #F2613F
gelegentlich:
Überschriften und TopNav: #9B3922
gar nicht: #481E14

### Impressumspflicht
Kennen sie die Notwendigkeiten des Impressums? Nach meinen Informationen sollten meine Angegebenen Daten ausreichen sein.

### Umgang mit Unterseiten komplett anderer Struktur
Wie geht man mit Unterseiten um, die sich komplett unabhängig von der eigentlichen Website agieren? In meinem Fall hadnelt es sich um einen Vortrag welchen ich bald im UnFug halte. Gibt es da elegante Wege um einfach zu dem normalen Bereich zurück zu gehen oder soll ich einfach links am Anfang & Ende zur Website packen?

### Bildgröße und optimierung der Speichergröße
Mir persönlich ist die Bildqualität wichtig und deswegen würde ich gerne diese möglichst Verlustfrei laden. Ich habe die Datein im Moment auf eine Auflösung von WQHD / 4k ausgelegt was bis jetzt die Bilder angeht. Dies bedeutet bei den Projekten im Moment eine Bildauflösung vom 850x750px in Dateiformat .png, welche in Dateigrößen zwischen 2MB und 23 KB resultiert. Die größenunterschiede liegen mitunter an der Transparenz, welche bei einem .jpeg nicht bestehen würde und nach meinen Tests ist die Speicherplatzgröße nicht großartig Verändern oder massiv in die Bildqualität eingreifen.

### Einklappen der TopNav bei geringen Auflösungen / Burgermenu
Ich habe Versucht zwischenruch mal ein Burgermenu einzubinden, jedoch hat dies bei mir nicht so funktioniert wie ich wollte. Ich habe versucht mich an diesem Guide von w3 School zu halten https://www.w3schools.com/howto/howto_js_mobile_navbar.asp

### Verbesserte Einstellung der TopNav
Die TopNav ist an sich benutzbar, diese erzeugt jedoch einen Zeilenumbruch bei mittleren Auflösungen und ich habe online keine Ausreichenden Resourcen gefunden wie ich mit <span> umzugehen habe.
