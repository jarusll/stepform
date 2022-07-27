import StepFormItem from "../StepFormItem";
import Button from "../Button";
import Input from "../Input";
import { useContext } from "react";
import { DispatchContext } from "../StepForm";
import action from "../../utils/action";

export default function UserForm() {
    const dispatch = useContext(DispatchContext)
    return <StepFormItem title="Let's set up a home for all your work"
        subtitle="You can always create another workspace later.">
        <Input defaultValue="" placeholder="Steve Jobs" name="Workspace Name"/>
        <Input defaultValue="" placeholder="Steve" name="Workspace URL" info="(Optional)"/>
        <Button onClick={() => {
            dispatch(action("next"))
        }}>Create Workspace</Button>
    </StepFormItem>
}
