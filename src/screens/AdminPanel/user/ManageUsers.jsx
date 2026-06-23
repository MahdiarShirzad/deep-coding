import React, { useState } from "react";
import UserHeader from "./UserHeader.jsx";
import UserFilters from "./UserFilters.jsx";
import UserTable from "./UserTable.jsx";
import DeleteConfirmModal from "../DeleteConfirmModal.jsx";

const ManageUsers = () => {
  const [users, setUsers] = useState([
    {
      id: "1",
      fullName: "مهدیار شیرزاد",
      email: "mahdiar@example.com",
      role: "teacher",
      createdAt: "۱۴۰۵/۰۳/۱۹",
      avatar: "",
    },
    {
      id: "2",
      fullName: "علی کریمی",
      email: "ali.k@example.com",
      role: "student",
      createdAt: "۱۴۰۵/۰۳/۲۰",
      avatar: "",
    },
    {
      id: "3",
      fullName: "سارا احمدی",
      email: "sara.ahmadi@example.com",
      role: "admin",
      createdAt: "۱۴۰۵/۰۱/۱۵",
      avatar: "",
    },
    {
      id: "4",
      fullName: "رضا محمدی",
      email: "reza@example.com",
      role: "student",
      createdAt: "۱۴۰۵/۰۳/۲۲",
      avatar: "",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const totalUsers = users.length;
  const teachersCount = users.filter((u) => u.role === "teacher").length;
  const studentsCount = users.filter((u) => u.role === "student").length;

  const handleRoleChange = (userId, newRole) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, role: newRole } : user,
      ),
    );
    console.log(`Role of user ${userId} changed to ${newRole}`);
  };

  const handleOpenDeleteModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setUsers(users.filter((user) => user.id !== selectedUser.id));
    console.log(`User ${selectedUser.id} deleted successfully.`);
    setIsModalOpen(false);
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = roleFilter === "all" || user.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  return (
    <div className="w-full min-h-screen bg-slate-950 rounded-xl text-slate-100 p-4 md:p-8 font-iransans pb-12">
      <UserHeader
        totalUsers={totalUsers}
        teachersCount={teachersCount}
        studentsCount={studentsCount}
      />

      <UserFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        roleFilter={roleFilter}
        setRoleFilter={setRoleFilter}
      />

      <UserTable
        users={filteredUsers}
        onRoleChange={handleRoleChange}
        onDeleteClick={handleOpenDeleteModal}
      />

      <DeleteConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        userName={selectedUser?.fullName}
      />
    </div>
  );
};

export default ManageUsers;
