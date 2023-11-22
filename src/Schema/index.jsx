import * as Yup from "yup";
class formSchema {
  static Login = () => {
    return Yup.object({
      email: Yup.string().email().required("email is required"),
      password: Yup.string().required("Password is required"),
    });
  };

  static card = () => {
    return Yup.object({
      card: Yup.number().min(16).required("Card Number is required"),
      expiry: Yup.string().required("Expiry is required"),
      cvc: Yup.number().min(3).required("cvc is required"),
      cardName: Yup.string().required("Card Name  is required"),
    });
  };
  static discount = () => {
    return Yup.object({
      username: Yup.string().required("O2 UserName is required"),
      password: Yup.string().required("O2 Password is required"),
    });
  };
}

export default formSchema;
