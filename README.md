# Contact App

A responsive contact management application built using **Vite** and **React**. The app fetches user data via a REST API and allows users to view detailed information for each contact. The design is fully responsive, ensuring a seamless experience across devices.

## Features

- **Responsive Design**: Automatically adjusts the layout for different screen sizes.
  - On mobile devices, the user details appear below the user list when a contact is selected.
  - On larger screens, the user list and user details are displayed side by side.
- **Dynamic Data Loading**: Fetches and displays user data from an API.
- **User Selection**: Click on a user to view their detailed information.
- **Tailwind CSS**: Styled with Tailwind CSS for a modern and responsive design.
- **Font Awesome Icons**: Integrated Font Awesome for beautiful icons.

## Technology Stack

- **Vite**: For fast development and build tooling.
- **React**: Frontend library for building UI components.
- **Axios**: For API calls.
- **Tailwind CSS**: For styling and responsive design.
- **Font Awesome**: For icons.

## Installation and Setup

Follow these steps to clone and run the project locally:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Version 16 or higher recommended)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

`git clone https://github.com/gauravshreenet/contact-app.git`

### 2. Navigate to the Project Directory

`cd contact-app`

### 3. Install Dependencies

`npm install`

### 4. Configure Environment Variables
`Create a .env file in the root directory and add the following:`

VITE_API_URL=https://jsonplaceholder.typicode.com/users
This URL points to the placeholder API that provides user data.

### 5. Run the Application

`npm run dev`
This will start a development server. The app will be available at http://localhost:5173/ by default.

### 6. Build for Production (Optional)
To build the app for production:

`npm run build`
The production-ready files will be generated in the dist/ folder.

## Folder Structure

.
├── public/            # Public assets
├── src/
│   ├── components/    # React components (Users, UserDetail)
│   ├── helper/        # Axios helper for API calls
│   ├── App.jsx        # Main application file
│   ├── main.jsx       # Entry point for Vite + React
│   └── index.css      # Global styles
├── .env               # Environment variables
├── package.json       # Dependencies and scripts
└── vite.config.js     # Vite configuration

License
This project is licensed under the MIT License. See the LICENSE file for details.

---

