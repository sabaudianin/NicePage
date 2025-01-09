import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema } from "../validations/newsletterSchema";

export const useNewsletterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
