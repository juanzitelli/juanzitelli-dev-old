import { useState } from "react";

const useForm = <T>(initialState: T): [T, (event: any) => void, () => void] => {
  const [formState, setFormState] = useState<T>(initialState);

  const resetForm = () => {
    setFormState(initialState);
  };

  const handleInputChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  return [formState, handleInputChange, resetForm];
};

export default useForm;
