import styled from "styled-components";
import { Input, Button, ErrorMessage } from "src/ui";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import { updatePassword } from "src/store/ducks";
import { useAppDispatch, useAppSelector } from "src/hooks";

export interface IPasswordExport {
  currentPassword: string;
  newPassword: string;
}

export const NewPasswordForm: React.FC = () => {
  const { error } = useAppSelector((state) => state.user);
  const { control, handleSubmit } = useForm<IPasswordExport>();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const submitPassword = async (data: IPasswordExport) => {
    dispatch(updatePassword(data)).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        router.push("/subscriptions");
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit(submitPassword)}>
      <h3>Change password</h3>
      <Controller
        control={control}
        name="currentPassword"
        rules={{
          required: "Password is missing",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters long",
          },
        }}
        render={({ field, fieldState }) => {
          return (
            <Input
              type="password"
              placeholder="Current Password"
              {...field}
              ref={null}
              error={fieldState.error}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="newPassword"
        rules={{
          required: "Password is missing",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters long",
          },
        }}
        render={({ field, fieldState }) => {
          return (
            <Input
              type="password"
              placeholder="New Password"
              {...field}
              ref={null}
              error={fieldState.error}
            />
          );
        }}
      />
      <Button theme="primary" type="submit" smallText>
        Save
      </Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  input {
    max-width: 512px;
    margin: 24px 0;
  }
  button {
    margin-top: 48px;
  }
`;
