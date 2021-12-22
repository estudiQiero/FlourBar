FlourBar By Miq 2021

Concepto de barra de progreso para web de cliente de inmobiliaria.

Basado en la idea del progreso en la venta de pisos de una promoción, donde el porcentaje de pisos vendidos es cada vez mayor, la barra verde de pisos libres va perdiendo protagonismo.

Se puede configurar la cantidad de pisos de la promoción. Más adelante se permitirá concretar pisos reservados.

![Screenshot](/images/Pantallas-Flourbar.jpg)

En realidad, la aplicación es una especie de stand alone, ya que no se integra en la web. Solamente la barra de progreso es la que aparecería gráficamente en la página del cliente. Para hacerla efectiva haría falta un backend desde donde controlarla.

Aun tiene algunos fallos que hay que corregir, como por ejempo que no cambia la clase "vendido" cuando reseteamos el contenido, o si escribimos alguna letra en lugar de números en los campos vacíos, aparece un NaN q no queda muy bonito.

v.1.0

La aplicación ya permite 'jugar' con ella.

Se han solucionado todos los errores que no permitían operar, o no la hacían funcional.
- Al añadir Pisos Vendidos desde el campo de entrada, éstos se acumulan, tanto en color de la barra, como en porcentaje.
- Al llegar al 100% de Pisos Vendidos, deja de acumular datos, tanto en color de la barra, como en porcentaje.
- Si se introducen datos erróneos en el campo de Pisos Vendidos, los ignora, hasta que no sea un número.
- Si el número introducido es superior al total o al número de Pisos Libres, ignora el dato introducido.
- Se ha añadido bajo la Barra de Progreso, los datos de Pisos vendidos y Pisos libres.
- Solucionado el mal funcionamiento del botón de Resetear. Ahora borra todos los bloques, excepto uno, elimina el color rojo y deja el verde, modifica los datos bajo Pisos vendidos y Pisos libres al estado original.
- Cambiado logotipo FlourBar con colores correctos.