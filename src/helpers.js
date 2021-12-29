/* Choice ramdom item from array */

function choice(items) {
    const randomIdx = Math.floor(Math.random() * items.length);
    return items[randomIdx];
}

/*  Removes the first matching item from items, 
    if item exists, and returns it. 
    Otherwise returns undefined. */

function remove(items, item) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            items.splice(i, 1);
            return items;
        }
    }
}

export { choice, remove };
