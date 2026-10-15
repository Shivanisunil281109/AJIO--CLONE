
import { useEffect, useState } from "react";
import api from "../../config/axiosConfig";
import "../CSS/AdminUsers.css";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await api.get("/admin/get-all-users");

      if (response.data.success) {
        setUsers(response.data.users);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="admin-users-page">
      <h1>All Users</h1>

      <div>
        {users?.length > 0 ? (
          <div className="admin-users-container">
            {users.map((user, index) => (
              <section
                key={user._id}
                className="admin-user-card"
              >
                <h2>Sr. No. : {index + 1}</h2>

                <h2>Name : {user.name}</h2>

                <h2>Email : {user.email}</h2>

                <button type="button">
                  View Details
                </button>
              </section>
            ))}
          </div>
        ) : (
          <p className="admin-users-empty">
            No Users found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminUsers;
