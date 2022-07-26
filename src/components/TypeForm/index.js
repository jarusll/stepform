import Button from "../Button";
import StepFormItem from "../StepFormItem";

export default function UserForm({ dispatch }) {
    return <StepFormItem title="How are you planning to use Eden?"
        subtitle="We'll streamline your setup experience accordingly.">
        <Button>Create Workspace</Button>
    </StepFormItem>
}
