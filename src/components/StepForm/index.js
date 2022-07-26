import { useReducer, useState } from 'react';
import Stepper from 'react-stepper-horizontal';

export default function StepForm({ children, change }) {

    const [formState, dispatch] = useReducer(formReducer)

    const initialState = {}
    function formReducer(state = initialState, {type, payload}){
        switch(type){
            default:
                return state
        }
    }

    const [currentIndex, setCurrentIndex] = useState(1)
    return <div>
        <div>
            <Stepper steps={Array.from(Array(4).keys())} activeColor="#664de5"/>
        </div>
        {children[currentIndex]}
    </div>
}
