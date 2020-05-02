### Accés a la pàgina

El link per accedir a la pagina principal i començar la navegació és:
[https://juanki98.github.io/FHIC_eatNgo_G7/](https://juanki98.github.io/FHIC_eatNgo_G7/)


### Elements .html reutilitzables

Per tal de reutilitzar elements html he buscat a internet un script que fa possible incloure elements html en un altre element html.

Per fer-ho servir cal importar el fitxer scripts/include.js al header del document de la pàgina.
Generem el fitxer .html amb el component p.ex: component/footer.html
Afegim l'element footer a la pàgina posant:

``` markdown
<div data-include="components/footer"></div>
```

I ja tenim el nostre component a la pàgina.