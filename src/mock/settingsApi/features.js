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
  server.get(`${apiPrefix}/hotelfeatureslists`, (schema, { requestBody }) => {
    let data = schema.db.facilitiesList;
    return {
      message: "success",
      data,
    };
  });
}
