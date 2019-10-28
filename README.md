# Proyecto con React JS
Pasos fundamentales para instalar, generar estructura de un proyecto y crear componentes.
### Instalar React JS
Vamos a necesitar NodeJS.
Luego en la consola vamos a actualizar npm a la ultima version disponible con el el comando:

`npm install -g  npm@latest`

Con npm - version vamos a poder ver que version ahora tenemos instalada.
Es recomendable correr el comando:

`npm cache clean - force`

para limpiar el cache y permitir que se instale la version mas actualizada de React.
Ahora lo que vas a hacer es instalar unpaquete de Facebook llamado *create-react-app*

`npm install -g create-react-app`

Ahora una vez instalado este cli vamos apoder crear proyectos usando el comando:

`create-react-app NOMBRE-DEL-PROYECTO`

Esto va encargarse de crear la estructura basica de nuestro proeycto y veremos una serie de comando para poder utilizar en nuestro desarrollo. Cómo por ejemplo para correr nuestro serviodr local, incluye librerias para poder actualziar nuestras modificaciones y nos provee un package.json donde vemos las librerias utilizadas, etc.


Initialized a git repository.

Success! Created basic_react at /home/sas/Development/react/basic_react
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd basic_react
  npm start


### Estructura de un proyecto


### Componentes

se guardan dentro de /src
Puede crearse un folder components asi tener mas organizacion. tambien un folder assets para guardas los assets de ese componente. Luego hay que dentro de los componentes verificar que esten correctas las rutas.
Los nombres de los componentes empiezan con mayusculas.

MiComponente.js
Luego en su interior importamos React de la siguiente forma:

`import React from react;`

`class MiComponente extends React.component{
    #mi codigo
}`

los componentes llevan un objeto render que se encarga de devolver el contenido de dicho componente. Tiene un return que abre parentesis y en su interior lleva el codigo a retornar.

` render (){ return( <h1>Mi titulo</h1> ); } `

Luego dicho compnente requiere ser exportado para estar disponible en las paginas necesarias con el codigo:
`export default Micomponente;`

luego en el componente principal lo importamos para poder utilizarlo.
`import Micomponente from './componentes/MiComponente';`

Luego para insertarlo en el componente principal lo insertamos usand la etiqueta `<MiComponente />`





### Readme original del proyecto

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
