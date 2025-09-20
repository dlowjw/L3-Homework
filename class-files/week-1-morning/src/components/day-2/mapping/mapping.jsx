import React from "react";

/**
 * Using map return a list of all the numbers in nums doubled. put them in a <p></p> tag
 */

const DoubleNum = () => {
  const nums = [1, 2, 3, 4];

  return (
    <div>
      {nums.map((num, idx) => {
        const doubledNum = num * 2;

        return <p>{doubledNum}</p>;
      })}
    </div>
  );
};

/**
 * Return the elements in the frameworks array each as a div element
 */

const JSXElements = () => {
  const frameworks = ["react", "vue", "angular"];
  return <div>{frameworks.map(framework => <div>{framework}</div>)}</div>;
};

/**
 * Create a small user profile card, using the users list. Map over the elements and return the user's name inside of a span tag
 *
 */

const UsersList = () => {
  const users = [
    { employeeId: 1, name: "Alice" },
    { employeeId: 2, name: "Bob" },
    { employeeId: 3, name: "Charlie" },
  ];

  return <div>
    {users.map((user, idx) => {
      return <div>{user.employeeId + " " +   user.name}</div>
    })}
  </div>;
};

const Mapping = () => {
  return (
    <div>
      <DoubleNum />
      <JSXElements />
      <UsersList />
    </div>
  );
};

export default Mapping;
