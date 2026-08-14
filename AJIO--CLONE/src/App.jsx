import { Routes, Route } from "react-router";

import UserNavbar from "./User/Components/UserNavbar";


function App() {
    return (
        <Routes>

            <Route
                path="/UserNavbar"
                element={<UserNavbar />}
            />

        </Routes>
    );
}

export default App;