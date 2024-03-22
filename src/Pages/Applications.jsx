import axios from "axios";
import { useEffect, useState } from "react";
import Application from "../components/Application";
import useAuth from "../Hooks/useAuth";
import Loading from "../components/Loading";

const Applications = () => {
  const [applications, setApplications] = useState([]);

  const { loading } = useAuth();

  if (loading) {
    <Loading />;
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/applications")
      .then((res) => {
        setApplications(res?.data);
      })
      .catch((error) => console.log(error.message));
  });

  return (
    <div>
      {applications ? (
        <div className="overflow-x-auto ">
          <table className="min-w-[90%] shadow-md border mx-auto border-gray-100  my-6">
            <thead>
              <tr className="bg-[#333333] text-white">
                <th className="py-3 px-6 text-left border-b">Title</th>
                <th className="py-3 px-6 text-left border-b">Name</th>
                <th className="py-3 px-6 text-left border-b">Email</th>
                <th className="py-3 px-6 text-left border-b">Comments</th>
              </tr>
            </thead>
            <tbody>
              {applications?.map((application) => (
                <Application
                  key={application._id}
                  application={application}
                ></Application>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Applications;
