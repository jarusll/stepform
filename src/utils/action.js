export default function action(actionString, payload){
    return {type: actionString, payload: payload ?? ""}
}
