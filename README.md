# React PDF Menu Displayer

## Project Description

This project is a PDF menu displayer built using React.js and Vite. It provides a simple and elegant way to showcase menus in PDF format, making it easy for users to navigate through different sections and view the content seamlessly. The application is designed with responsiveness in mind, ensuring a smooth experience across various devices.

### Features

- Display PDF menus with a user-friendly interface.
- Navigate through menu sections efficiently.
- Responsive design for optimal viewing on different devices.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/your-username/react-pdf-menu-displayer.git
   ```

2. Change to the project directory.

   ```bash
   cd react-pdf-menu-displayer
   ```

3. Install the project dependencies.

   ```bash
   npm install
   ```

### Usage

1. Place your PDF menu files in the `public/pdf` directory.

2. Open the `src/config/menuConfig.js` file and update the configuration to match your PDF files.

   ```javascript
   const menuConfig = [
     {
       title: 'Section 1',
       pdfPath: '/pdf/section1-menu.pdf',
     },
     // Add more sections as needed
   ];

   export default menuConfig;
   ```

3. Run the development server.

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

If you'd like to contribute to this project, please follow the guidelines in [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [pdf.js](https://mozilla.github.io/pdf.js/)

Feel free to reach out if you have any questions or encounter issues. Happy coding!