export const handler = async(event) => {
    const repositories = [
        {
            id:1,
            name:"Hospital Ejemplo 1",
            type : "CDA"
        },
        {
            id:2,
            name:"Sanatorio Ejemplo 2",
            type : "FHIR"
        },
        {
            id:3,
            name:"Hospital Ejemplo 3",
            type : "CDA"
        }
    ];
    
    const response = {
        statusCode: 200,
        headers : {"Content-Type": "application/json"},
        body: JSON.stringify(repositories)
    }

    return response;
};
