import "./Projects.css"
function Proj(props){
    return(
        <div className="proj">
            <h4>Projects</h4>
            <body>
                {
                    props.proj.map((proj,index)=>{
                        return(
                            <ol key={index}>
                                <li><span className="pname">project name</span>{proj.pname}</li>
                                <div><span className="ptech">technology stack</span>{proj.ptech}</div>
                                <div><span className="desc">description</span>{proj.desc}</div>
                                <hr size="1"></hr>
                            </ol>
                        );
                    })
                }
            </body>
        </div>
    );
}
export default Proj;