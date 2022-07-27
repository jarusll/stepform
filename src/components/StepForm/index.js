import produce from 'immer';
import { createContext, useReducer } from 'react';
import Stepper from 'react-stepper-horizontal';
import action from '../../utils/action';

export const DispatchContext = createContext()

export default function StepForm({ children, change }) {

    const initialState = {
        index: 0
    }
    const [formState, dispatch] = useReducer(formReducer, initialState)

    function formReducer(state, { type, payload }) {
        switch (type) {
            case "next":
                return produce(state, x => {
                    x.index++
                })
            case "goto":
                return produce(state, x => {
                    x.index = payload
                })
            default:
                return state
        }
    }

    return <div>
        <div className="w-50 center">
            <Stepper
            // generate array of indexes
            steps={Array.from(Array(children.length).keys())
                .map(x => ({ index: x, onClick: e => dispatch(action("goto", x)) }))}
                activeColor="#664de5"
                completeColor="#664de5" defaultColor="#A9A9A9"
                activeStep={formState.index} />
        </div>
        <DispatchContext.Provider value={dispatch}>
            {children[formState.index]}
        </DispatchContext.Provider>
    </div>
}
