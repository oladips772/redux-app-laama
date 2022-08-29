/** @format */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update, remove, addHello } from "../redux/userSlice";

function UpdateForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);

  const Update = () => {
    dispatch(addHello({ name, email }));
  };

  const Delete = () => {
    dispatch(remove());
  };

  return (
    <div className="ml-4 border-slate-400 border-l p-4">
      <div>
        <h1 className="text-3xl font-bold p-2">
          Update your account {userName}
        </h1>
        <p
          className="bg-red-500 text-white p-[4px] cursor-pointer rounded-md font-semibold text-center"
          onClick={Delete}
        >
          Delete account
        </p>
        <div className="border-t border-slate-400 p-2 w-[500px] h-[500px]">
          <div className="flex flex-col my-4">
            <label htmlFor="name">Username</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-[35px] border border-slate-500 p-2 rounded-sm outline-none"
            />
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="name">Email</label>
            <input
              type="text"
              name="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-[35px] border border-slate-500 p-2 rounded-sm outline-none"
            />
          </div>
          <button
            className="text-center p-2 bg-green-600 text-white cursor-pointer w-full rounded-sm"
            onClick={Update}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateForm;
