
# GraphQL Crash Course

This is a simple GraphQL server built with Apollo Server that provides data for games, authors, and reviews. It includes basic CRUD operations for games and has schemas for games, authors, and reviews.

## Getting Started

To get started with this project, follow the steps below:

### Prerequisites

Before running the project, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/graphql_crash_course.git
   ```

2. Navigate to the project folder:

   ```bash
   cd graphql_crash_course
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the GraphQL server:

   ```bash
   npm start
   ```

   The server will be running at `http://localhost:4000` by default. You can access the GraphQL Playground at this URL to interact with the API.

### Available Scripts

- `npm start`: Starts the Apollo Server.
- `npm test`: Runs tests (placeholder test in the example).

## Project Structure

- `index.js`: Main server file.
- `schema.js`: GraphQL schema definition.
- `_db.js`: Mock database with sample data.
- `package.json`: Project configuration and dependencies.

## GraphQL Queries and Mutations

You can use GraphQL queries and mutations to interact with the server. Here are some examples:

- Query for all games:

  ```graphql
  {
    games {
      id
      title
      genre
    }
  }
  ```

- Add a new game:

  ```graphql
  mutation {
    addGame(
      game: {
        title: "New Game Title"
        genre: "Action"
        releaseYear: 2023
      }
    ) {
      id
      title
      genre
    }
  }
  ```

- Update a game:

  ```graphql
  mutation {
    updateGame(
      id: "1"
      edits: {
        title: "Updated Game Title"
      }
    ) {
      id
      title
    }
  }
  ```

- Delete a game:

  ```graphql
  mutation {
    deleteGame(id: "1")
  }
  ```

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Apollo Server](https://www.apollographql.com/docs/apollo-server/introduction/): For GraphQL server implementation.
- [GraphQL](https://graphql.org/): For the query language.
```

Make sure to replace `"your-username"` in the clone command with your actual GitHub username. You can also customize and expand this README as needed to provide more details about your project.
