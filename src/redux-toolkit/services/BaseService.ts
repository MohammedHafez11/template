import { useSession } from "next-auth/react";
import { apiSlice } from "../api/apiSlice";
import config from '../config/config.json';

export class BaseService<TRead, TWrite> {
    private factory: () => TWrite;
    
    constructor(factory: () => TWrite) {
        this.factory = factory;
    }

     Apis = ( accessToken: string) => {
        return apiSlice.injectEndpoints({
            overrideExisting: true,
            endpoints: (builder) => ({
                getAll: builder.query({
                    query: (item: TRead) => ({
                        url: `${config.apiBaseUrl}api/${(this.factory() as any).constructor.name}/GetAll`,
                        method: "POST",
                        body: item,
                        headers: {
                            tenant: "fathy",
                            'accept-Language': 'ar',
                            Authorization: accessToken
                        },
                    }),
                }),
                add: builder.mutation({
                    query: (item: TWrite) => ({
                        url: `${config.apiBaseUrl}api/${(this.factory() as any).constructor.name}`,
                        method: "POST",
                        body: item,
                        headers: {
                            tenant: "fathy",
                            'accept-Language': 'ar',
                            Authorization: accessToken
                        },
                    }),
                }), addByFormData: builder.mutation({
                    query: ( { item, formData=new FormData() }: { item: TWrite, formData?: FormData } ) => {

                       var itemdata = item as any;
                        Object.keys(itemdata).forEach(key => {
                            formData.append(key, itemdata[key]);
                        }); 
                   
                        return {
                            url: `${config.apiBaseUrl}api/${(this.factory() as any).constructor.name}`,
                            method: "POST",
                            body: formData,
                            headers: {
                                tenant: "fathy",
                                'accept-Language': 'ar',
                                Authorization: accessToken
                               
                            },
                        };
                    },
                }),
                update: builder.mutation({
                    query: ({ id, item }: { id: string, item: TWrite }) => ({
                        url: `${config.apiBaseUrl}api/${(this.factory() as any).constructor.name}?id=${id}`,
                        method: "PUT",
                        body: item,
                        headers: {
                            tenant: "fathy",
                            'accept-Language': 'ar',
                            Authorization: accessToken
                        },
                    }),
                }),
                delete: builder.mutation({
                    query: (id) => ({
                        url: `${config.apiBaseUrl}api/${(this.factory() as any).constructor.name}?id=${id}`,
                        method: "DELETE",
                        headers: {
                            tenant: "fathy",
                            'accept-Language': 'ar',
                            Authorization: accessToken
                        },
                    }),
                }),
                getById: builder.query({
                    query: ( id ) => ({
                        url: `${config.apiBaseUrl}api/${(this.factory() as any).constructor.name}/${id}`,
                        method: "GET",
                        headers: {
                            tenant: "fathy",
                            'accept-Language': 'ar',
                            
                        },
                    }),
                }),
            }),
        });
    };
}
