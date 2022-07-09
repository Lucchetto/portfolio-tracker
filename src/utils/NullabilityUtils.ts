export function ifNotUndefined<T1, T2>(object: T1 | undefined, notUndefined: (it: T1) => T2): T2 | undefined {
    if (object !== undefined) {
        return notUndefined(object)
    }
}
