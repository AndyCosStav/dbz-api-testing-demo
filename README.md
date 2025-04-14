#  DBZ Character API

A simple REST API built with **Node.js**, **Express**, and **ES Modules** to manage Dragon Ball Z characters. It supports full **CRUD** operations and includes unit tests using **Jest** and **Supertest**.

## What this project does

This API lets you:

- Create new Dragon Ball Z characters
- View all characters or a specific one by ID
- Update character info (e.g., name, race, special move)
- Delete characters

All character data is stored in an **in-memory array** (no real database), and the API returns appropriate HTTP status codes for success and error cases (e.g. 200, 201, 400, 404, 204).

## What I learned

- How to structure a modern Node.js + Express project using `import` / `export` syntax
- The importance of separating **routes**, **controllers**, and **models** for clean code
- How to write unit tests using **Jest**
- How to mock the model layer with `jest.unstable_mockModule()` to isolate controller and route logic
- How to use **Supertest** to test API endpoints without spinning up a server

##  How to Run

```bash
# Install dependencies
npm install

# Run the test suite
npm test

# Start the API (optional)
npm start
