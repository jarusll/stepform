import { createContext, useReducer } from 'react';
import Stepper from 'react-stepper-horizontal';

export const DispatchContext = createContext()

export default function StepForm({ children, change }) {

    const initialState = {
        index: 2
    }
    const [formState, dispatch] = useReducer(formReducer, initialState)

    function formReducer(state, { type, payload }) {
        switch (type) {
            case "next":
                return { index: state.index + 1 }
            default:
                return state
        }
    }

    return <div>
        <div className="w-50 center">
            <Stepper steps={Array.from(Array(children.length).keys())} activeColor="#664de5"
                completeColor="#664de5" defaultColor="#A9A9A9"
                activeStep={formState.index} />
        </div>
        <DispatchContext.Provider value={dispatch}>
            {children[formState.index]}
        </DispatchContext.Provider>
    </div>
}
