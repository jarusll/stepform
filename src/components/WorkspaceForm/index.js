import Button from "../Button";
import Input from "../Input";

export default function UserForm({ dispatch }) {
    return <div>
        <div className="tc">
            <h2>Let's set up a home for all your work</h2>
            <h4 className="gray fw1">You can always create another workspace later.</h4>
        </div>
        <form>
            <Input defaultValue="" placeholder="Eden" name="Workspace Name" />
            <Input defaultValue="" placeholder="Example" name="Workspace URL" info="(optional)"/>
            <Button>Create Workspace</Button>
        </form>
    </div>
}
