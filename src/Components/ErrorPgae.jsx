import { useRouteError } from "react-router-dom";


const ErrorPgae = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div>
            <h2>Oops!!</h2>
            {
                error.status || error.statustext
            }
        </div>
    );
};

export default ErrorPgae;