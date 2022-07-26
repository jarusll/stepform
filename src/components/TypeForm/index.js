import Button from "../Button";
import Input from "../Input";

export default function UserForm({ dispatch }) {
    return <div>
        <div className="tc">
            <h2>How are you planning to use Eden?</h2>
            <h4>We'll streamline your setup experience accordingly.</h4>
        </div>
        <form>
            <Input value="" placeholder="Eden" name="Workspace Name" />
            <Input value="" placeholder="Example" name="Workspace URL" info="(optional)"/>
            <Button>Create Workspace</Button>
        </form>
    </div>
}
