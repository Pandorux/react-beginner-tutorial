import { Fragment } from "react";

function ListGroup() {
  const items = ["New York", "San Francesco", "Tokyo", "London", "Paris"];

  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
