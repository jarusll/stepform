import { useContext } from "react";
import Button from "../Button";
import { DispatchContext } from "../StepForm";
import StepFormItem from "../StepFormItem";
import action from "../../utils/action";

export default function UserForm() {
    const dispatch = useContext(DispatchContext)
    return <StepFormItem title="How are you planning to use Eden?"
        subtitle="We'll streamline your setup experience accordingly.">
        <Button onClick={() => {
            dispatch(action("next"))
        }}>Create Workspace</Button>
    </StepFormItem>
}
