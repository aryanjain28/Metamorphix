import { useMutation } from "react-query";
import { RegiaterUserPayload, registerUser } from "../services/user.services";

export const useRegisterUser = () => {
  return useMutation(
    ({
      payload,
      callback,
    }: {
      payload: RegiaterUserPayload;
      callback: () => void;
    }) => {
      return registerUser(payload);
    },

    {
      onSuccess(data, variables, context) {
        variables.callback();
      },
      onError(error, variables) {},
    }
  );
};
