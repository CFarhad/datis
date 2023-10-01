import { Server, Response } from 'miragejs'


export default function Define_Accomodation(server,apiPrefix){
    server.post(`${apiPrefix}/ManagementResidenceLogo`, (schema, { requestBody }) => {
        console.log(requestBody)
        return {
            "message": "success",
            "data": {}
        }
    });
    server.post(`${apiPrefix}/ResidenceInfoCompletionView`,({requestBody}) => {
        console.log(JSON.parse(requestBody))
        return {
            "message": "success",
            "data": {}
        }
    })
}