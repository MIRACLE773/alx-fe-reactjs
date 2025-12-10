import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Min 6 characters").required("Password required"),
});

const FormikForm = () => {
  return (
    <div style={{ width: "300px" }}>
      <h2>Formik Form</h2>

      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Formik Submitted:", values);
          alert("User registered (mock) with Formik!");
        }}
      >
        <Form>
          <Field name="username" placeholder="Username" />
          <ErrorMessage name="username" component="p" style={{ color: "red" }} />

          <Field name="email" placeholder="Email" />
          <ErrorMessage name="email" component="p" style={{ color: "red" }} />

          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="p" style={{ color: "red" }} />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
