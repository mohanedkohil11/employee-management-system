import Layout from "./components/layout";
import { EmployeeSystemProvider } from "./context/employeeContext";
import Home from "./pages/Home";

function App() {
  return (
    <EmployeeSystemProvider>
      <Layout>
        <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Home />
        </div>
      </Layout>
    </EmployeeSystemProvider>
  );
}

export default App;
