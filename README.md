# ToDoApp 🚀

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 13.3.2.

## Pre-requisitos 📋

_Para replicar el proyecto necesitarás una maquina con:_

- 4GB de RAM (8GB recomendable)
- 25GB de almacenamiento
- 2GHz de procesador

_En mi caso he utilizado una maquina con la última versión estable de 64 bits de la distribución Ubuntu de Linux (en ese momento la 20.04.03 LTS ). [Descargar ubuntu](https://ubuntu.com/download/desktop)_

_Empezamos a instalar  herramientas que nos serán útiles o que necesitamos para el proyecto._

_Instalamos última versión estable de Node JS para Ubuntu. Tenemos que realizar los siguientes pasos:_

- Instalar el gestor de paquetes de Node (npm)
```
sudo apt update
sudo apt install npm
```

- Instalamos con npm una utilidad para instarlar y mantener las versiones de Node (denominado con n)
```
sudo npm clean -f 
sudo npm i -g n
```

- Instalamos la última versión estable de Node JS a través de la utilidad n 
```
sudo n stable
```

_Instalamos MongoDB_
```
sudo apt install -y mongodb
```

_Ahora instalamos el gestor de repositorios (git) ya que es necesario para poder clonar el repositorio (en el caso de tenerlo instalado te puedes saltar este paso). Pondremos un ejemplo con un usuario inventado_
```
sudo apt install git 
git config --global user.name pepe
git config --global user.email pepe@gmail.com
git config --list
```
## Instalación 🔧

Primero clonaremos el proyecto y despues instalaremos todas sus dependencias

- Clonamos proyecto
```
git clone https://abelmartinezfloresUA@bitbucket.org/abelmartinezfloresua/to-do-app.git
```

- Nos movemos a to-do-app
```
cd to-do-app
```

- Instalamos dependencias
```
npm i
```

## Server de desarrollo

Ejecuta `ng serve` para un server en desarrollo. Navegando a `http://localhost:4200/`.La aplicación se recargará automaticamente si cambias algo en el algun archivo.

## Crear componentes

Ejecuta `ng generate component component-name` para generar un nuevo componente. También puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Ejecuta `ng build` para hacer la build del proyecto. Los artefactos de la build se almacenarán en el directorio `dist/`.

## Test unitarios

Ejecuta `ng test` para ejecutar las pruebas unitarias [Karma](https://karma-runner.github.io).

## Test end-to-end

Ejecuta `ng e2e` para ejecutar los test end-to-end con la plataforma que elijas. Para usar este comando, necesitas primero añadir un paquete que implemente las pruebas end-to-end.


## Api's

Para que este proyecto este 100% operativo es necesario obtener los dos repositorios de api que utiliza. Estos repositorios son:

* api-rest
    
    se ha utilizado para las tareas. Para ponerlo en marcha:

    - Clonamos proyecto
    ```
    git clone https://abelmartinezfloresUA@bitbucket.org/abelmartinezfloresua/api-rest.git
    ```

    - Nos movemos al api-rest
    ```
    cd api-rest
    ```

    - Instalamos dependencias
    ```
    npm i
    ```

    - Ejecutamos el proyecto
    ```
    npm start
    ```

* api-auth-reg: 

    se ha utilizado para la autorización y autentificación de los usuarios. Para ponerlo en marcha:

    - Clonamos proyecto
    ```
    git clone https://abelmartinezfloresUA@bitbucket.org/abelmartinezfloresua/api-auth-reg.git
    ```

    - Nos movemos a api-auth-reg
    ```
    cd api-auth-reg
    ```

    - Instalamos dependencias
    ```
    npm i
    ```

    - Ejecutamos el proyecto
    ```
    npm start
    ```

## Componentes

Para este proyecto se ha creado el componente [Task](/src/app/components/tasks/). En este componente no hemos usado estilos en css ya que se ha utilizado Bootstrap para el proyecto. En html hemos creado su estructura que se puede observar al poner en marcha la web y en el Ts hemos implementado la lógica para añadir, eliminar y actualizar tareas.

## Servicios

* Task 

    Este servicio se encuentra en [task.service.ts](/src/app/services/task.service.ts). Hemos creado los métodos para cada una de las acciones CRUD sobre la coleccion de la base de datos SD de mongo atlas denominada tareas. Del WS api-rest.

* User 

    Este servicio se encuentra en [user.service.ts](/src/app/services/user.service.ts). Hemos creado los métodos correspondientes a los endpoints que necesitaremos del WS api-auth-reg. Sirve para la autentificación y autorización de los usuarios.

## Interceptor

Se encuetra en [auth.interceptor.ts](/src/app/interceptors/auth.interceptor.ts). Este se ejecuta en todas las peticiones y lo que hace es modificar cada petición HTTP que se realice al servidor únicamente si existe un token.

## Construido con 🛠️

_Herramientas utilizadas para crear el proyecto_

* [Angular](https://angular.io/) - Para el desarrollo del cliente
* [Bootstrap](https://getbootstrap.com/) - para dar estilos

## Más ayuda

Para obtener más ayuda sobre como usar Angular CLI `ng help` o ves a esta página [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Expresiones de Gratitud 🎁

* Realizar este proyecto ha sido muy útil para aprender sobre angular. Seguramente seguiré haciendo proyectos con esta tecnología por lo potente que me ha parecido. 🤓
* También ha servido para aprender a ser más autodidacta 🌟