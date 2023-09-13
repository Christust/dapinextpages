import Navbar from "../navigation/Navbar";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="mainContent">{children}</main>
      <footer className="footerContent">Footer</footer>
    </>
  );
}
