import { Route, Routes } from "react-router";
import { RouteListView } from "./pages/route/list-view";
import { HomeListView } from "./pages/index/list-view";
import { BaseLayout } from "./pages/layout";
import { Route404 } from "./pages/404";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route index element={<HomeListView />} />
            <Route path="route">
              <Route path=":routeId" element={<RouteListView />} />
            </Route>
            <Route path="*" element={<Route404 />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
