export default function RadioButton({ icon, title, subtitle, selected, ...props }) {
    return <button
        className={"outline-none bw1 bg-transparent ba b--black-20 br2 pa2 w-100 tl h-100 pointer " + (selected === true && " b--purple")}
        {...props}
    >
        <img src={icon} height="40" />
        <h5>{title}</h5>
        <span>{subtitle}</span>
    </button>
}
