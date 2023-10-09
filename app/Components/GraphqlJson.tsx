interface headers {
    'Content-Type': string;
}

interface graphqlJson {
    method: string;
    headers: headers;
    body: string;
    next: any; // @TODO: make this optional in a better way. so that any props of fetch can be used.
}
// Above are useless

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // @TODO: Remove for Https urls

const GraphqlJson = async ($requestQuery: any) => {
    const requestJson = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify($requestQuery),
        next: {revalidate: 10}
    }
    const responseData = await fetch(process.env.GRAPHQL_API_URL as string, requestJson).then((res) => res.json());
    return responseData;
}

export default GraphqlJson;
