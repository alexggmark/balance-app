# Frontend

This is the frontend part of the SaaS project for web and mobile activity trackers.

## Project Structure

The project has the following structure:

```
frontend
├── public
│   └── index.html
├── src
│   ├── components
│   │   └── Tracker.tsx
│   ├── pages
│   │   └── Home.tsx
│   ├── redux
│   │   ├── actions.ts
│   │   ├── reducers.ts
│   │   └── store.ts
│   ├── styles
│   │   └── tailwind.css
│   ├── App.tsx
│   ├── index.tsx
│   └── graphql
│       └── queries.ts
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Description

- `public/index.html`: The HTML template for the frontend application.
- `src/components/Tracker.tsx`: React component for displaying and managing a single tracker.
- `src/pages/Home.tsx`: React component for the main page of the application, displaying a list of trackers and allowing the user to create new trackers.
- `src/redux/actions.ts`: Redux action creators for managing tracker data.
- `src/redux/reducers.ts`: Redux reducers for handling tracker data state.
- `src/redux/store.ts`: Redux store configuration.
- `src/styles/tailwind.css`: Tailwind CSS styles for the frontend application.
- `src/App.tsx`: Entry point of the frontend application, sets up the Redux store and renders the main component.
- `src/index.tsx`: Renders the React app and mounts it to the DOM.
- `src/graphql/queries.ts`: GraphQL queries for fetching tracker data.

## Getting Started

To run the frontend application, follow these steps:

1. Install the dependencies: `npm install`
2. Start the development server: `npm start`
3. Open the application in your browser at `http://localhost:3000`

## Additional Information

For more information about the project, including the backend and mobile parts, please refer to the [main README](../README.md).
```

Please note that the README assumes that the user will run the frontend application using `npm` and provides basic instructions for getting started. You may need to modify the instructions based on your specific setup and requirements.