import { Person } from "../../models/person";

const Friend = ({ name, image, balance }: Person) => {
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>

      {balance < 0 && (
        <p className="red">
          You owe {name} ${Math.abs(balance)}
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {name} owes you ${balance}
        </p>
      )}
      {balance === 0 && <p>You and {name} are even</p>}

      <button className="button">Select</button>
    </li>
  );
};

export default Friend;
