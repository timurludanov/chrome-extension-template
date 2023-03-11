import React, { FC } from "react";
import Header from "./components/Header";
import useUser from "./hooks/useUser";

const PopupApp: FC = () => {
  const { user, loading, error } = useUser();

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  return (
    <>
      <Header title="Popup" />
      <div>Content</div>
      <div>ID: {user.id}</div>
      <div>Email: {user.email}</div>
    </>
  );
};

export default PopupApp;
