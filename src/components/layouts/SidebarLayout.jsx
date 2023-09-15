import Sidebar from "../navigation/Sidebar";

export default function DefaultLayout({ children }) {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="sideMainContainer mainContainer">
        <header>header</header>
        <main className="mainContent">{children}</main>
        <footer className="footerContent">Made by MODERATOREM</footer>
      </div>
    </div>
  );
}
