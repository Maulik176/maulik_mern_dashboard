import { useGetIdentity, useOne } from "@refinedev/core";

import { Profile } from "components";
import { ProfileProps } from "interfaces/common";

const MyProfile = () => {
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: true,
  });
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: user?.userid,
  });

//   const myProfile = data?.data ?? [];
  const myProfile: ProfileProps = data?.data?.[0] ?? {};


  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error...</div>;

  return (
    // <Profile
    //   type="My"
    //   name={myProfile.name}
    //   email={myProfile.email}
    //   avatar={myProfile.avatar}
    //   properties={myProfile.allProperties}
    // />
    <Profile
  type="Agent"
  name={myProfile.name}
  email={myProfile.email}
  avatar={myProfile.avatar}
  properties={myProfile.properties}
  allProperties={myProfile.allProperties}
/>
  );
};

export default MyProfile;
