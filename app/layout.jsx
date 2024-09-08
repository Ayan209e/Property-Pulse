import "../assets/styles/globals.css";
import { Navbar, Footer } from "../components";

export const metadata = {
  title: "Property Pulse | Find The Perfect Rental",
  description:
    "Find your dream rental property with Property Pulse. Search for houses, apartments, and condos for rent in your area.",
  keywords: "rental, property, apartment, house, condo, real estate",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
