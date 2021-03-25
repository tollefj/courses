# Vim intro - Faglig kvarter
### Capgemini Trondheim, Mars 2021
---
## Hva er Vim?
En teksteditor basert på vi (vi improved). Vi var den første teksteditoren i Unix (1976), og Vim ble lansert i 1991.
Vim, mest brukt i dag, er en videreutviklet versjon med mer funksjonalitet, som å håndtere tabs, diffs, makroer, plugins, m.m.
## Hva er IKKE Vim?
En fullverdig IDE. Man kan få til mye med plugins, men det vil kreve en del erfaring og arbeid for oppsett.
## Når bør man bruke det?
Når enn man skulle brukt en teksteditor - enten for programmering eller for notater.
I dag er det blitt populært å integrere "vim bindings" i f.eks nettlesere og andre IDE-er (Intellij, VS code...)
## Hvorfor?
Alt gjøres på tastaturet - effektivt og lite tid går med til å markere med mus og bruke abstrakte snarveier som er inkludert i andre teksteditorer. Vim er standardisert og enkelt å huske når man først har lært det.

> "Språket" i vim er likt det man selv ville sagt når man ønsker å utføre endringer i teksten! Mer om dette senere.

---


## Eksempel 1 - Endre enkel kode:
Man har følgende kodesnippet:
`print(this_variable_does_not_exist_anymore)`
til:
`print(existing_variable)`

- Change all text inside the parentheses"
  - `ci(` eller `ci)`

## Eksempel 2 - Endre markdown med plugin (vim-surround)
"this code should be monospaced"
til:
`this code should be monospaced`
- _change surrounding " to `_
  - ```cs"` ```

---

# Navigering
| Tast | Funksjon |
| :----: | :--------: |
| h | venstre |
| j | ned |
| k | opp |
| l | høyre |
| space | neste character |
| 0 | linjestart |
| $ | linjeslutt |
Disse tastene brukes som man ville brukt piltastene normalt. I praksis brukes ikke disse så ofte, da de er erstattet med mer komplette funksjoner.
## Men hvordan skriver man da?!
Vim har tre hoved-moduser:

| Mode | Tast |
| :----: | :--: |
| Normal mode | escape |
| Insert mode | i |
| Visual mode | v |

```
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Når man første gang åpner vim, vil man være i normal mode. Man kommer alltid hit ved å trykke på "esc".
Det er inne i denne modusen at "vim" skjer. Altså her man skriver kommandoene.
I insert mode skriver man kode, og i visual mode kan man bruke avanserte markerings-funksjoner.

## De viktigste funksjonene
- insert / append
  - skriv der du er: i
  - skriv fra start av linje: I
  - skriv etter neste karakter: a (append)
  - skriv på slutten av linja: A
  - slett nåværende karakter og skriv: s
  - slett hele linja og skriv: S
  - ny linje under: o
  - ny linje over: O
- find
  - finn fremover: f
  - finn bakover: F
- change
  - aktiver "change": c
  - rediger fra der du er og slett resten av linja: C
  - smarte semantiske løsninger!
    - change around word:
      - caw
    - change inside word:
      - ciw
    - change inside bracket:
      - ci]
    - change inside block
      - ci}
    - change inside xml-tag:
      - cit
  
- deletion
  - slett character: x
  - slett til linjeslutt: d
  - slett hele linja: D
- undo / redo
  - u / ctrl+r
- kontekst-navigering (ord, kodeblokker, start og slutt, linjeskift)
  - ord: w for word
    - hopp til starten av neste ord. W: ignorer symboler.
        - et vanlig ord i klartekst
        - yml.struktur.aksess, nok.en.yml.aksess
    - bakover: b / B
  - kodeblokker/paragrafer: { }
  - start: gg
  - slutt: GG
  - linjeskift: :n (et heltall)
- innrykk
  - < >
- repetering
  - et tall + funksjon som skal repeters
- søking og utbytting
  - søk: /
  - utbytting: :%s/søkeord/nyttord/g
- lagring og avslutting
  - lagre: :w
  - avslutt: :q
  - lagre og avslutt: :wq
  - avbryt endringer og avslutt: :q!
