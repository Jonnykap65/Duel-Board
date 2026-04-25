## About

Duel Board was created by Jon Kaplan as a free local companion tool for Yu-Gi-Oh! Trading Card Game deck tracking, opening-hand math, matchup notes, and quick access to official resources.

This app is distributed for personal, non-commercial use only. It is not for sale, not an official product, and is not affiliated with, sponsored by, approved by, or endorsed by Konami, Studio Dice, SHUEISHA, TV TOKYO, or any Yu-Gi-Oh! rights holder.

Yu-Gi-Oh!, the Yu-Gi-Oh! Trading Card Game, card names, artwork, logos, and related trademarks and copyrights are the property of their respective owners. Official card data, tournament policy, Forbidden/Limited status, and rulings should be verified through the Konami Yu-Gi-Oh! Card Database and official Konami sources before events.

Copyright notices referenced by official Yu-Gi-Oh! sources include ©1996 Kazuki Takahashi and ©2020 Studio Dice / SHUEISHA, TV TOKYO, KONAMI. This app does not claim ownership of Yu-Gi-Oh! intellectual property.

# Yu-Gi-Oh Tools Desktop Wrapper

This wraps `index.html` as a Windows desktop app.

## Run locally

```powershell
npm install
npm start
```

## Widget-style mode

```powershell
npm run start:widget
```

Widget mode opens a narrower always-on-top window.

## Build a portable Windows executable

```powershell
npm run dist
```

The portable executable is written to `dist\YuGiOh-Tools-Portable.exe`.

## YDK imports and internet access

YDK files contain card passcodes, not full card names/details. When a YDK file is imported, the app creates the deck locally, then tries to resolve those passcodes through the online YGOPRODeck card API.

- If the app is online, it resolves card names and caches them locally.
- If the app is offline but a card was resolved before, the cached name can still be used.
- If the app is offline and a card is not cached, the card appears as `Resolving <passcode>`.

The app currently tries online name resolution once during import. If that lookup fails while offline, reconnecting to the internet does not automatically retry resolution. Re-import the YDK file after reconnecting to resolve the missing card names.
