import { useContext, useState } from "react";
import Button from "../Button";
import { DispatchContext } from "../StepForm";
import StepFormItem from "../StepFormItem";
import action from "../../utils/action";
import RadioButton from "../RadioButton";

export default function TypeForm() {
    const [selected, setSelected] = useState(null)
    const dispatch = useContext(DispatchContext)
    return <StepFormItem title="How are you planning to use Eden?"
        subtitle="We'll streamline your setup experience accordingly.">
        <div className="flex flex-row mv2 justify-around">
            <div className="mv2 mr1">
                {/* id = 1 */}
                <RadioButton icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAACWUlEQVRoge3ZT28NYRTH8U81aSwkhJDQaggrsWFrQVjVn+pWvAERraWIxMI7kFj4FwtLC0GKN8BWVzZCI1GWqi3R0KYWc6t1Q3vvzJm503i+yVncm8lvzu8+Z55z7jMkEolEor50VXSffpzGCexCX+P7CbzHKB7jQ0X5lEYvbmEOC6vEPB7IfpA1yRBmrG60OaYx2IF8C3FRtmLtml2+2iOVZ52TIcXMLjdd+5Xuk6+MVyrvHZU6aJN74swuxp1KHbRBv9Z243ZjzlIbK8y6KCHZs9sdqLdIt6yHhxBpeCBQq5njUUKRhvcGajWzp0Tt3ETuzs0xE5Vk5Cy9EKj1N0JyjSzpNUGk4a+BWs1MRwlFGv4UqFWadqTh8UCt0rQjDT8N1GpmtETt3OxUzmj5U+BoGc1d8YZvVuqgTXplO2qU2Slsr9RBDgbElPY8TlWce25GFD/iGa4864IMylfeUzjZgXxD2Irrsp22lVW9r+RntqqD+D5LB/G7/XkQPy7r4U8anxOJRCLx31JmW+rGQRzAfuyTtaNN2Ni45ots0JjA60a8wpisL9eebTiPR5iUf7T8jIc4JxteakUPzuK51iaqPP+Hn+FM414dYwuuyM6bok3+Kz7iMjZX4O83PbIX3kVKtmhM4hLWl+zVYdns2ymjzfEWh8ow2oVryjmzKhpzuCqw43ThRg2MrRa3o0wP18BMq3EhwvC7GhhpNd6sZqaVEviugt0wiG/YsNIFrbx5GIvJpRJCcj2qnAkqOn7I2mYIx/ASszUw1hyzeIEjUWYTiUQikUiUwy/dxbPPPkkycAAAAABJRU5ErkJggg=="
                    title="For myself" subtitle="Write better. Think more clearly. Stay organized."
                    onClick={() => setSelected(1)} selected={selected === 1}/>
            </div>
            <div className="mv2 ml1">
                {/* id = 2 */}
                <RadioButton icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAByklEQVRoge3XPW/TUBjF8V+gSE0FiAFR0YXCwsbExFJAYuCLsCLIwst3YEBMrLyoHwDEwMaLoNAFlZLCwMoAEkjNRqAMtiVqfH1jSuNU3L/0SI5zzrn3ceInMYlEIpFIJCaTGfTwCoO8lnAZ3QnyVXIUfWwEahXzE+CrZCYSVtRbTLfoC9IbIayoSy36grxuELjUoi/IoEHgeos+sKuigY1Rusz52aIP1Q30GwT2A8fj8KG6gcUGgYuB43H4gnRlczf2fVyxeayN21fLfCR0BUcmwFdLVzZ3X8ru/nW8wEX1V2LcvkTiv6YTOH8Q53ESJ3AYt3EjoD+EcziF4ziGA9ibvz/AN3zEezzHY3wO5PVwAZ/wBst4hC+xhhZy4dDmMXYvoD+Dh7Kf+FH/zxT1Aw/yjCrul/TDfG8LVeL9+SarFvoqu8Kj6v+m7mBfaY1Z2adWpb+b7wHZ/H1WE36zFNzF03+4+aKe+PPR8VZEPw3XI8GnS6HXtmHzRV0prXU2or8KHyKiuVLo2jY28K601lxEv9bBd0wJMyW74Qpi+q0wxJ7fXu/OzwX1HVkndZRHbUy/VRqtV/U8sKNIDbTNjm8gkUgkEolEm/wCpKG+h/PbYegAAAAASUVORK5CYII="
                    title="With my team" subtitle="Wikis, docs, tasks & projects, all in one place"
                    onClick={() => setSelected(2)} selected={selected === 2}
                />
            </div>
        </div>
        <Button onClick={() => {
            dispatch(action("next"))
        }}>Create Workspace</Button>
    </StepFormItem>
}
