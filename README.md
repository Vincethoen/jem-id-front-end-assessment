
# Jem-ID Assessment: README

## Overzicht

Dit project is een assessment voor Jem-ID, waarin ik een applicatie heb gebouwd met React. Het project bevat verschillende componenten, contexten en API-aanroepen om een gebruikersinterface te creëren. De applicatie biedt een overzicht van producten met filters en detailpagina's voor individuele producten.

Dit project is een front-end assessment voor Jem-ID, waarbij een applicatie is ontwikkeld om het assortiment van een plantenkweker te tonen. De applicatie biedt gebruikers de mogelijkheid om producten te filteren op naam, hoogte, diameter en standplaats.

De applicatie maakt gebruik van React en TypeScript, en haalt productinformatie op via een REST API.


## Vereisten

Voor dit project moet je de volgende software geïnstalleerd hebben:
- **Node.js**
- **npm**

## Installatie

1. Clone het project naar je lokale machine:
    ```bash
    git clone <repository-url>
    ```

2. Navigeer naar de projectmap:
    ```bash
    cd jem-id-assessment
    ```

3. Installeer de benodigde dependencies:
    ```bash
    npm install
    ```

4. Start de ontwikkelserver:
    ```bash
    npm start
    ```

De applicatie zal nu draaien op `http://localhost:3000`.

*Let op: Start het front-end project op poort **3000** vanwege de CORS-instellingen van de API.*

## Gebruikte Technologieën

- **React** - Voor het bouwen van de UI met componenten en hooks.
- **TypeScript** - Voor typeveiligheid in het project.
- **React Router** - Voor routing en navigatie tussen pagina's.
- **Context API** - Voor het delen van state tussen componenten.
- **CSS** - Voor styling van de applicatie.

## Styling met CSS

Voor de styling van dit project heb ik gekozen voor CSS, omdat ik niet te veel tijd wou investeren in de visuele kant maar meer aan de technische kant. De enige uitdaging voor mezelf die ik als extratje wou toepassen was een enkele slider met 2 knoppen, maar dat wou ik pas doen als de gehele applicatie klaar is. Dat is helaas niet gelukt en heb ik de dubbele sliders laten staan.

## Mappenstructuur

Hier is een overzicht van de mappenstructuur van dit project:
```
└── 📁jem-id-assessment
    └── 📁.git
    └── 📁public
        └── 📁icons
            └── icon-partial.svg
            └── icon-search.svg
            └── icon-shadow.svg
            └── icon-sun.svg
        └── index.html
        └── manifest.json
        └── robots.txt
    └── 📁src
        └── 📁api
            └── productService.ts
        └── 📁components
            └── 📁buttons
                └── Slider.tsx
            └── FilterResults.tsx
            └── ProductFilter.tsx
        └── 📁context
            └── DataContext.tsx
            └── FilterContext.tsx
        └── 📁pages
            └── Detail.tsx
            └── Error.tsx
            └── Overview.tsx
        └── 📁router
            └── AppRouter.tsx
        └── 📁types
            └── types.ts
        └── App.tsx
        └── index.css
        └── index.tsx
    └── .gitignore
    └── package-lock.json
    └── package.json
    └── README.md
    └── tsconfig.json
```

## Urenregistratie

De bedoeling was niet meer dan één dag aan dit project te besteden.
Voor de volgende activiteiten exclusief dit markdown bestand heb ik er **ongeveer 10 uur** aan besteedt:

- Voorbereiding: Wireframe schets en API getest met Postman: **0.5 uur**
- Projectopzet: structuur en opzetten van React componenten: **2 uur**
- API integratie, routing, contexten, en state management: **5 uur**
- Styling en afronding: **2.5 uur**

## Niet afgeronden requirements

- Detail pagina: helaas ben ik hier niet aan toe gekomen.
- Routing naar de detail pagina werkt ook nog niet.
- Buttons voor de 'Standing place' in een apart component plaatsen. 

## Toekomstige Verbeteringen

In de toekomst zou ik de volgende verbeteringen willen aanbrengen:
- Detail pagina
- Betere responsive styling, vooral voor de mobiele weergave.
- Enkele sliders met 2 schuifknoppen.
- Routing afronden.
- Error pagina styling.



