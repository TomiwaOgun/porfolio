import Header from './components/header'; // Import the Header component
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio of Tomiwa Ogunleye" />
        <title>Your Portfolio | Tomiwa Ogunleye</title>
      </head>
      <body>
        <Header /> {/* Use the Header component here */}
        <main>{children}</main> {/* Ensure the children are wrapped in a <main> tag */}
        <footer className="text-center py-4 bg-gray-100">
          <p>© 2025 Tomiwa Ogunleye. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://twitter.com/yourhandle" className="text-gray-600 hover:text-blue-600">Twitter</a>
            <a href="https://github.com/yourhandle" className="text-gray-600 hover:text-blue-600">GitHub</a>
            <a href="mailto:your@email.com" className="text-gray-600 hover:text-blue-600">Email</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
