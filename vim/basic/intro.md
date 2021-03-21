# VIM intro, Faglig kvarter, Capgemini Trondheim, Mars 2020
---
## Hva er Vim?
En teksteditor basert på vi (vi improved). Vi var den første teksteditoren i Unix (1976), og Vim ble lansert i 1991.
Vim, mest brukt i dag, er en videreutviklet versjon med mer funksjonalitet som å håndtere vinduer og tabs, diffs, makroer, plugins, m.m.
## Hva er IKKE Vim?
En fullverdig IDE. Man kan få til mye med plugins, men det vil kreve en del erfaring og arbeid for oppsett.
## Når bør man bruke det?
Når enn man skulle brukt en teksteditor - enten for programmering eller for notater.
I dag er det blitt populært å integrere "vim bindings" i f.eks nettlesere og andre IDE-er (Intellij, VS code...)
## Hvorfor?
Alt gjøres på tastaturet - effektivt og lite tid går med til å markere med mus og bruke abstrakte snarveier som er inkludert i andre teksteditorer. Vim er standardisert og enkelt å huske når man først har lært det.

> "Språket" i vim er likt det man selv ville sagt når man ønsker å utføre endringer i teksten! Mer om dette senere.

# Navigering
| Tast | Funksjon |
| :----: | :--------: |
| h | venstre |
| j | ned |
| k | opp |
| l | høyre |
| space | neste character |
Disse tastene brukes som man ville brukt piltastene normalt. I praksis brukes ikke disse så ofte, da de er erstattet med mer komplette funksjoner.
## Men hvordan skriver man da?!
Vim har tre hoved-moduser:

| Mode | Tast |
| :----: | :--: |
| Normal mode | escape |
| Insert mode | i |
| Visual mode | v |

Når man første gang åpner vim, vil man være i normal mode. Man kommer alltid hit ved å trykke på "esc".
Det er inne i denne modusen at "vim" skjer. Altså her man skriver kommandoene.
I insert mode skriver man kode, og i visual mode kan man bruke avanserte markerings-funksjoner.

## De viktigste funksjonene
- insert / append
  - i / a
- change
  - c
- deletion
  - d
- undo / redo
  - u / ctrl+R
- kontekst-navigering (ord, kodeblokker, start og slutt, linjeskift)
  - ord: w for word
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

```python
class Person:
    def __init__(self, navn, alder):
        self.navn = navn
        self.alder = alder

    def __str__(self):
        return "{name} ({age})".format(name=self.navn, age=self.alder)

ola = Person("Ola", 33)

print(ola)
```

```
$ Ola (30)
```

