# Node.js / express App

Welcome to the React Todo App! This simple yet powerful task management application is built using React, providing an intuitive and efficient way to organize your daily tasks.

## Frontend Repository

[Frontend Repository](https://github.com/terryjung0244/todo-portfolio-project.git)

## Features

- **REST API:** Express Routing을 사용해서, GET / POST / PUT/ DELETE API를 만듦
  추가적으로 Controller를 별도로 만들어 각 API에 대한 기능을 만듦
- **Query & Params:** GET API에서 Request 데이터 전송을 위해 Query와 Params를 사용
  예시 써주기 (/getTodoByQuery?title='abc') / (/getTodoByParams/:id)

= **MongoDB:** MongoDB Atlas를 이용해서 Console 작업 진행해봤다. 데이터가 추가 삭제 등등이 일어날때마다 콘솔에서 변화를 확인할 수 있었다. 그리고 MongoDB를 프로젝트에 Configuration 작업을 완료하였다.

??????????????????????????????????????????????????????????????????????????????

## Technologies Used

Frontend

- **React:** Utilized for building a modular and dynamic user interface.
- **Redux:**
- **Styled-Component:** Styled for a visually appealing and user-friendly experience.
  **typescript**
- **testing**

Backend

- **node.js**
- **express**
- **mongodb**

## Project Structure

- server (package들 import + mongodb configuration)
- route (들어온 request를 매칭되는 controller로 보내는 역할)
- controller (실제 작업이 일어나는 곳)
- schema (mongodb structure 짜는 곳)

????????????????????????????????????????????????????????????????????????????????

## Getting Started

1. Clone the repository: `https://github.com/terryjung0244/todo-portfolio-project-backend.git`
2. Navigate to the project directory: `cd todo-portfolio-app`
3. Install dependencies: `yarn install`
4. Run the development server: `yarn start`

## Challenges and Learnings

1. POST, GET, PUT, DELETE

This project incorporates fundamental REST API principles, such as POST, GET, PUT, and Delete. Each endpoint serves a spectific purpose, allowing the application to create new tasks, get existing tasks, update task details, and remove tasks as needed.

2. MoongoDB

To ensure persistent data storage, I integrated a MongoDB database into the application. This strategic implementation safeguards task information, preventing data loss and providing a reliable foundation for the seamless retrieval and management of tasks over time.

3. CORS

I encountered CORS errors, highlighting the significance of addressing cross-origin resource sharing for seamless communication between the frontend and backend. Resolving CORS issues involves configuring the backend server to allow specific cross-origin requests, employing techniques such as setting headers, CORS middleware.
