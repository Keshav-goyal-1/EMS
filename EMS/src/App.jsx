import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./Utils/LocalStorage";
import { AuthContext } from "./Context/AuthProvider";

function App() {
	const authData = useContext(AuthContext);
	const [user, setUser] = useState(null);
	const [loggedInUserData, setLoggedInUserData] = useState(null);

	// console.log(authData)
	// console.log(authData.employees)
useEffect(()=>{
  const loggedInUser = localStorage.getItem("loggedInUser: ");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
    // setLocalStorage();
},[])

	const handleLogin = (email, password) => {
		if (email == "admin@me.com" && password == "123") {
			setUser("admin");
			// console.log(user)
			localStorage.setItem("loggedInUser: ", JSON.stringify({ role: "admin" }));
		} else if (authData) {
			const employee = authData.employees.find(
				(e) => email == e.email && password == e.password
			);
			if (employee) {
				setUser("employee");
				localStorage.setItem(
					"loggedInUser: ",
					JSON.stringify({ role: "employee", data: employee })
				);
				setLoggedInUserData(employee);
				// console.log(loggedInUserData);
			}

			// console.log(user)
		} else {
			alert("Invalid credentials");
		}
	};

	return (
		<>
			{!user ? <Login handleLogin={handleLogin} /> : ""}
			{user == "admin" ? <AdminDashboard /> : ""}
			{user == "employee" ? <EmployeeDashboard data={loggedInUserData} /> : ""}
		</>
	);
}

export default App;
