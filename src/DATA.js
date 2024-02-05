const DATA = [
  {
    id: 0,
    question:
      "Was sind die grundlegenden Prinzipien der objektorientierten Programmierung (OOP)?",
    answer:
      "Die objektorientierte Programmierung (OOP) basiert auf den Prinzipien der Vererbung, Polymorphie, Abstraktion und Encapsulation.",
    tags: ["programmierung", "oop", "grundlagen"],
    link: "https://example.com/oop",
    bookmarked: true,
    addedByUser: false,
  },
  {
    id: 1,
    question: "Wie funktioniert die Blockchain-Technologie?",
    answer:
      "Die Blockchain ist eine dezentrale Datenbank, die Informationen in Blöcken speichert, die miteinander verknüpft sind. Neue Blöcke werden durch Kryptographie und Konsensmechanismen hinzugefügt.",
    tags: ["blockchain", "technologie", "kryptographie"],
    link: "https://example.com/blockchain",
    bookmarked: false,
    addedByUser: false,
  },
  {
    id: 2,
    question: "Was sind die Hauptmerkmale von JavaScript?",
    answer:
      "JavaScript ist eine interpretierte, clientseitige Skriptsprache, die für die Webentwicklung verwendet wird. Es unterstützt dynamisches Typisieren und Funktionen als First-Class-Citizens.",
    tags: ["javascript", "webentwicklung", "programmiersprache"],
    link: "https://example.com/javascript",
    bookmarked: true,
    addedByUser: false,
  },
  {
    id: 3,
    question:
      "Welche Designmuster sind in der Softwareentwicklung am häufigsten?",
    answer:
      "Einige häufig verwendete Designmuster sind Singleton, Factory, Observer und Strategy.",
    tags: ["designmuster", "softwareentwicklung", "programmierung"],
    link: "https://example.com/designpatterns",
    bookmarked: false,
    addedByUser: false,
  },
  {
    id: 4,
    question:
      "Was ist künstliche Intelligenz (KI) und wie wird sie in der modernen Technologie eingesetzt?",
    answer:
      "Künstliche Intelligenz bezieht sich auf die Fähigkeit von Maschinen, menschenähnliches Denken und Lernen zu simulieren. KI wird in Bereichen wie maschinelles Lernen, Sprachverarbeitung und Bilderkennung eingesetzt.",
    tags: ["künstliche intelligenz", "ki", "technologie"],
    link: "https://example.com/ai",
    bookmarked: true,
    addedByUser: false,
  },
  {
    id: 5,
    question: "Erklären Sie das Konzept der agilen Softwareentwicklung.",
    answer:
      "Die agile Softwareentwicklung ist ein Ansatz zur Softwareentwicklung, bei dem Projekte in kurzen Iterationen durchgeführt werden. Es betont die Zusammenarbeit, Flexibilität und die Bereitstellung von funktionsfähiger Software in kurzen Abständen.",
    tags: ["agile", "softwareentwicklung", "projektmanagement"],
    link: "https://example.com/agile",
    bookmarked: false,
    addedByUser: false,
  },
  {
    id: 6,
    question: "Was sind die Vorteile von Cloud Computing?",
    answer:
      "Cloud Computing ermöglicht den Zugriff auf Ressourcen über das Internet und bietet Skalierbarkeit, Kosteneffizienz, Flexibilität und automatisierte Wartung.",
    tags: ["cloud computing", "vorteile", "technologie"],
    link: "https://example.com/cloud",
    bookmarked: true,
    addedByUser: false,
  },
  {
    id: 7,
    question: "Wie funktioniert das HTTP-Protokoll?",
    answer:
      "HTTP (Hypertext Transfer Protocol) ist ein Protokoll zur Übertragung von Hypertextdokumenten im Web. Es verwendet Anfragen und Antworten zwischen einem Client und einem Server, um Webseiten und Ressourcen auszutauschen.",
    tags: ["http", "protokoll", "webentwicklung"],
    link: "https://example.com/http",
    bookmarked: false,
    addedByUser: false,
  },
  {
    id: 8,
    question: "Was sind die wichtigsten Unterschiede zwischen HTML und XML?",
    answer:
      "HTML ist eine Auszeichnungssprache für Webseiten, während XML eine Markup-Sprache für allgemeine Daten ist. HTML hat vordefinierte Tags für die Darstellung von Inhalten, während XML benutzerdefinierte Tags verwendet, um Daten zu strukturieren.",
    tags: ["html", "xml", "unterschiede"],
    link: "https://example.com/htmlvsxml",
    bookmarked: true,
    addedByUser: false,
  },
  {
    id: 9,
    question:
      "Erklären Sie den Begriff 'Open Source Software' und nennen Sie Beispiele.",
    answer:
      "Open Source Software ist Software, deren Quellcode öffentlich zugänglich ist und von der Gemeinschaft entwickelt werden kann. Beispiele sind Linux, Apache und Mozilla Firefox.",
    tags: ["open source", "software", "beispiele"],
    link: "https://example.com/opensource",
    bookmarked: false,
    addedByUser: false,
  },
  {
    id: 10,
    question: "What the heck do DJ's actually do?",
    answer: "Do do do do do",
    tags: ["music", "memes", "fancy"],
    link: "https://google.de",
    bookmarked: true,
    addedByUser: true,
  },
  {
    id: 11,
    question: "Schau'n wir mal, was wird.",
    answer: "Was wird.",
    tags: ["couplegoals", "memes", "funny"],
    link: "https://waswird.de",
    bookmarked: true,
    addedByUser: true,
  },
  {
    id: 12,
    question: "Döp döp döp dö-dö döp döp döp",
    answer: "Dö-döp döp döp, dö-dö döp döp döp (Scooter)",
    tags: ["music", "90s", "alwayshardcore"],
    link: "https://90s-calling.com",
    bookmarked: false,
    addedByUser: true,
  },
];

export default DATA;
