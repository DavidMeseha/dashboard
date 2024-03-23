import { useEffect, useRef, useState } from "react";
import "./App.css";
import SideNav from "./components/SideNav";
import { Outlet, useLocation } from "react-router-dom";
import HeadBar from "./components/HeadBar";

function App() {
  const asideRef = useRef<HTMLDListElement>(null);
  const router = useLocation();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  useEffect(() => {
    // document.addEventListener("click", (event) => {
    //   if (
    //     asideRef.current &&
    // !asideRef.current.contains(event.target as Node)
    //   ) {
    //     setIsSideNavOpen(false);
    //   }
    // });
    setIsSideNavOpen(false);
  }, [router.pathname]);

  function doubleClickHandle() {
    setIsSideNavOpen(!isSideNavOpen);
  }

  function openMobileNav() {
    console.log(isSideNavOpen);
    setIsSideNavOpen(true);
  }

  return (
    <>
      <aside
        ref={asideRef}
        className={isSideNavOpen ? "open" : "close"}
        onDoubleClick={doubleClickHandle}
      >
        <SideNav />
      </aside>
      <div className="app-warpper">
        <HeadBar openMobileNav={openMobileNav} />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
