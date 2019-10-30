## Bienvenido a toastboots-custom [(english info here)](#english-info)

Este es un complemento de Jquery que se puede usar para generar un toast de bootstrap personalizado.

### Requisitos

Estos son los requisitos para usar toastboots-custom:

1. Bootstrap V4.3 [Bootstrap página]
2. jQuery 3.4.1 [jQuery página]
3. Font Awesome **(opcional)** [Font Awesome página]

### Instalación

- Debe incorporar a su proyecto [Bootstrap], para este se utilizó **bootstrap.bundle.min**, debe agregar tanto el **.css** como el **.js**, incluidos en el **[Compilado CSS y JS]**.

- Debe incorporar también [jQuery], debe ser el primero de todos los archivos **.js**.

- Opcional [Font Awesome] o cualquier framework de iconos, ya que pueden ser utilizados dentro de **toastboots-custom**.

- Y por supuesto incorporar [toastboots-custom].

Se debe ver así:
````html
<head>
    <link rel="stylesheet" type="text/css" href="tu-ruta/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="tu-ruta/font-awesome.min.css">
</head>
<body>
    <script type="text/javascript" src="tu-ruta/jquery3.4.1.min.js"></script>
    <script type="text/javascript" src="tu-ruta/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="tu-ruta/font-awesome.min.js"></script>
    <script type="text/javascript" src="tu-ruta/toastboots-custom.js">
</body
````
### Como funciona

Para usar **toastboots-custom** deberás agregar el siguiente código a su **<script></script>**
De la siguiente manera:

````hmtl
    <script type="text/javascript">
        $("document").ready(function(){
            $.toast({
                site: '',
                title: '',
                titleBg: '',
                titleTc: '',
                subtitle: '',
                subtitleTc: '',
                timesTc : '',
                content: '',
                contentBg: '',
                contentTc: '',
                type: '',
                animation: '',
                autohide: '',
                delay: '',
                width : '',
                posy: '',
                posx: ''
            });
        });
    </script>
````
Y podrá ser llamado desde diferenctes funciones o en algún evento de los elementos del DOM, a criterio del desarrollador.

## Welcome to toastboots-custom <a name="english-info"></a>

This is a Jquery plugin wich can be use to generate customize bootstrap toast.

### Requirements

This are the requirements to can use toastboots-custom:

1. Bootstrap V4.3 [Bootstrap page]
2. jQuery 3.4.1 [jQuery page]
3. Font Awesome **(optional)** [Font Awesome page]

### Installation

- You must add [Bootstrap] to your project, **bootstrap.bundle.min** was used for this, you must add both **.Css** and **.Js**, included on **[Compiled CSS and JS]**.

- You must also incorporate [jQuery], it must be the first of all the **.js** files.

- Optional [Font Awesome] or any icon framework, since they can be used within **toastboots-custom**.

-- And of course incorporate [toastboots-custom]

It should look like this:
````html
<head>
    <link rel="stylesheet" type="text/css" href="tu-ruta/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="tu-ruta/font-awesome.min.css">
</head>
<body>
    <script type="text/javascript" src="tu-ruta/jquery3.4.1.min.js"></script>
    <script type="text/javascript" src="tu-ruta/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="tu-ruta/font-awesome.min.js"></script>
    <script type="text/javascript" src="tu-ruta/toastboots-custom.js">
</body
````
### How does it work

To use **toastboots-custom** you must add the following code to your **<script> </script>**
As follows:

````hmtl
    <script type="text/javascript">
        $("document").ready(function(){
            $.toast({
                site: '',
                title: '',
                titleBg: '',
                titleTc: '',
                subtitle: '',
                subtitleTc: '',
                timesTc : '',
                content: '',
                contentBg: '',
                contentTc: '',
                type: '',
                animation: '',
                autohide: '',
                delay: '',
                width : '',
                posy: '',
                posx: ''
            });
        });
    </script>
````
And it can be called from different functions or in some event of the elements of the DOM, at the discretion of the developer.

### Frameworks y librerías / Frameworks and Libraries

* [Bootstrap (página/page)]
* [jQuery (página/page)]
* [Font Awesome (página/page)]

[Bootstrap página]:https://getbootstrap.com/
[jQuery página]:https://jquery.com/
[Font Awesome página]:https://fontawesome.com/
[Bootstrap page]:https://getbootstrap.com/
[jQuery page]:https://jquery.com/
[Font Awesome page]:https://fontawesome.com/
[Bootstrap página/page]:https://getbootstrap.com/
[jQuery página/page]:https://jquery.com/
[Font Awesome página/page]:https://fontawesome.com/
[Bootstrap]:https://getbootstrap.com/docs/4.3/getting-started/download/
[jQuery]:https://code.jquery.com/jquery-3.4.1.min.js
[Font Awesome]:https://use.fontawesome.com/releases/v5.11.2/fontawesome-free-5.11.2-web.zip
[Compilado CSS y JS]:https://github.com/twbs/bootstrap/releases/download/v4.3.1/bootstrap-4.3.1-dist.zip
[Compiled CSS and JS]:https://github.com/twbs/bootstrap/releases/download/v4.3.1/bootstrap-4.3.1-dist.zip