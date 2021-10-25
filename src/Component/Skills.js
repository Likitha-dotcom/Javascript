import "./Skills.css"
function Skills(props){
    return(
        <div className="skill">
            <h4>Techinical Skills</h4>
            <ul type="disc" className="tlist">
                <li><span>programming language:</span>{props.lang}</li>
                <li><span>operating system:</span>{props.os}</li>
                <li><span>database:</span>{props.database}</li>
                <li><span>tools and technology:</span>{props.tech}</li>
            </ul>
        </div>
    );
}
export default Skills;