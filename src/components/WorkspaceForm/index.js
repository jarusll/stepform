import StepFormItem from "../StepFormItem";
import Button from "../Button";
import Input from "../Input";
import { useContext, useState } from "react";
import { DispatchContext } from "../StepForm";
import action from "../../utils/action";
import produce from "immer";

export default function UserForm() {
    const [workspaceData, setWorkspaceData] = useState({
        workspaceName: "",
        workspaceURL: ""
    })
    const dispatch = useContext(DispatchContext)
    return <StepFormItem title="Let's set up a home for all your work"
        subtitle="You can always create another workspace later.">
        <Input defaultValue="" placeholder="Steve Jobs" name="Workspace Name"
            onChange={e => setWorkspaceData(produce(workspaceData, x => {x.workspaceName = e.target.value}))}
        />
        <Input defaultValue="" placeholder="Steve" name="Workspace URL" info="(Optional)"
            onChange={e => setWorkspaceData(produce(workspaceData, x => {x.workspaceURL = e.target.value}))}
        />
        <Button onClick={() => {
            dispatch(action("workspaceData", workspaceData))
            dispatch(action("next"))
        }}>Create Workspace</Button>
    </StepFormItem>
}
