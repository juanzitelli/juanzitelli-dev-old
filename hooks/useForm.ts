import { useState } from "react";

interface useFormProps {
  [prop: string]: string | number | Date
}

const useForm = (initialState: useFormProps) => {
  const [formState, setFormState] = useState(initialState);

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
