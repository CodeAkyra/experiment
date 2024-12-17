import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import AdminPanel from "./components/AdminPanel";
import LoginForm from "./components/LoginForm";

export default function Message() {
  const user = {
    name: "Pizarra",
  };

  const player = {
    username: "Akira",
  };
  const name = "Mark";
  const items = ["Bag", "Pencil", "Eraser", "Notebook"];
  const isLoggedIn = true;
  const a1 = true && true;

  return (
    <>
      {a1}
      <h1 className="underline">
        Hello <span className="text-2xl font-bold">{name}</span> !
      </h1>
      <ListGroup />
      <h1>List Group</h1>
      <ul>
        {items.map((item) => (
          <li key={item} className="bg-red-100 hover:bg-red-300 cursor-pointer">{item}</li>
        ))}
      </ul>
      <Button />

      <h1>{user.name}</h1>
      <h2>{player.username}</h2>

      <div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>
    </>
  );
}
