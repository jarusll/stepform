export default function Input({label, ...props}){
    return <div className="m0 flex flex-column">
        <label htmlFor={props?.name}>{props?.name}</label>
        <input {...props}/>
    </div>
}
