import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 50,
    fontFamily: "Asap",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: 200,
    height: 150,
    resizeMode: "contain",
  },
  formContainer: {
    flex: 1,
    marginTop: 20,
  },
  label: {
    color: "#1da1f2",
    fontSize: 15,
    marginBottom: 5,
  },
  input: {
    borderWidth: 0.5,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#07AFDB",
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  orText: {
    textAlign: "center",
    marginVertical: 20,
    color: "#989eb1",
    fontSize: 14,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  socialButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#f20c37",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "48%",
    alignItems: "center",
  },
  FacebookButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#3b5998",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "48%",
    alignItems: "center",
  },
  bottomLinksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  forgotPasswordLink: {
    fontSize: 16,
    color: "#989eb1",
  },
  signUpLink: {
    color: "#1da1f2",
    fontSize: 16,
  },
});

export default styles;
