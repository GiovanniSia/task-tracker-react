# Trabajo Práctico Integrador - DESARROLLADOR WEB CON REACT JS - Argentina Programa 2023 :star:

<p>Trabajo Práctico Integrador realizado para la materia <b>DESARROLLADOR WEB CON REACT JS</b> brindado por el programa Argentina Programa. <br/>
La página consiste en una lista de tareas en la que el usuario podrá guardar tareas, marcarlas como completadas y borrarlas. Además se hace uso del localStorage para persistir las tareas creadas</p>

## Tecnologías :hammer:
<table align="center">
    <tr>
    <td align="center" width="100">
      <a href="#">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" width="50" height="50" alt="JavaScript" />
      </a>
      <br>JavaScript
    </td>
    <td align="center" width="100">
      <a href="#">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" width="50" height="50" alt="HTML5" />
      </a>
      <br>HTML5
    </td>
    </td> 
    <td align="center" width="100">
      <a href="#">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" width="50" height="50" alt="CSS3" />
      </a>
      <br>CSS3
    </td>
      <td align="center" width="100">
      <a href="#">
        <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" width="50" height="50" alt="JavaScript" />
      </a>
      <br>React
    </td> 
    </td>
  </tr>
</table>


## Integrantes :construction_worker:
- [Leonel Subelza](https://github.com/leonelSubelza)
- [Giovanni Sia](https://github.com/GiovanniSia)
- [Rodigo Tapia](https://github.com/roi-utn-08)


## Consigna :dart:
Crear una aplicación web utilizando React que permita gestionar una lista de tareas. La aplicación deberá hacer uso de componentes funcionales, el hook useState para el manejo del estado, el hook useEffect para realizar efectos secundarios, y eventos para interactuar con el usuario.

## Requerimientos :page_with_curl:

### Componentes Funcionales:
  - <b>Componente de Lista de Tareas (TaskList)</b>:
    Este componente deberá mostrar la lista de tareas. Recibirá como propiedades la lista de tareas y funciones para gestionar eventos relacionados con las tareas (por ejemplo, marcar como completada, eliminar, etc.). Cada tarea debe representarse mediante un componente TaskItem.
  -  <b>Componente de Tarea (TaskItem)</b>: Este componente deberá representar individualmente una tarea. Mostrará el nombre de la tarea y un botón para completarla. Utilizará el estado local para gestionar la apariencia de la tarea (por ejemplo, tachado cuando esté completada).
  - <b>Componente de Formulario (TaskForm)</b>: Este componente contendrá un formulario para agregar nuevas tareas. Utilizará el estado local para gestionar la entrada del usuario y enviará la nueva tarea a la lista principal.

### Estado con useState:
  - <b>Estado Principal (tasks)</b>: Utilizar el hook useState en el componente principal para gestionar el estado de la lista de tareas. Cada tarea debe ser un objeto con propiedades como id, nombre, y completada.
  - <b>Efectos con useEffect</b>: Efecto de Actualización (useEffect en el componente principal): Utilizar useEffect para realizar una acción (por ejemplo, mostrar un mensaje) cuando el estado de la lista de tareas cambie.

### Interacción con el Usuario - Eventos:
- <b>Eventos en Componente de Lista (TaskList)</b>: Implementar eventos que permitan al usuario interactuar con cada tarea (marcar como completada, eliminar, etc.). Estos eventos deberán modificar el estado principal (tasks).
- <b>Eventos en Componente de Formulario (TaskForm)</b>: Implementar eventos para gestionar la entrada del usuario y agregar nuevas tareas a la lista.

### Estilo y Diseño:
Aplicar estilos CSS para mejorar la apariencia de los componentes. Puede utilizar
bibliotecas como styled-components si lo desea.

### Puntos Extra (Opcionales):
Implementar la persistencia de datos utilizando localStorage para que las tareas
persistan incluso después de recargar la página.

## Tecnologías a utilizar :bulb:
- HTML
- CSS
- JS
- React Js
