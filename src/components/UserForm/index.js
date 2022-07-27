import Button from "../Button";
import Input from "../Input";
import StepFormItem from "../StepFormItem";
import action from "../../utils/action.js"
import { useContext } from "react";
import { DispatchContext } from "../StepForm";

export default function UserForm() {
    const dispatch = useContext(DispatchContext)
    return <StepFormItem title="Welcome! First things first..." subtitle="You can always change them later.">
        <Input defaultValue="" placeholder="Steve Jobs" name="Full Name" />
        <Input defaultValue="" placeholder="Steve" name="Display Name" />
        <Button onClick={() => {
            dispatch(action("next"))
        }}>Create Workspace</Button>
    </StepFormItem>
}
