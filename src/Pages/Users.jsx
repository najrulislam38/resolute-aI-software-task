const Users = () => {
  return (
    <div className="overflow-x-auto ">
      <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
        <thead>
          <tr className="bg-[#333333] text-white">
            <th className="py-3 px-6 text-left border-b">Name</th>
            <th className="py-3 px-6 text-left border-b">Email</th>
            <th className="py-3 px-6 text-left border-b">Phone No.</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50 transition duration-300">
            <td className="py-4 px-6 border-b">Shiyam </td>
            <td className="py-4 px-6 border-b">19</td>
            <td className="py-4 px-6 border-b">Male</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
