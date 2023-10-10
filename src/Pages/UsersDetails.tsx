import { useSelector } from "react-redux";
import { RootState } from "../App/store";
import { useDispatch } from "react-redux";
import { removeUid } from '../redux/features/userAction'

export const UsersDetails = () => {
  const dispatch = useDispatch();

  const users = useSelector((state: RootState) => state.removeUsers)

  const handleEdit = (userId: any) => {
    // Add your edit logic here
    console.log('Edit user with ID:', userId);
    // const userID = users.filter((uid) => uid.id !== userID)
  };

  const handleDelete = (userId: any) => {
    // Add your delete logic here
    console.log('Delete user with ID:', userId);
    dispatch(removeUid(userId))

  };
  // console.log(users)

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-[70%] lg:w-full">
        <h2 className="text-2xl font-semibold mb-4">View Users</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border py-2 px-4">Name</th>
              <th className="border py-2 px-4">Email</th>
              <th className="border py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.users.map((user) => (
              <tr key={user.id}>
                <td className="border py-2 px-4">{user.firstName}</td>
                <td className="border py-2 px-4">{user.email}</td>
                <td className="border py-2 px-4">
                  <button
                    onClick={() => handleEdit(user.id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


