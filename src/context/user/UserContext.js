import { createContext, useContext } from "react";

export const UserContext = createContext();

export const useUser = () => {
  const userContext = useContext(UserContext);

  if (userContext === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return userContext;
};
// export const UserProvider = ({ children }) => {
//   const [name, setName] = useState("");
//   const [questions, setQuestions] = useState();
//   const [score, setScore] = useState(0);

//   const value = {
//     name,
//     score,
//     questions,
//     setName,
//     setScore,
//     setQuestions,
//   };
//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
