import MainLayout from "./components/layouts/main-layout";
import MainRoute from "./routes/main-route";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "./preloader/preloader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="h-100">
      <Router>
        <MainLayout>
          {/* <Preloader /> */}
          <MainRoute />
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
