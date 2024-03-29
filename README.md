![logo_75]

## Bienvenido a toastboots-custom [(english info here)](#english-info)

Este es un complemento de Jquery que se puede usar para generar un toast de bootstrap personalizado.

[Página demo]

### Requisitos

Estos son los requisitos para usar toastboots-custom:

1. Bootstrap V4.3 [Bootstrap página]
2. jQuery 3.4.1 [jQuery página]
3. Font Awesome **(opcional)** [Font Awesome página]

### Instalación

- Debe incorporar a su proyecto [Bootstrap], para este se utilizó **bootstrap.bundle.min**, debe agregar tanto el **.css** como el **.js**, incluidos en el **[Compilado CSS y JS]**.

- Debe incorporar también [jQuery], debe ser el primero de todos los archivos **.js**.

- Opcional [Font Awesome] o cualquier framework de iconos, porque pueden ser utilizados dentro en **toastboots-custom**.

- Incorporar todos los archivos que forman parte del funcionamiento de toastboots-custom.
    1. toastboots-custom-errors_es.min.js o toastboots-custom-errors_es.js
    2. toastboots-custom-errorshandler.min.js o toastboots-custom-errorshandler.js
    3. toastboots-custom.min.js o toastboots-custom.js

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
    <script type="text/javascript" src="tu-ruta/toastboots-custom-errors_es.min.js"></script>
    <script type="text/javascript" src="tu-ruta/toastboots-custom-errorshandler.min.js"></script>
    <script type="text/javascript" src="tu-ruta/toastboots-custom.min.js">
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
                posx: '',
                errors: ''
            });
        });
    </script>
````
Y podrá ser llamado desde diferentes funciones o en algún evento de los elementos del DOM, a criterio del desarrollador.

### Propiedades

A continuación se listan todas la propiedades de la personalización del **toastboots-custom**, todas excepto la propiedad **type** tienen un valor por defecto si se omite su declaración o se deja en blanco.

La propiedad **type** le da un estilo de las 29 combinaciones que posee el complemento ya preestablecidas. Si se declara esta propiedad no es necesario declarar las propiedades, **titleBg titleTc subtitleTc timesTc contentBg y contentTc**

|Propiedad|Descripción|
|:---|:---|
|**site**|Lugar donde aparecerá el toast, si se omite o se deja en blanco por defecto es **'body'**.|
|**title**|Título del toast, por defecto es **'Notice!'**.|
|**titleBg**|Color de fondo del título, por defecto es **'bg-primary'**.|
|**titleTc**|Color de texto del título, por defecto es **'text-white'**.|
|**subtitle**|Subtítulo del toast, por defecto es **'Now'**.|
|**subtitleTc**|Color de texto del subtitulo, por defecto es **'text-white'**.|
|**timesTc**|Color de texto del times (X), por defecto es **'text-light'**.|
|**content**|Texto del contenido del toast, por defecto es **'Hello World, this is a toast'**.|
|**contentBg**|Color de fondo del contenido, por defecto es **'bg-white'**.|
|**contentTc**|Color del Texto del contenido, por defecto **'text-dark'**.|
|**type**|Tipo de toast, aquí se puede elegir entre 29 combinaciones de colores predefinidas, no tiene valor por defecto.|
|**animation**|Activa o no la animación del toast, **'true'** activa, **'false'** inactiva, por defecto es **'true'**.|
|**autohide**|Activa o no el autohide del toast, **'true'** activa, **'false'** inactiva, por defecto es **'true'**, si es colocado en **'false'** el usuario deberá cerrar el toast y la propiedad **delay** será omitida.|
|**delay**|Tiempo de retardo para que el toast se oculte si la propiedad **autohide** está activa **'true'**. Su valor es en milisegundos, 1000 = 1s, valor por defecto 3000 = 3s.|
|**width**|Ancho del toast, debe ser definido en pixeles con el valor+px ejemplo **'150px'**, el valor por defecto es **'auto'**, el cual se adapta al contenido.|
|**posy**|Posición del toast en el eje **"Y"** en relacíón a la propiedad **site**, ejemplo **'top:10'** o **'bottom:20'**, por defecto es **top:0**|
|**posx**|Posición del toast en el eje **"X"** en relacíón a la propiedad **site**, ejemplo **'left:10'** o **'right:20'**, por defecto es **right:0**|
|**errors**| Activa o no mostrar errores en console.log(), por defecto es **false**|

### Remover el toastboots-custom del DOM

Para hacer esto, solo debe agregar el siguiente código en su **<script> </script>**, que es un evento que se dispara cuando el toast ha terminado de ocultarse al usuario.

````html
    <script type="text/javascript">
        $("document").ready(function(){
            $(document).on('hidden.bs.toast','.toast',function (e) {
                $(this).remove();
            });
        });
    </script>
````

### Para tomar en cuenta

Este complemento utiliza las clases de boostrap para colores de texto y de fondo.

1. [VER COLORES DE TEXTO Y  DE FONDOS](#coloryfondo)
2. [VER COMBINACIONES PREESTABLECIDAS](#preestablecidas)

### Colaboración

Si deseas colaborar con el mejoramiento u optimización de este complemento, solo debes escribir y aportar lo que desees y se te puede agregar como colaborador.

Puede ser incluso traduciendo a otros idiomas la información del complemento o de los mensajes de errores.

___
___
## Welcome to toastboots-custom <a name="english-info"></a>

This is a Jquery plugin wich can be use to generate customize bootstrap toast.

[Demo page]

### Requirements

This are the requirements to can use toastboots-custom:

1. Bootstrap V4.3 [Bootstrap page]
2. jQuery 3.4.1 [jQuery page]
3. Font Awesome **(optional)** [Font Awesome page]

### Installation

- You must add [Bootstrap] to your project, **bootstrap.bundle.min** was used for this, you must add both **.Css** and **.Js**, included on **[Compiled CSS and JS]**.

- You must also incorporate [jQuery], it must be the first of all the **.js** files.

- Optional [Font Awesome] or any icon framework, because they can be used in **toastboots-custom**.

- Incorporate all files that are part of the operation of toastboots-custom
    1. toastboots-custom-errors_en.min.js o toastboots-custom-errors_en.js
    2. toastboots-custom-errorshandler.min.js o toastboots-custom-errorshandler.js
    3. toastboots-custom.min.js o toastboots-custom.js

It should look like this:
````html
<head>
    <link rel="stylesheet" type="text/css" href="you-path/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="you-path/font-awesome.min.css">
</head>
<body>
    <script type="text/javascript" src="your-path/jquery3.4.1.min.js"></script>
    <script type="text/javascript" src="your-path/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="your-path/font-awesome.min.js"></script>
    <script type="text/javascript" src="your-path/toastboots-custom-errors_en.min.js"></script>
    <script type="text/javascript" src="your-path/toastboots-custom-errorshandler.min.js"></script>
    <script type="text/javascript" src="your-path/toastboots-custom.min.js">
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
                posx: '',
                errors:''
            });
        });
    </script>
````
And it can be called from different functions or in some event of the elements of the DOM, at the discretion of the developer.

### Properties

Listed below are all the customization properties of the **toastboots-custom**, all except the **type** property have a default value if their declaration is omitted or left blank.

The **type** property gives you a style of the 29 combinations that the pre-established complement has. If this property is declared it is not necessary to declare the properties, **titleBg titleTc subtitleTc timesTc contentBg and contentTc**

|Property|Description|
|:---|:---|
|**site**| Place where the toast will appear, if omitted or left blank by default is **'body'**.|
|**title**| Toast title, default is **'Notice!'**.|
|**titleBg**| Background color of the title, by default it is **'bg-primary'**.|
|**titleTc**| Title text color, default is **'text-white'**.|
|**subtitle**| Toast subtitle, by default it is **'Now'**.|
|**subtitleTc**| Subtitle text color, default is **'text-white'**.|
|**timesTc**| Text color of the times (X), by default it is **'text-light'**.|
|**content**| Toast content text, default is **'Hello World, this is a toast'**.|
|**contentBg**| Background color of the content, by default it is **'bg-white'**.|
|**contentTc**| Content Text Color, by default **'text-dark'**.|
|**type**| Toast type, here you can choose from 29 predefined color combinations, it has no default value.
|**animation**| Activate or not toast animation, **'true'** active, **'false'** inactive, default is **'true'**.|
|**autohide**| Activate or not the toast autohide, **'true'** active, **'false'** inactive, default is **'true'**, if set to **'false'** the user must close the toast and the **delay** property will be omitted.
|**delay**| Delay time for the toast to hide if the **autohide** property is active **'true'**. Its value is in milliseconds, 1000 = 1s, default value 3000 = 3s.
|**width**| Width of the toast, must be defined in pixels with the value+px example **'150px'** or **'300px'**, the default value is **'auto'**, which adapts to the content.|
|**posy**| Position of the toast on the axis **"Y"** in relation to the property **site**, example **'top:10'** or **'bottom:20'**, default is **top:0**|
|**posx**| Position of the toast on the axis **"X"** in relation to the property **site**, example **'left:10'** or **'right:20'**, default is **right:0**|
|**errors**| Activate or not show errors on console.log(), default is **false**|

### Remove the toastboots-custom from the DOM

To do this, just only must add next code in your **<script> </script>**, that is an event who is fired when the toast has finished being hidden from the user.

````html
    <script type="text/javascript">
        $("document").ready(function(){
            $(document).on('hidden.bs.toast','.toast',function (e) {
                $(this).remove();
            });
        });
    </script>
````

### To take consideration

This plugin uses bootstrap classes for text colors and background colors.

1. [SEE TEXT COLORS AND BACKGROUND COLORS](#coloryfondo)
2. [SEE PRE-ESTABLISHED COMBINATIONS](#preestablecidas)

### Collaboration

If you want to collaborate with the improvement or optimization of this complement, you just have to write and contribute what you want and you can add it as a collaborator.

It may even be translating the add-in information or error messages into other languages.

___

## Colores de texto y fondo / Text and background Colors <a name="coloryfondo"></a>
![tbg-colors]

## Combinaciones preestablecidas / Pre-established combinations <a name="preestablecidas"></a>
![preestablecidas]
___
## Frameworks y librerías / Frameworks and Libraries

* [Bootstrap (página/page)]
* [jQuery (página/page)]
* [Font Awesome (página/page)]

[logo_75]:img/logo_75.png
[Bootstrap página]:https://getbootstrap.com/
[jQuery página]:https://jquery.com/
[Font Awesome página]:https://fontawesome.com/
[Bootstrap page]:https://getbootstrap.com/
[jQuery page]:https://jquery.com/
[Font Awesome page]:https://fontawesome.com/
[Bootstrap (página/page)]:https://getbootstrap.com/
[jQuery (página/page)]:https://jquery.com/
[Font Awesome (página/page)]:https://fontawesome.com/
[Bootstrap]:https://getbootstrap.com/docs/4.3/getting-started/download/
[jQuery]:https://code.jquery.com/jquery-3.4.1.min.js
[Font Awesome]:https://use.fontawesome.com/releases/v5.11.2/fontawesome-free-5.11.2-web.zip
[Compilado CSS y JS]:https://github.com/twbs/bootstrap/releases/download/v4.3.1/bootstrap-4.3.1-dist.zip
[Compiled CSS and JS]:https://github.com/twbs/bootstrap/releases/download/v4.3.1/bootstrap-4.3.1-dist.zip
[tbg-colors]: img/tbg-colors.png
[preestablecidas]: img/preestablecidas.png
[Página demo]:https://dev.netvicios.com/
[Demo page]:https://dev.netvicios.com/