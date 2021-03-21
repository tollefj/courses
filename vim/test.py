class Person:
    def __init__(self, navn, alder):
        self.navn = navn
        self.alder = alder

    def __str__(self):
        return "{name} ({age})".format(name=self.navn, age=self.alder)

ola = Person("Ola", 33)

print(ola)

