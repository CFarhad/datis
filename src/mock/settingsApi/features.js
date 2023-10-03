export default function Features(server, apiPrefix) {
  server.post(
    `${apiPrefix}/ResidenceAmenitiesAdditionView`,
    (schema, { requestBody }) => {
      console.log(requestBody);
      return {
        message: "success",
        data: {},
      };
    }
  );
}
