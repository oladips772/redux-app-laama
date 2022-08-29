/** @format */
import {useSelector} from "react-redux";

function Sidebar() {
  const user = useSelector((state) => state.user);
  const { name } = user;

  return (
    <div className="w-[180px] bg-black h-[100vh] mt-1">
      <div className="p-2 text-white">
        <h3 className="my-2 bg-slate-600 p-2 rounded-sm te text-lg">Home</h3>
        <h3 className="my-2 bg-slate-600 p-2 rounded-sm te text-lg">Home</h3>
        <h3 className="my-2 bg-slate-600 p-2 rounded-sm te text-lg">Home</h3>
        <h3 className="my-2 bg-slate-600 p-2 rounded-sm te text-lg">Home</h3>
        <h3 className="my-2 bg-slate-600 p-2 rounded-sm te text-lg">Home</h3>
        <h3 className="my-2 bg-slate-600 p-2 rounded-sm te text-lg">Home</h3>
        <h3 className="my-2 bg-slate-600 p-2 rounded-sm te text-lg">Home</h3>
        <h3 className="my-2 bg-slate-600 p-2 rounded-sm te text-lg">Home</h3>
        <h3 className="my-2 bg-slate-600 p-2 rounded-sm te text-lg">Home</h3>
        <h3 className="my-2 bg-slate-600 p-2 rounded-sm te text-lg">Home</h3>
        <h3 className="my-2 bg-slate-600 p-2 rounded-sm te text-lg">Home</h3>
        <h3 className="my-2 bg-slate-600 p-2 rounded-sm te text-lg cursor-pointer">
          Logout {name}
        </h3>
      </div>
    </div>
  );
}

export default Sidebar;
