import StepFormItem from "../StepFormItem";
import Button from "../Button";
import Input from "../Input";

export default function UserForm({ dispatch }) {
    return <StepFormItem title="Let's set up a home for all your work"
        subtitle="You can always create another workspace later.">
        <Input defaultValue="" placeholder="Steve Jobs" name="Workspace Name"/>
        <Input defaultValue="" placeholder="Steve" name="Workspace URL" info="(Optional)"/>
        <Button>Create Workspace</Button>
    </StepFormItem>
}
