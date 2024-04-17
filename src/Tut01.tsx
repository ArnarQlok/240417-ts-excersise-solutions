// import React from "react";

// interface UserProps {
//   name: string;
//   age: number;
// }

// const User = ({ name, age }: UserProps) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>{age} år gammal</p>
//     </div>
//   );
// };

// export default User;

import React from "react";

interface UserProps {
  name: string;
  age?: number;
}

const User = ({ name, age }: UserProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age ? `${age} år gammal` : "Ålder okänd"}</p>
    </div>
  );
};

export default User;
