import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Google from "expo-auth-session/providers/google";
const viewRedirection = "viewHome";
function useGoogleAuth() {
  const navigation = useNavigation();
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "136480279207-mkua8bm84r32fjt4o37el64eu0vdh806.apps.googleusercontent.com",
    iosClientId:
      "136480279207-6li18p4h0b70euu6p0oc5e77jm8ofvbk.apps.googleusercontent.com",
    webClientId:
      "136480279207-qti1um1mmndjp8o34mttdl85b05ip7ol.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      getUserInfo();
      navigation.navigate(viewRedirection);
    }
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      console.error(error);
    }
  };

  return { token, userInfo, promptAsync };
}

export default useGoogleAuth;
