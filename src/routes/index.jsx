import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "../pages/Dashboard";
import Navigation from "../components/Navigation";


const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="*" element={<Navigation><Dashboard/></Navigation>} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp;