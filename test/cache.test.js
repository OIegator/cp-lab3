import {Cache} from "../src/cache";

test('We can read', () => {
    let test_cache;
    test_cache = new Cache();
    test_cache.add('John', 3, 2);
    expect(test_cache.get('John')).toBe(3);
});

test('Cache returns null if there no such key', () => {
    let test_cache = new Cache();
    expect(test_cache.get('John')).toBeNull();
});

test('If the key-value is given without specifying amount of calls, then the amount of calls is 1', () => {
    let test_cache = new Cache();
    test_cache.add('John', 3);

    expect(test_cache.get('John')).toBe(3);
    expect(test_cache.get('John')).toBeNull();
});

test('Cache return null after 3 calls', () => {
    let test_cache = new Cache();
    test_cache.add('John', 3, 2);

    expect(test_cache.get('John')).toBe(3);
    expect(test_cache.get('John')).toBe(3);
    expect(test_cache.get('John')).toBeNull();
});