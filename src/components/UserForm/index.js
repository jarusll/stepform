import Button from "../Button";
import Input from "../Input";

export default function UserForm({ dispatch }) {
    return <div>
        <div className="tc">
            <h2>Welcome! First things first...</h2>
            <h4>You can always change them later.</h4>
        </div>
        <form>
            <Input value="" placeholder="Steve Jobs" name="Full Name" />
            <Input value="" placeholder="Steve" name="Display Name" />
            <Button>Create Workspace</Button>
        </form>
    </div>
}
