export default function equal (a, b) {
    const typeA = getType(a);
    const typeB = getType(b);
    if (typeA !== typeB) {
        return false;
    }
    const type = typeA;
    if (/number|string|boolean/.test(type)){
        return a === b;
    }

    if (type === 'date') {
        return a.getTime() === b.getTime();
    }

    if (type === 'nan') {
        return true;
    }

    if (type === 'array') {
        return a.length === b.length && a.every((item, i) => {
            return equal(item, b[i]);
        });
    }

    if (type === 'object' || type === 'map' || type === 'set') {
        return Object.keys(a).every((key) => {
            return equal(a[key], b[key]);
        })
    }

    return a === b;
}

function getType (item) {

    if (item === null) {
        return 'null';
    }
    if (typeof item === 'object') {
        if (Array.isArray(item)) {
            return 'array';
        }
        if (item instanceof Date) {
            return 'date';
        }
        if (item instanceof Promise) {
            return 'promise';
        }
        if (item instanceof Error) {
            return 'error';
        }
        if (item instanceof Map) {
            return 'map';
        }
        if (item instanceof WeakMap) {
            return 'weakmap';
        }
        if (item instanceof Set) {
            return 'set';
        }
        if (item instanceof WeakSet) {
            return 'weakset';
        }
        if (item === global) {
            if (typeof window !== undefined) {
                return 'window';
            }
            return 'global';
        }
        if (item.documentElement || item.innerHTML !== undefined) {
            return 'html';
        }
        if(item.length !== undefined && item.callee) {
            return 'arguments'
        }
    }
    if (typeof item === 'number' && isNaN(item)) {
        return 'nan';
    }
    return typeof item;
}
