import Sidebar from "../navigation/Sidebar";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Sidebar />
      <div className="mainContainer">
        <main className="mainContent">{children}</main>
        <footer className="footerContent">Made by MODERATOREM</footer>
      </div>
    </>
  );
}
