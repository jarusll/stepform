export default function StepFormItem({title, subtitle, children, icon, ...props}) {
    return <div>
        <div className="tc">
            <img src={icon} className="mt4"/>
            <h2 className="f2">{title}</h2>
            <h4 className="gray fw1">{subtitle}</h4>
        </div>
        <form className="w-50 center" onSubmit={e => e.preventDefault()}>
            {children}
        </form>
    </div>
}
