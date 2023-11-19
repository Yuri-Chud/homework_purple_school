declare module 'sort-by' {
    export function sortBy(...properties: Array<string | SortMappingFunction>) : (obj1: any, obj2: any) => number
}