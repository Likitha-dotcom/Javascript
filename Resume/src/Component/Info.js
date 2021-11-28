import "./Info.css"
function Info(props){
    return(
        <div className="">
            <div className="name">{props.name}</div>
            <div className="addr">{props.addr}</div>
            <div className="phno">{props.phno}</div>
            <div className="email">{props.email}</div>
        </div>
    );
}
export default Info;
