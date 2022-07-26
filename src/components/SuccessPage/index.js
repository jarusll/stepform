import StepFormItem from "../StepFormItem";
import Button from "../Button";

export default function UserForm({ dispatch }) {
    return <StepFormItem title="Congratulations, Eren!"
        subtitle="You have completed onboarding, you can start using Eden!">
        <Button>Launch Eden</Button>
    </StepFormItem>
}
