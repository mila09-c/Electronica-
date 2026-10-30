### 1. Título del proyecto
Nombre: OYENTES DESVELADOS

### 2. Descripción
Este es un sitio web dedicado a los oyentes que disfrutan de la música y el entretenimiento nocturno.
Aquí te explicamos algunos de los géneros que existen, al igual los subgéneros de estos. 

El contenido es oferecerte una introducción de esta misma, la historia estos generos, algunas de las canciones reconocidas. No solo eso, te puedes inscribir a los eventos que se encuentren disponibles, mercancías de discos y en línea.

### 3. Tecnologías utilizadas
Lenguajes:
HTML5: Utilizado para la estructura y maquetación web semántica (<header>, <nav>, <article>, <section>, <aside>, <footer>, <time>, formularios e incrustación de audio con <audio>).

CSS3: Implementado para el diseño visual, combinando hojas de estilo externas (style.css, electro.css), bloques <style>. Se hace uso de layouts con Flexbox (display: flex) y CSS Grid (display: grid).

JavaScript (Vanilla JS / ES6+): Empleado en interactividad del cliente (como en evento.html) mediante eventos DOM (addEventListener), iteración y filtrado de datos en memoria (filter, map), manipulación sintáctica del DOM y plantillas de texto (template literals).

Markdown: Utilizado para la documentación técnica y organización del repositorio mediante archivos README.md.

### 4. Requisitos previos
Herramientas de Desarrollo y Entorno:

Visual Studio Code (VS Code): Editor principal de código fuente para la edición HTML/CSS/JS y previsualización del sitio.

Git y GitHub: Control de versiones y plataforma de alojamiento para gestionar la estructura de carpetas y compartir el código del repositorio.

Navegador web moderno: Edge / Brave

### 5. Instalación
1. Extensión para instalar: Live Server.

2. Instalacion de Git: Desde la página oficial (git-scm.com)

3. Configuración de identidad: Desde la terminal de VS Code, los comados fueron los siguientes:
git config --global user.name "XXX_00"
git config --global user.email "XXXXXX@gmail.com"

4. Vinculación de cuenta: Se autenticó el editor con la cuenta de GitHub mediante el navegador web (Sign in with your browser / Authorize VisualStudioCode) para otorgar permisos de lectura y escritura al repositorio remoto.

5. Errores que hubieron y se solucionaron mediante:
Descarga de la nueva estructura del equipo (Proyecto): git pull origin main --rebase
Aceptación de cambios e integración local: git add .
Confirmación de la fusión de código: git commit -m "Merge resuelto"
Sincronización final al repositorio remoto: git push -u origin main --force

### 6. Uso
Abre el archivo `index.html` en tu navegador

## Características

- Estructura semántica de HTML5: Uso constante de etiquetas semánticas como <nav>, <aside>, <header>, <main>, <article>, <section> y <footer>.  

- Navegación y enlaces globales: Implementación de barras de navegación (menu-lateral / MenuLateral) con enlaces directos hacia Inicio (index.html), Discos/Línea (disli.html) y Eventos (evento.html). 

- Elementos multimedia e interactividad: Inclusión de reproducción de audio de fondo con la etiqueta <audio autoplay>, catálogos de tiendas externas con apertura en pestañas independientes (target="_blank"), y scripts interactivos de filtrado por fechas utilizando JavaScript en la sección de eventos.  

- Consistencia de marca e identidad: Uso recurrente del pie de página (footer) con datos institucionales de contacto (correo electrónico, teléfono y dirección) e hipervínculos hacia recursos visuales y hojas de estilo compartidas.  

- Uso de estilos mediante CSS externo: mayor parte de las páginas contienen su propio archivo .CSS que permite personalización para todos los autores.

## Autores

Marco Patricio Guiterrez Amor
Ilde Rayón Cid
Manuel Rodriguez Moran
Carolina Reyes Pitones

**Ilde**

- Email: ilray930@gmail.com

**Patricio**

- Email: macpat109@hotmail.com

**Carolina**

- Email: reypit16@gmail.com

**Manuel**

- Email: manumoran212@gmail.com

---