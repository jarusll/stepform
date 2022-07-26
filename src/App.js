import Stepform from "./components/StepForm";
import UserForm from "./components/UserForm";
import WorkspaceForm from "./components/WorkspaceForm";
import TypeForm from "./components/TypeForm";
import SuccessPage from "./components/SuccessPage";

function App() {
  return (
    <div className="mw7 center sans-serif near-black">
      <Stepform>
        <UserForm />
        <WorkspaceForm />
        <TypeForm />
        <SuccessPage />
      </Stepform>
    </div>
  );
}

export default App;
