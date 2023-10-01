import { Server, Response } from 'miragejs'


export default function Define_Accomodation(server,apiPrefix){
    server.post(`${apiPrefix}/ManagementResidenceLogo`, (schema, { requestBody }) => {
        return {
            "message": "success",
            "data": {}
        }
    })
}