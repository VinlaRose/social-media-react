import { useParams } from "react-router-dom"

export const UserPage = () =>{
    const {_id} = useParams();

    return(
        <div >
            <h1>this is my user Profile : {_id}</h1>
            

        </div>
    )
}