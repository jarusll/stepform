export default function Input({label, ...props}){
    return <div className="m0 flex flex-column">
        <div className="m0">
            <label htmlFor={props?.name}>{props?.name}</label>
            <span className="gray">{props?.info}</span>
        </div>
        <input {...props}/>
    </div>
}
