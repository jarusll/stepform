import Stepform from "./components/StepForm";
import UserForm from "./components/UserForm";
import WorkspaceForm from "./components/WorkspaceForm";
import TypeForm from "./components/TypeForm";
import SuccessPage from "./components/SuccessPage";

function App() {
  return (
    <div className="mw7 center sans-serif near-black">
      <div className="flex justify-center mt3 items-center" >
        <img src="/eden.png" className="w2 h2 mr2"/>
        <h2 className="f3">Eden</h2>
      </div>
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
