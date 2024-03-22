import axios from "axios";
import { useEffect, useState } from "react";
import Application from "../components/Application";

const Applications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios
      .get("https://resolute-ai-software-task-server.vercel.app/applications")
      .then((res) => {
        setApplications(res?.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="overflow-x-auto ">
      <table className="min-w-[90%] shadow-md text-center border mx-auto border-gray-100  my-6">
        <thead>
          <tr className="bg-[#333333] text-white">
            <th className="py-3 px-6 text-left border-b">Title</th>
            <th className="py-3 px-6 text-left border-b">Name</th>
            <th className="py-3 px-6 text-left border-b">Email</th>
            <th className="py-3 px-6  border-b text-end">Comments</th>
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
  );
};

export default Applications;
