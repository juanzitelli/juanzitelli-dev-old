import { useQuery } from "react-query";

export const useProjects = () => {
  return useQuery("projects", () =>
    fetch("https://api.github.com/users/juanzitelli/repos").then(res =>
      res.json()
    )
  );
};
