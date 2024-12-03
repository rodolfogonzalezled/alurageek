# AluraGeek - Rodolfo Gonzalez

![Screenshot](https://github.com/rodolfogonzalezled/alurageek/blob/main/assets/alurageekfunko.jpg?raw=true)

**AluraGeek** es una aplicación web que permite a los usuarios gestionar una lista de productos. Los usuarios pueden **visualizar**, **agregar** y **eliminar** productos, utilizando tecnologías frontend modernas y un servidor JSON simulado.

## 🔥 Características

- **Visualizar** productos existentes.
- **Agregar** nuevos productos proporcionando nombre, precio e imagen.
- **Eliminar** productos de la lista.
- Manejo dinámico del DOM para actualizar productos sin recargar la página.
- Conexión con un servidor simulado mediante **json-server** para realizar operaciones **CRUD**.

## 💻 Tecnologías Utilizadas

- **HTML5/CSS3**: Estructura y diseño.
- **JavaScript (ES6 Modules)**: Lógica e interacción.
- **json-server**: API RESTful simulada.
- **Fetch API**: Solicitudes HTTP.
- **BEM (Block Element Modifier)**: Metodología para nombrar clases CSS.

## 🗂️ Estructura del Proyecto

- **index.html**: Estructura de la aplicación.
- **styles/reset.css**: Reinicio de estilos.
- **styles/style.css**: Estilos personalizados.
- **js/controllers/main.js**: Lógica de agregar y eliminar productos.
- **js/services/product-services.js**: Solicitudes HTTP (GET, POST, DELETE).
- **db.json**: Base de datos simulada para **json-server**.
- **package.json**: Dependencias y scripts.

## 🛠️ API Simulada

**json-server** simula una API RESTful con las siguientes rutas:

- `GET /products`: Lista los productos.
- `POST /products`: Crea un nuevo producto.
- `DELETE /products/:id`: Elimina un producto.

## 📋 Uso de la Aplicación

1. **Visualizar Productos**: Los productos se cargan automáticamente desde el servidor simulado al abrir la página.
   
2. **Agregar Producto**: Completa el formulario con nombre, precio y URL de la imagen, luego haz clic en **"Enviar"**.
   
3. **Eliminar Producto**: Haz clic en el ícono de la papelera para eliminar un producto.

---
