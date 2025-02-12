import { ScaleLoader } from "react-spinners";


const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ScaleLoader color="#fd9205" width={20} />
    </div>
  );
};

export default Loading;