import PropTypes from "prop-types";

const UserInformation = ({ userInfo }) => {
  const { name, email, phone } = userInfo;
  return (
    <tr className="hover:bg-gray-50 transition duration-300 text-sm">
      <td className="py-4 px-6 border-b">{name}</td>
      <td className="py-4 px-6 border-b">{email}</td>
      <td className="py-4 px-6 border-b">{phone}</td>
    </tr>
  );
};

export default UserInformation;

UserInformation.propTypes = {
  userInfo: PropTypes.object,
};
