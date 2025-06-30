# 📦 pokedex_modulo_2

Proyecto final del Módulo 2 del Diplomado Fullstack. Esta aplicación es una API backend construida con Node.js que permite gestionar registros de Pokémon, incluyendo autenticación y operaciones CRUD.

---

## 🚀 Cómo ejecutar la aplicación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/RobinMSanMartin/pokedex_modulo_2.git

   ```

2. cambiar a directorio de app

   ```bash
   cd pokedex_modulo_2

   ```

3. Instalar dependencias

   ```bash
   npm install

   ```

4. Construir y levantar los servicios con Docker:
   ```bash
   docker compose up --build
   ```

---

## 🧪 Variables para Postman

Configura estas variables para facilitar el trabajo con la colección de endpoints:

- auth_base_url = http://localhost:3000/api/auth
- pokemon_base_url = http://localhost:3000/api/pokemon

---

## 📚 Endpoints disponibles

### 🔐 AUTH

| Metodo |   Ruta    |       Descripcion       |
| ------ | :-------: | :---------------------: |
| POST   |  /login   |     Iniciar Sesion      |
| POST   | /register | Registrar Nuevo Usuario |

### 🐾 POKEMON

| Metodo | Ruta |        Descripcion        |
| ------ | :--: | :-----------------------: |
| GET    |  /   |     Listar Pokemones      |
| GET    | /:id |  Obtener Pokemon por ID   |
| POST   |  /   |    Creacion de Pokemon    |
| PUT    | /:id | Actualizar Pokemon por ID |
| DELETE | /:id |  Eliminar Pokemon por ID  |

---

## 📁 Estructura de Carpetas

| Carpeta       |                                                                           Descripcion                                                                           |
| ------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| config/       |                   Contiene la configuración general del proyecto, como conexión a bases de datos, variables de entorno y opciones de entorno.                   |
| controllers/  | Aquí están las funciones que manejan la lógica de negocio para cada ruta. Reciben las peticiones, procesan los datos y delegan en los servicios o repositorios. |
| middleware/   |     Incluye funciones intermedias que se ejecutan antes de llegar a las rutas finales, como autenticación con JWT, manejo de errores o validación de datos.     |
| models/       |             Define la estructura de datos y modelos utilizados, normalmente conectados a la base de datos mediante ORM o consultas personalizadas.              |
| repositories/ |          Se encarga de interactuar directamente con la base de datos. Aquí centralizas las operaciones CRUD de cada entidad, como Pokémon o usuarios.           |
| routes/       |        Contiene la definición de las rutas expuestas por la API. Organiza los endpoints por entidad y asocia cada uno a su controlador correspondiente.         |
| services/     |           Aloja la lógica de negocio más compleja o compartida, separada de los controladores. Ideal para mantener el código modular y reutilizable.            |
