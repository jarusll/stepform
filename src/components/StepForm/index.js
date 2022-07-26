import { useReducer } from 'react';
import Stepper from 'react-stepper-horizontal';

export default function StepForm({ children, change }) {

    const initialState = {
        index: 0
    }
    const [formState, dispatch] = useReducer(formReducer, initialState)

    function formReducer(state, {type, payload}){
        switch(type){
            default:
                return state
        }
    }

    return <div>
        <div className="w-50 center">
            <Stepper steps={Array.from(Array(children.length).keys())} activeColor="#664de5"
            completeColor="#664de5" defaultColor="#A9A9A9"
            activeStep={formState.index}/>
        </div>
        {children[formState.index]}
    </div>
}
