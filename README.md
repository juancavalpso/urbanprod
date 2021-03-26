

> npm install yarn -g
> yarn init


# Informacion 
-Express.js: Un Framework de node.js que facilita la creación de aplicaciones web.
-mongodb: Driver oficial de MongoDB para Node.js
-mongoose: Una herramienta de modelado de objetos diseñada para trabajar en un entorno asíncrono. Usaremos mongoose para definir esquemas e interactuar con la base de datos.
-bcrypt.js: esto nos ayudará a aplicar hash a las contraseñas de los usuarios antes de almacenarlas en la base de datos.
-validator: utilizaremos este paquete para validar y desinfectar la entrada del usuario, por ejemplo, debemos asegurarnos de que un usuario nos envíe un correo electrónico en el formato correcto.
-Jsonwebtoken: el JSON web token (JWT) se utilizará para autenticación y autorización. Este paquete ayudará a configurar rutas protegidas a las que solo pueden acceder los usuarios registrados.
-env-cmd: esto nos permitirá crear y administrar variables de entorno en nuestro proyecto.
-nodemon: Nodemon volverá a ejecutar el servidor express cada vez que realicemos cambios en nuestro código.

# Git 
echo "# urbanprod" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/juancavalpso/urbanprod.git
git push -u origin main

