import { Outlet } from "react-router-dom";
import { BigSidebar, SmallSidebar, Navbar } from "../../components";

function SharedLayout() {
  return (
    <section>
      <main className="grid grid-cols-[1fr] md:grid-cols-[auto,1fr]">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="w-11/12 md:w-[90vw] m-auto py-8">
            <Outlet />
          </div>
        </div>
      </main>
    </section>
  );
}

export default SharedLayout;
