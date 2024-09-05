export class Bank {
    address?: string;
    mobile?: string;
    countryMobileId?: string;
    email?: string;
    names?: Name[];
    branchId?: string;
    notes?: string;
    balance?: number;
    code?: number;
    balanceFirstDuration?: number;
}

export class Name {
    id?: string = "atef";
    language?: string;
    value?: string;
    localizationSetsId?: string;
}