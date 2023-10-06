import { Server, Response } from 'miragejs'

export default function authFakeApi(server, apiPrefix) {
  server.post(`${apiPrefix}/login`, (schema, { requestBody }) => {
    const { username, password } = JSON.parse(requestBody);
    const user = schema.db.signInUserData.findBy({
      accountUserName: username,
      password,
    });

    if (user) {
      const { avatar, username, email, authority } = user;
      return {
        user: { avatar, username, email, authority },
        token: "TOKEN wVYrxaeNa9OxdnULvde1Au5m5w63",
        maxAge: 30 * 24 * 60 * 60,
      };
    }
    return new Response(
      401,
      { some: "header" },
      { message: "fields.errors.userpass_error" }
    );
  });
}
