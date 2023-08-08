import { useState } from "react";
import { useAuth } from "./hooks/useAuth";
import { User } from "./types/auth";
import snake from "./assets/snake.png";
import "./App.css";

function App() {
  const { state, dispatch } = useAuth();

  const [username, setUsername] = useState("");

  const login = () => {
    const user: User = { id: 1, username: username };
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="content">
      {state.isAuthenticated ? (
        <div className="d-flex gap-5">
          <div>
            <img
              src={snake}
              width={200}
              height={200}
              className="rounded-circle"
            />
          </div>
          <div>
            <h2>
              ยินดีต้อนรับ, {` `} {state.user!.username}
            </h2>
            <button className="my-2 btn btn-danger" onClick={logout}>
              ออกจากระบบ
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1>กรุณาใส่ชื่อ</h1>
          <input
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="ชื่อ..."
          />
          <button className="my-2 btn btn-primary" onClick={login}>
            เข้าสู่ระบบ
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
