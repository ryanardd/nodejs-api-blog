# Description 

This project is a RESTful API for a blog application that comes with a login feature. This API allows users to perform CRUD operations on entities in the blog application, as well as provide user authentication through login.

## Features

- User Authentication: The API provides a login feature for authentication that allows users to update users and logout. The API also provides a feature for creating new accounts.
- Post CRUD: Users can create, edit, and delete their blog posts according to their user login at that time
- Category CRUD: Users can manage post categories, such as creating, editing, and deleting categories.
- Searching: Users can perform post-searches based on specific keywords.
- Pagination: The API provides pagination to split search results or post lists into multiple pages.


## Tech Stack
| **Technology** |  **Description**               |
| :-------- | :---------------------------------- |
|Programming Languages          |Javascript (Node.js)|
|Framework                      |Express.js|
|Database                       | MySQL|
|ORM (Object-Relational Mapping)| Prisma|
|Authentication                 |JSON Web Token (JWT)|
|Middleware for Upload File     |Multer|
|Request Validation             |Joi|
|Encrypting Password            |Bcrypt|

# Getting Started
## Installation
Open a terminal or command prompt and clone the blog API project repository from GitHub.
```
git clone <project>
```
Navigate to the directory of the project that was just cloned.

Run the `npm install` command to install all the required dependencies.
```
npm install
```
### Environment Variables
To run this project, you will need to add the following environment variables to your `.env` file
```
DATABASE_URL="mysql://user:password@host:port/database"

ACCESS_TOKEN_SECRET = "secret"
```

## How to run
Once all dependencies are installed, run the command to start the API server.
```
npm run dev
```
