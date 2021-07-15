# Sprint 2

## Reserva de Alojamientos

El desafío consiste en la creación de una aplicación web interactiva, poniendo en práctica los fundamentos de la
programación y el uso de React como líbreria.

## Preparación

Revisar los requisitos en la plataforma de Acamica, esta vez el enfoque se encuentra en la lógica de JavaScript y el uso
de React como librería

1. Descargar los recursos del proyecto
2. Organizar los archivos (`create-react-app`)
3. Configurar los estilos iniciales

Decidí usar `CSS Grid` para formar un layout simple, traté de usar el modulo de `styled-components` para usar CSS dentro del React component pero me pareció un poco complicado al momento de ingresar contenido en los componentes.

También pensé usar `MaterialUI` como librería, pero eso requería dedicar más tiempo al aprendizaje de la librería así que solo tomaré los componentes que necesite de ella y lo demás lo estilizaré con `CSS modules` ya que sería una transición suave de HTML y CSS a React.

## Desarrollo

-   Gracias al primer sprint, dedique bastante tiempo a los estilos de la aplicación, solo que esta vez lo hice por componentes
-   Los componentes son responsive, y se ajustan a cualquier pantalla.
-   Utilicé VSCode para desarrollar el código, pues Codesandbox posee muchos errores de latencia
-   Son tres componentes principales, `<Header />`, `<Navbar />` y `<Hotels />`
-   `<Header />` contiene el encabezado y se modifica dinámicamente, dependiendo el filtro seleccionado
-   `<Navbar />` contiene los filtros, donde seleccionas el que deseas, cada filtro es un `input` por lo que al cambio (`onChange`) el estado se modifica
-   `<Hotels />` contiene la lista de hoteles renderizados, después de aplicar filtros, si no hay filtros, se renderizan todos los hoteles disponibles.

## Obstáculos

1. Me enfoque tanto en los componentes, que olvidé de que forman parte del todo del proyecto
2. El estilo quedó listo, pero la funcionalidad no era compatible con el diseño que había creado
3. El estado global con useState() trajo muchas complicaciones, así que hice un estado por cada filtro
4. Crear funciones que se utilicen en cualquier contexto.

## Conclusión

1. Empezar desde la funcionalidad y después con el estilo

2. Descubrir la mejor forma de hacer las cosas, es con base a la experiencia

3. Crear una lista de tareas y un mapa conceptual sería lo más práctico.

## Enlaces

Puedes ver la presentación del proyecto en este link https://www.canva.com/design/DAEkHfuDC1Q/V5kXSOrzzRogOeewHWTC2Q/view

El proyecto se encuentra en este link https://sprint-2-acamica.vercel.app/

Link a GitHub https://github.com/DavidSalomonDev/sprint-2_acamica
