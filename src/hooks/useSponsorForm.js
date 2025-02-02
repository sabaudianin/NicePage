// src/hooks/useSponsorForm.js
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sponsorSchema } from "../validations/sponsorSchema";
import { useDispatch, useSelector } from "react-redux";
import {
  checkEmailExist,
  addData,
  resetSuccess,
} from "../redux/slices/sponsorSlice";

export const useSponsorForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(sponsorSchema),
  });

  const dispatch = useDispatch();
  const { loading, error, exist, added } = useSelector(
    (state) => state.sponsors
  );

  const onSubmit = async (data) => {
    console.log(data);

    const result = await dispatch(checkEmailExist(data.email));
    if (result.payload && result.payload.exist) {
      //Maybe add alert??
      return;
    }

    await dispatch(addData(data));
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
