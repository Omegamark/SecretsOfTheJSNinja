var store = {
    nextId: 1,
    cache: {},
    add: function(fn) {
        fn.id = this.nextId++;
        this.cache[fn.id] = fn;
        return true;
    }
};

function ninja() {
    assert(store.add(ninja),
    "Function was safely added.");
    assert(!store.add(ninja),
    "But it was only added once.");
}