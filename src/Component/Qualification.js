import "./Qualification.css"

const Qual =(props)=>{
    return(
        <div>
            <h4>education qualification</h4>
        <table className="qual" border="1">
            <thead className="qual-header">
                <th>college</th>
                <th>university</th>
                <th>percent</th>
                <th>year of joining</th>
            </thead>
            <tbody className="qual-body">
                {
                    props.qual.map((qual,index)=>{
                        return(
                            <tr key={index}>
                                <td>{qual.college}</td>
                                <td>{qual.university}</td>
                                <td>{qual.percent}</td>
                                <td>{qual.yoj}</td>
                            </tr>
                        );
                    })
                }

            </tbody>
        </table>
        </div>
    );
}
export default Qual;
