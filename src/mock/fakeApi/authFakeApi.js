import { Server, Response } from 'miragejs'

export default function authFakeApi(server, apiPrefix) {
  server.post(`${apiPrefix}/sign-in`, (schema, { requestBody }) => {
    const { userName, password } = JSON.parse(requestBody);
    const user = schema.db.signInUserData.findBy({
      accountUserName: userName,
      password,
    });
    console.log("user", user);
    if (user) {
      const { avatar, userName, email, authority } = user;
      return {
        user: { avatar, userName, email, authority },
        token: "wVYrxaeNa9OxdnULvde1Au5m5w63",
      };
    }
    return new Response(
      401,
      { some: "header" },
      { message: "Invalid email or password!" }
    );
  });
}
