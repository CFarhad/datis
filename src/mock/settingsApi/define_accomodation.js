import { Server, Response } from 'miragejs'


export default function Define_Accomodation(server,apiPrefix){
    // UPLOAD LOGO
    server.post(`${apiPrefix}/ManagementResidenceLogo`, (schema, { requestBody }) => {
        return new Response(200, {}, {
            "message": "success",
            "data": {}
        })
    });
    // REMOVE LOGO
    server.delete(`${apiPrefix}/ManagementResidenceLogo`, (schema, { requestBody }) => {
        return new Response(200, {}, {
            "message": "success",
            "data": {}
        })
    });


    server.post(`${apiPrefix}/ResidenceInfoCompletionView`,(schema,{requestBody}) => {
        console.log(JSON.parse(requestBody))
        return {
            "message": "success",
            "data": {}
        }
    })

    server.get(`${apiPrefix}/ResidenceInfoCompletionView`,(schema,{requestBody}) => {
        let data = schema.db.define_accomodation;
        return {
            "message": "success",
            "data": data
        }
    })
}