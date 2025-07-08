# Catálogo de Productos de Videojuegos

Esta aplicación es un frontend sencillo desarrollado en React que muestra un catálogo de productos de videojuegos, organizados por categorías. Toda la información de los productos está almacenada localmente como mock data, sin dependencia de APIs externas.

## Características

*   **Listado de Productos:** Muestra un mínimo de 6 productos de videojuegos con su nombre, imagen, descripción corta, precio y categoría.
*   **Filtrado por Categoría:** Permite a los usuarios filtrar los productos por categorías (Consolas, Juegos, Accesorios) utilizando botones.
*   **Diseño Minimalista:** La interfaz de usuario sigue un diseño limpio y minimalista con una paleta de colores grises.

## Instalación y Ejecución

Para ejecutar la aplicación localmente, sigue estos pasos:

1.  **Clona el repositorio** (si aplica, o asegúrate de tener los archivos del proyecto).
2.  **Navega al directorio `app`:**
    ```bash
    cd app
    ```
3.  **Instala las dependencias:**
    ```bash
    npm install
    ```
4.  **Inicia la aplicación en modo desarrollo:**
    ```bash
    npm run dev
    ```

La aplicación se abrirá en tu navegador en `http://localhost:5173` (o un puerto similar).

## Estructura del Proyecto

*   `app/src/App.jsx`: Componente principal de React que maneja la lógica de filtrado y la renderización de los productos.
*   `app/src/products.js`: Archivo que contiene el array de objetos con los datos mock de los productos.
*   `app/src/App.css`: Contiene los estilos CSS para la aplicación.

## Asistencia de Inteligencia Artificial

Para el desarrollo de esta aplicación, se ha utilizado la siguiente herramienta de inteligencia artificial:

*   **Gemini (a través de Cursor):** Un modelo de lenguaje grande de Google.

### Utilidad de la Asistencia de IA:

La asistencia de Gemini fue crucial en varias etapas del desarrollo:

1.  **Generación de Estructura Inicial:** Ayudó a establecer la estructura básica del proyecto en React y la configuración inicial de los componentes.
2.  **Creación de Mock Data:** Asistió en la definición y generación del archivo `products.js` con el formato y los campos requeridos para cada producto.
3.  **Implementación de Lógica de Filtrado:** Proporcionó la lógica para filtrar los productos por categoría de manera eficiente, utilizando el estado de React y `useEffect`.
4.  **Adaptación y Refactorización:** Fue fundamental para refactorizar el código cuando se cambiaron los requisitos (de una API externa a datos locales), eliminando las dependencias externas y ajustando la lógica de manejo de datos.
5.  **Revisión y Ajuste de Estilos:** Colaboró en la creación y ajuste de los estilos CSS para lograr el diseño minimalista deseado y asegurar una experiencia de usuario consistente.

### Reflexión sobre la utilidad de la IA:

La inteligencia artificial ha demostrado ser una herramienta invaluable para acelerar el proceso de desarrollo y mejorar la calidad del código. Su capacidad para generar código boilerplate, refactorizar secciones y adaptar soluciones a nuevos requisitos permite a los desarrolladores enfocarse en problemas más complejos. Facilita la implementación de buenas prácticas y reduce el tiempo de depuración, aunque siempre requiere supervisión humana para asegurar la coherencia y el cumplimiento de los objetivos específicos del proyecto. En tareas como la creación de interfaces de usuario y la gestión de datos locales, la IA simplifica enormemente la carga de trabajo repetitiva y fomenta un desarrollo más ágil y eficiente. 