import React from "react";
import MyCards from "../cards/pages/MyCards";
import Profile from "../users/pages/Profile";
import useUsers from "../users/hooks/useUsers";
import { useCurrentUser } from "../users/porviders/UserProvider";


export default function FormExample() {
  const { user } = useCurrentUser()


  return (
    <div>
      {/* <MyCards /> */}
      <Profile />
    </div>
  );
}
