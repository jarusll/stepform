import Button from "../Button";
import Input from "../Input";
import StepFormItem from "../StepFormItem";
import action from "../../utils/action.js"
import { useContext, useState } from "react";
import { DispatchContext } from "../StepForm";
import produce from "immer";

export default function UserForm() {
    const [userData, setUserData] = useState({
        fullName: "",
        displayName: ""
    })
    const dispatch = useContext(DispatchContext)
    return <StepFormItem title="Welcome! First things first..." subtitle="You can always change them later.">
        <Input defaultValue="" placeholder="Steve Jobs" name="Full Name"
            onChange={e => setUserData(produce(userData, x => {x.fullName = e.target.value}))}/>
        <Input defaultValue="" placeholder="Steve" name="Display Name"
            onChange={e => setUserData(produce(userData, x => {x.displayName = e.target.value}))}
        />
        <Button onClick={() => {
            dispatch(action("userData", userData))
            dispatch(action("next"))
        }}>Create Workspace</Button>
    </StepFormItem>
}
