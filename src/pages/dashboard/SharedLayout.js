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
          {/* md:w-11/12 w-[90vw] m-auto py-8 */}
          <div className="">
            <Outlet />
          </div>
        </div>
      </main>
    </section>
  );
}

export default SharedLayout;
