export default function Input({label, ...props}){
    return <div className="m0 mb3 flex flex-column">
        <div className="m0 mb1 outline-none">
            <label htmlFor={props?.name}>{props?.name}</label>
            <span className="gray">{props?.info}</span>
        </div>
        <input {...props} className="pa3 br2 ba b--black-20"/>
    </div>
}
