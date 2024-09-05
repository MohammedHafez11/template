import { BaseService } from "./BaseService";
import { Bank } from "../models/bankModel";
import { ReadDto } from "../models/searchModel";


export class BankServices extends BaseService<ReadDto<Bank>, Bank> {
    constructor() {
        super(() => new Bank());
        Background.backgrounda;


        
    }
}

export const bankApi = new BankServices().Apis();

export const { useGetAllQuery, useGetByIdQuery, useDeleteMutation, useAddMutation } = bankApi;


export enum Background { 
    backgrounda="#ffff",
    backgroundc="#ffff"
} 