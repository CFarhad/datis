import { Server, Response } from 'miragejs'


export default function Define_Accomodation(server,apiPrefix){
    server.post(`${apiPrefix}/define-accomodation`, (schema, { requestBody }) => {
        return {
            "message": "success",
            "data": {}
        }
    })
}