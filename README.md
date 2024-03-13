# Description 

This project is a RESTful API for a blog application that comes with a login feature. This API allows users to perform CRUD operations on entities in the blog application, as well as provide user authentication through login.

## Features

- User Authentication: The API provides a login feature for authentication that allows users to update users and logout. The API also provides a feature for creating new accounts.
- Post CRUD: Users can create, edit, and delete their blog posts according to their user login at that time
- Category CRUD: Users can manage post categories, such as creating, editing, and deleting categories.
- Searching: Users can perform post-searches based on specific keywords.
- Pagination: The API provides pagination to split search results or post lists into multiple pages.

## Technology Used
- Node.js: Uses Node.js as the main runtime to run the API.
- Express.js: Web framework for creating APIs easily and quickly.
- JSON Web Token (JWT): Used for user authentication.
- Bcrypt: Used to encrypt the user's password.
- Multer:  Used to handle multipart/form data, which is used to upload image files.
- Joi: Used to validate requests.
- MySQL: Relational database for storing application data.
- Prisma: ORM (Object-Relational Mapping) to interact with the MySQL database.
