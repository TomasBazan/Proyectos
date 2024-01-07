## What do I learn?

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
