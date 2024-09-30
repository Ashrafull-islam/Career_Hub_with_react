import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error=useRouteError();
    console.log(error);
    return (
        <div className=" grid items-center justify-center h-screen">
            <h2 className="text-5xl">Opps !!!</h2>
            <p className="">The page does not found</p>
            <NavLink to="/"> <button className="btn btn-accent text-white">Got Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;