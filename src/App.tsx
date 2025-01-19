import { pl } from "date-fns/locale";
import { setDefaultOptions } from "date-fns/setDefaultOptions";
import AppRoutes from "./Routes.";

function App() {
  setDefaultOptions({ locale: pl });

  return <AppRoutes />;
}

export default App;
