import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

export default function Users() {
  const [users, setUsers] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.to(cardRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  const addUser = () => {
    if (!username.trim() || !email.trim()) return;

    const newUser = { username, email };
    setUsers([...users, newUser]);

    setUsername("");
    setEmail("");

    setTimeout(() => {
      gsap.from(".user-item:last-child", {
        opacity: 0,
        x: 30,
        duration: 0.4,
      });
    }, 10);
  };

  return (
   <div className="card" ref={cardRef}>
  <h2>Users</h2>

  <div className="users-layout">
    {}
    <div className="user-form">
      <h3>Add new user</h3>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={addUser}>Dodaj</button>
    </div>

    {}
    <div className="user-list">
      <ul>
        {users.map((user, index) => (
          <li key={index} className="user-item">
            {user.username} – {user.email}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

  );
}
