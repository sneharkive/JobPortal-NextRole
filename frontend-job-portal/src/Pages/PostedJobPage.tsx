import PostedJob from "../Components/PostedJob/PostedJob";
import PostedJobDesc from "../Components/PostedJob/PostedJobDesc";

const PostedJobPage = () => {
  return (
    <div className="mb-16 min-h-[90vh] p-4">

      <div className="flex gap-6">
        <PostedJob />
        <PostedJobDesc />
      </div>
    </div>
  );
};

export default PostedJobPage;
