const enum EType {
    GET,
    POST,
    PUT,
    DELETE,
}

interface Api {
    type: EType,
    url: string,
}

interface ApiDict {
    [key: string]: Api,
}

const apis: ApiDict = {
    games : {
        type: EType.GET,
        url: '/api/game_list/',
    },
}

function runApi(key: string, body: any, options: any): Promise<any> {
    const api: Api = apis[key]
    switch (api.type) {
        case EType.GET:
            return (Vue as any).http.get(api.url, options.join())
            break
        case EType.POST:
            return (Vue as any).http.post(api.url, body, options)
            break
        case EType.PUT:
            return (Vue as any).http.put(api.url, body, options)
            break
        case EType.DELETE:
            return (Vue as any).http.delete(api.url, body, options)
            break
    }
}
