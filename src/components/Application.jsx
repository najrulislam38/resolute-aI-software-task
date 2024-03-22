import PropTypes from "prop-types";

const Application = ({ application }) => {
  const { name, email, title, comment } = application;
  return (
    <tr className="hover:bg-gray-50 transition duration-300 text-sm">
      <td className="py-4 px-6 border-b">{title}</td>
      <td className="py-4 px-6 border-b">{name}</td>
      <td className="py-4 px-6 border-b">{email}</td>
      <td className="py-4 px-6 border-b">{comment}</td>
    </tr>
  );
};

export default Application;

Application.propTypes = {
  application: PropTypes.object,
};
