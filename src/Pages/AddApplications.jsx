import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddApplications = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/applications", data)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Application submit successful.");
          reset();
        }
      })
      .catch((error) => console.log(error.message));
  };

  const handleCancel = () => {
    reset();
  };

  return (
    <div className=" max-w-2xl mx-auto px-5 md:px-10 my-8 md:mb-14 lg:mb-20">
      <div className="bg-base-100 border p-5 md:p-10 rounded-md shadow-md">
        <h1 className="text-center text-xl md:text-2xl font-medium mb-8">
          Add Applications
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex-col space-y-3">
            <div className="">
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-gray-900 "
              >
                Your Name
              </label>

              <input
                htmlFor="name"
                {...register("name", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                placeholder="Your Name"
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-900 "
              >
                Email
              </label>
              <input
                htmlFor="email"
                {...register("email", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                placeholder="Your Email"
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="title"
                className="block mb-2 font-medium text-gray-900 "
              >
                Title
              </label>
              <input
                htmlFor="title"
                {...register("title", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                placeholder="Title"
              />
              {errors.title && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="description"
                className="block mb-2 font-medium text-gray-900 "
              >
                Comments
              </label>
              <textarea
                type="text"
                name="comment"
                rows={4}
                id="comment"
                {...register("comment", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                placeholder="Write here"
              ></textarea>
              {errors.comment && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
          </div>

          <div className="py-5">
            <button
              type="submit"
              className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Add Application
            </button>
            <button
              onClick={() => handleCancel()}
              className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center ml-5 "
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddApplications;
