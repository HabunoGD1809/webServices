# Agenda de Contactos

Agenda de Contactos es una aplicación web que te permite gestionar tus contactos de forma sencilla. Puedes agregar nuevos contactos, ver la lista completa y realizar otras operaciones relacionadas.

## Tecnologías Utilizadas

- **Node.js**: Un entorno de ejecución de JavaScript en el servidor.
- **Express.js**: Un marco de trabajo web rápido y minimalista para Node.js.
- **node-fetch**: Un módulo para realizar solicitudes HTTP en Node.js.
- **HTML5**, **CSS3** y **JavaScript (ES6+)**: Lenguajes web estándar para construir la interfaz de usuario y la lógica del lado del cliente.

## Estructura del Proyecto

```
.
├── .gitignore
├── .vscode
│   └── settings.json
├── css
│   └── style.css
├── index.html
├── js
│   └── scripts.js
└── service
    ├── app.js
    └── package.json
```

- `index.html`: Archivo HTML principal que contiene la estructura y el contenido de la página web.
- `css/style.css`: Archivo CSS que contiene los estilos personalizados de la aplicación.
- `js/scripts.js`: Archivo JavaScript que maneja la lógica del lado del cliente y la interacción con el servidor.
- `service/app.js`: Archivo JavaScript que contiene el servidor backend construido con Express.js.
- `service/package.json`: Archivo de configuración de Node.js que contiene las dependencias del proyecto.

## Instalación y Configuración

1. Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.
2. Clona este repositorio o descarga los archivos.
3. Navega hasta el directorio `service` del proyecto.
4. Ejecuta `npm install` para instalar las dependencias del proyecto.

## Ejecución del Proyecto

1. Desde el directorio `service`, ejecuta `node app.js` para iniciar el servidor backend.
2. Abre tu navegador web y visita `http://localhost:3000` para acceder a la aplicación.

## Contribución

Si deseas contribuir a este proyecto, puedes seguir estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/NuevaFuncionalidad`).
3. Realiza los cambios deseados y commit tus modificaciones (`git commit -m 'Agrega nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/NuevaFuncionalidad`).
5. Abre una Pull Request en este repositorio.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
