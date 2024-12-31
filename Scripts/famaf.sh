#!/bin/bash

# Definición de rutas
numerico="/home/tomas/Documentos/FamaF/2doAnio/numerico"
intro_logica="/home/tomas/Documentos/FamaF/2doAnio/intro_logica/"
base_datos="/home/tomas/Documentos/FamaF/3erAnio/2doCuatri/base_de_datos/"
arqui="/home/tomas/Documentos/FamaF/3erAnio/2doCuatri/arqui/"
modelos="/home/tomas/Documentos/FamaF/4toAnio/1er/Modelos/"
lenguages="/home/tomas/Documentos/FamaF/4toAnio/1er/Lenguages/"
fisica="/home/tomas/Documentos/FamaF/4toAnio/2do/Fisica/"
logica="/home/tomas/Documentos/FamaF/4toAnio/2do/Logica/"

# Input del usuario
echo "Elige la carpeta a la que deseas acceder:"
echo "1) Numerico"
echo "2) Introducción a la Lógica"
echo "3) Base de Datos"
echo "4) Arquitectura"
echo "5) Modelos"
echo "6) Lenguajes"
echo "7) Física"
echo "8) Lógica"

read opcion

# Condiciones para seleccionar la carpeta
if [ "$opcion" -eq 1 ]; then
    cd "$numerico"
elif [ "$opcion" -eq 2 ]; then
    cd "$intro_logica"
elif [ "$opcion" -eq 3 ]; then
    cd "$base_datos"
elif [ "$opcion" -eq 4 ]; then
    cd "$arqui"
elif [ "$opcion" -eq 5 ]; then
    cd "$modelos"
elif [ "$opcion" -eq 6 ]; then
    cd "$lenguages"
elif [ "$opcion" -eq 7 ]; then
    cd "$fisica"
elif [ "$opcion" -eq 8 ]; then
    cd "$logica"
else
    echo "Opción no válida"
    exit 1
fi

# Ejecutar bash en la carpeta seleccionada
exec bash
