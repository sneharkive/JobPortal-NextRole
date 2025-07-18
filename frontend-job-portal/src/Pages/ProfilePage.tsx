import Profile from "../Profile/Profile";
import { profile } from "../Data/TalentData";
const ProfilePage = () => {
  return (
    <div className="mb-16 min-h-[90vh] p-4">
      <Profile {...profile} />
    </div>
  );
};

export default ProfilePage;
