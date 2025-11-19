# Testing Front End AF 50500 – Grupo 85294

Fecha inicio: 17/11/2025
Fecha fin: 20/11/2025
Días 17, 18, 29 y 20 Noviembre 2025
Horario: 9:30 - 14:30
Duración: 20 horas 4 sesiones de 5 horas

Formador: Alejandro Cerezo Lasne
<alce65@hotmail.es>

Repositorio del curso: [GitHub - Testing Frontend](https://github.com/IconoTC/Testing-Front-End-AF-50500-Grupo-85294)

Temario

- Introducción
- Pruebas de Unidad e Integración en JavaScript
- Pruebas de Aceptación
- Testing Library
- Pruebas de Accesibilidad
- Integración DevOps

Proxy info

Si estás detrás de un proxy, configura npm con los siguientes comandos:

```shell
npm config set proxy http://username:password@host:port
npm config set https-proxy http://username:password@host:port
```

El resultado se almacena en el fichero user/.npmrc

## Desarrollo del curso

### Día 1. Lunes 27/10/2025

- Presentación del curso, el formador y los alumnos.
- Introducción a las pruebas de software.
- Configuración del entorno de desarrollo con Vitest.
  - Monorepo con npm
  - Proyecto con Vite - TS - React - Vitest - Testing Library
  - Proyecto con TS y Vitest
- Elementos de los tests unitarios

  - Estructura de los tests. Suites. Teardown o Setup.
  - Primer tests con Vitest

- [Descanso] - 11:45 a 12:10

- Elementos de los tests unitarios

  - Patrones: Given, When, Then (Gherkin). Arrange, Act, Assert.
  - Primeros tests unitarios con Vitest
    - Matches
    - Matches de errores

- Taller de TDD: Factorial
  - Desarrollo del proceso TDD
  - Refactorización: Automatizando casos de uso
  - Casos de uso extremos (corner cases) y casos de uso límite (boundary cases)
  - Extracción de funciones auxiliares (mencionado)

### Día 2. Martes 28/10/2025

- Test de Funciones

  - Asincronía
    - Mocks y Spies
    - Caso real: getUsers con fetch y axios (creado sin tests)
    - Testando getUsers con fetch y axios
    - Spies en Vitest

- [Descanso] : 11:55 a 12:15

- Tests de Componentes con Testing Library
- Conceptos básicos de Testing Library
  - Renderizado de componentes
  - Búsqueda de elementos
  - Simulación de eventos
- Primeros tests de componentes a partir de la App ejemplo
  - Footer: render element
  - Header: props
  - Counter: events
  - Card: children
  - App: solo render
- Actualización de la configuración de testing

### Día 3. Miércoles 29/10/2025

- Nuevo proyecto
- Tests de Componentes con rutas
  - Configuración de rutas con React Router
  - Testando rutas sin carga diferida (lazy)
  - Componente Menú
- [Descanso] : 11:45 a 12:05


- Tests de Componentes con rutas
  - Test del menú
  - Testando rutas con carga diferida (lazy)

- Formularios y validaciones
  - Testando formularios controlados
  - (Testando formularios no controlados)
  - (Formularios y validaciones)

- Gestión de asincronía en tests
  

<!--
<!-- ### Día 4. Jueves 30/10/2025


- Custom hooks
  - Introducción a los custom hooks
  - Testando custom hooks desde el componente
- Context API

  - Introducción a la Context API de React
  - Testando componentes que consumen contextos

Pendiente del inicio

- Tests de Clases
  - Interfaces
  - Capa repositorio
  - Capa servicio estado

- Pruebas e2e y de Accesibilidad con Playwright

  - Introducción a Playwright
  - Instalación. Browsers
  - Ejemplos de tests e2e
  - Comandos disponibles
    - CLI
    - Report
    - UI

- [Descanso]

- Tests e2e con Playwright (continuación)

  - Localizadores y aserciones
  - Navegación por rutas
  - Interacción con formularios
  - Credenciales y autenticación
  - Tests de APIs

- Testando accesibilidad con Playwright
  - Navegación por teclado
  - Validación de roles ARIA
  - Captura y comparación de snapshots de accesibilidad
  - Extensión axe-core en Playwright -->
