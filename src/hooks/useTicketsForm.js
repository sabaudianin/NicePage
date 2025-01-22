import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema } from "../validations/newsletterSchema";
import { useDispatch, useSelector } from "react-redux";
import {
  checkEmailExist,
  addEmail,
  resetSuccess,
} from "../redux/slices/emailSlice";

export const useNewsletterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(newsletterSchema),
  });

  const dispatch = useDispatch();
  const { loading, error, exist, added } = useSelector(
    (state) => state.newsletter
  );

  const onSubmit = async (data) => {
    console.log(data);
    const result = await dispatch(checkEmailExist(data.email));
    if (result.payload.exist) {
      return;
    }
    await dispatch(addEmail(data.email));
    dispatch(resetSuccess());
    reset();
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    loading,
    error,
    exist,
    added,
  };
};
