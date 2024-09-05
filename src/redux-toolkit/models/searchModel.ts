export class ReadDto<TReadDto> {
    readDto?: TReadDto;
    search?: string;
    page?: number;
    pageSize?: number;
    sortColumn?: string;
    sortColumnDirection?: string;
    selectColumns?: string[];
}
