import Button from "../Button";

export default function UserForm({ dispatch }) {
    return <div>
        <div className="tc">
            <h2>Congratulations, Eren!</h2>
            <h4>You have completed onboarding, you can start using Eden!</h4>
        </div>
        <form>
            <Button>Create Workspace</Button>
        </form>
    </div>
}
