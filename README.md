# Employee Management System

A modern, full-featured Employee Management System built with React and Vite. This application provides role-based dashboards for both administrators and employees, enabling efficient management of employee tasks, performance, and organizational data.

## Features

- **Role-Based Access Control**: Separate dashboards for admin and employee roles
- **Admin Dashboard**: Manage employees, assign tasks, monitor performance
- **Employee Dashboard**: View assigned tasks, manage personal information, track progress
- **Authentication System**: Secure login with email and password
- **Persistent Sessions**: LocalStorage-based session management
- **Modern UI**: Styled with Tailwind CSS for responsive design
- **Fast Development**: Hot Module Replacement (HMR) enabled with Vite

## Tech Stack

- **Frontend Framework**: React 19.2.4
- **Build Tool**: Vite 8.0.4
- **Styling**: Tailwind CSS 4.2.2
- **CSS Framework Integration**: @tailwindcss/vite 4.2.2
- **Linting**: ESLint 9.39.4
- **Package Manager**: npm

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ommbhor/Employee-Management-System.git
cd Employee-Management-System
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port)

## Available Scripts

- `npm run dev` - Start the development server with HMR
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Default Credentials

### Admin Login
- **Email**: `admin@me.com`
- **Password**: `123`

### Employee Login
- Employees can log in with credentials stored in the application context

## Project Structure

```
src/
├── components/
│   ├── Auth/
│   │   └── Login.jsx          # Authentication component
│   └── Dashboard/
│       ├── AdminDashboard.jsx # Admin panel
│       └── EmployeeDashboard.jsx # Employee panel
├── context/
│   └── AuthProvider.jsx        # Authentication context and user data management
├── utils/                      # Utility functions
├── assets/                     # Static assets
├── App.jsx                     # Main application component
├── main.jsx                    # Application entry point
└── index.css                   # Global styles
```

## How It Works

### Authentication Flow
1. User enters email and password on the login page
2. System validates against admin credentials or employee database
3. Upon successful login, user role and data are stored in localStorage
4. User is redirected to appropriate dashboard

### User Sessions
- Sessions persist across browser refreshes using localStorage
- User can log out, which clears session data

### Role-Based Navigation
- **Admin Users**: Access the admin dashboard with full management capabilities
- **Employee Users**: Access the employee dashboard with personal information
- **Unauthenticated Users**: See the login screen

## Application Flow

1. **Login Screen**: Initial entry point for all users
2. **Admin Dashboard**: Full administrative capabilities for managing employees
3. **Employee Dashboard**: Personal workspace for employees to manage their tasks and information

## Development

### Project Setup
The project is configured with Vite for optimal development experience with:
- Fast HMR updates
- Optimized build output
- ESLint integration for code quality

### Development Notes
- The project uses React Context API for state management
- Authentication is handled through the AuthProvider context
- Employee data is managed centrally in the context
- Functional components with React Hooks are used throughout

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Security Considerations

⚠️ **Note**: This is a demonstration/development project. For production use:
- Implement secure password hashing (bcrypt, argon2)
- Use HTTPS for all communications
- Implement proper JWT token management
- Add CSRF protection
- Validate and sanitize all inputs
- Use environment variables for sensitive data

## License

This project is private and owned by ommbhor.

## Contributing

Contributions are welcome! Please ensure your code follows the ESLint configuration and maintains the project structure.

## Support

For issues, questions, or suggestions, please open an issue on the GitHub repository.