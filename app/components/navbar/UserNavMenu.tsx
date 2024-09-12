"use client";

interface UserNavMenuProps {
  label: string;
  onClick: () => void;
}

const UserNavMenu: React.FC<UserNavMenuProps> = ({ label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-5 py-4 cursor-pointer hover:bg-gray-50"
    >
      {label}
    </div>
  );
};

export default UserNavMenu;
