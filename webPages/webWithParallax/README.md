## Que aprendi?

`main {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 2px;
}`
main actua como un wrapper del contenido de la pagina con el efecto parallax. Sin esto el efecto parallax no se puede llevar a cabo. Entonces le doy el efecto al wrapper para que cuando utilize el scroll sea en el main tag y no en el body (que es el default). Entonces le damos la altura de la pantalla y el overflow-y en atuo para que se pueda scrollear. Luego el overflow-x hidden es necesario para que la imagen se 'esconda detras de los no-parallax'. Todos esto no se puede aplicar sin perspective, este especifica que tan lejos o sercano la imagen esta relativo a la pantalla (positivo para sercano al usuario y negativo para lejano dentro de la pantalla), el valor especificado en pixeles no importa por si mismo, sino que el resto de valores son relativos a este.
`  transform: translateZ(-1px) scale(1.6);`
Es usado para general el efecto. Funciona en conjunto con lo anterior y transform-style: preserve-3d. lo que hace es mover el selector un pixel mas lejos del usuario, como la perspective esta seteada a 2px el efecto el elemento este un 50% mas lejano a mi pantalla, por lo que necesita un scale de un 1.5 (50%) \[Como la imagen es chica lo puse en 1.6\]

- Es necesario utilizar una seccion como wrapper dentro del body ya que este no sirve para crear el efecto de parallex.
- z-index: represent the z axis. It is used to stack elements on top of each other. The higher the z-index, the higher the element will be stacked.
- overflow: hidden: it is used to hide the content that overflows the element. (important to make the effect of parallax)
- perspective: perspective is used to indicate the distance between the z-index=0 (more greater more close to the screen)
- transform-style: The transform-style sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.
- ::after; crea un pseudo-elemento que es el último hijo del elemento seleccionado. Es comunmente usado para añadir contenido cosmético a un elemento con la propiedad content. En este cas se utiliza para crear un background con la imagen

- content: " ";: Se le asigna un contenido vacío al pseudoelemento.
- position: absolute;: El pseudoelemento se posiciona de manera absoluta con respecto a su elemento principal.
- top: 0; right: 0; left: 0; bottom: 0;: Se extiende para cubrir completamente el elemento principal.
- transform: translateZ(-1px) scale(1.6);: Aplica una transformación 3D al pseudoelemento. La propiedad translateZ(-1px) desplaza el elemento hacia atrás en el eje Z (lejos de la pantalla), creando un efecto de paralaje, y scale(1.6) lo escala para que sea más grande.
- background-size: 100%;: Hace que el fondo del pseudoelemento ocupe el 100% del tamaño del elemento principal.
  z-index: -1;: Coloca el pseudoelemento detrás del contenido principal.
