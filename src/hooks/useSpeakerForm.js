import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { speakerSchema } from "../validations/speakerSchema";
import { useDispatch, useSelector } from "react-redux";
import {
  checkSpeakerEmailExist,
  addSpeaker,
  resetSuccess,
} from "../redux/slices/speakerSlice";

export const useSpeakerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(speakerSchema),
  });

  const dispatch = useDispatch();
  const { loading, error, exist, added } = useSelector(
    (state) => state.speakers
  );

  const onSubmit = async (data) => {
    console.log(data);
    const result = await dispatch(checkSpeakerEmailExist(data.email));

    if (result.payload && result.payload.exist) {
      return;
    }
    await dispatch(addSpeaker(data));
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
