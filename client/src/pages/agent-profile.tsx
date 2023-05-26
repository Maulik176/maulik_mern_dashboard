import { useOne } from "@refinedev/core";
import { useParams } from "react-router-dom";
import { ProfileProps } from "interfaces/common";
import { Profile } from "components";

const AgentProfile = () => {
    const { id } = useParams();

    const { data, isLoading, isError } = useOne({
        resource: "users",
        id: id as string,
    });

    console.log(data);

    // const myProfile = data?.data ?? [];
    const myProfile: ProfileProps = data?.data?.[0] ?? {};
    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return (
        // <Profile
        //     type="Agent"
        //     name={myProfile.name}
        //     email={myProfile.email}
        //     avatar={myProfile.avatar}
        //     properties={myProfile.allProperties}
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

export default AgentProfile;
