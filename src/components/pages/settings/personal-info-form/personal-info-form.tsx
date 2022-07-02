import styled from "styled-components";
import { Input, Button, ErrorMessage} from "src/ui";
import { useForm, Controller } from "react-hook-form";
import { EMAIL_REGEX } from "src/lib/constants";
import { updateUserInfo } from "src/store/ducks";
import { useAppDispatch, useAppSelector } from "src/hooks";

interface IPersonalInfoForm {
  changeStep: (value: string) => void;
}

export interface IUsernameUpdate {
  username: string;
  email: string;
}

export const PersonalInfoForm: React.FC<IPersonalInfoForm> = ({
  changeStep,
}) => {
  const { error } = useAppSelector((state) => state.user);
  const { control, handleSubmit } = useForm<IUsernameUpdate>();
  const dispatch = useAppDispatch();

  const submitPersonalInfo = async (data: IUsernameUpdate) => {
    dispatch(updateUserInfo(data)).then(() => changeStep("password"));
  };

  return (
    <Form onSubmit={handleSubmit(submitPersonalInfo)}>
      <h3>Personal Info</h3>
      <Controller
        control={control}
        name="username"
        rules={{
          required: "Username is missing",
          minLength: {
            value: 3,
            message: "Username must be at least 3 characters long",
          },
        }}
        render={({ field, fieldState }) => {
          return (
            <Input
              type="text"
              placeholder="Username"
              {...field}
              ref={null}
              error={fieldState.error}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="email"
        rules={{
          required: "Email is not valid",
          pattern: EMAIL_REGEX,
        }}
        render={({ field, fieldState }) => {
          return (
            <Input
              type="text"
              placeholder="Email"
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
