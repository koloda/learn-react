const saveItems = function (items) {
    const data = JSON.stringify(items);
    window.localStorage.setItem('contact-app-items', data);
}

const load = function () {
    const data = window.localStorage.getItem('contact-app-items');
    let items;
    try {
        items = JSON.parse(data) ? JSON.parse(data) : [];
    } catch (e) {
        items = [];
    }

    return items;
}

export {saveItems, load};