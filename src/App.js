import { Provider } from "react-redux";
import { LoginPage } from "./pages/LoginPage";
import store from "./store";

function AppContent() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};
export default App;
