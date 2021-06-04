// write your custom hook here to control your checkout form
import useLocalStorage from "./useLocalStorage";

const useForm = (initialValue) => {
  const [values, setValues] = useLocalStorage("cartValue", initialValue);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return [values, handleChanges];
};

export default useForm;
