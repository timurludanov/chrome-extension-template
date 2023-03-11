import React, { FC } from "react";
import Header from "./components/Header";
import useUser from "./hooks/useUser";

const OptionsApp: FC = () => {
  const { user, loading, error } = useUser();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <>
      <Header title="Options" />
      <div>Content</div>
      <div>ID: {user.id}</div>
      <div>Email: {user.email}</div>
      <div>FirstName: {user.first_name}</div>
      <div>LastName: {user.last_name}</div>
    </>
  );
};

export default OptionsApp;
