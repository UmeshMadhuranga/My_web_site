export default class Item{

    constructor(item_code, item_name, item_price, item_qty) {
        this._item_code = item_code;
        this._item_name = item_name;
        this._item_price = item_price;
        this._item_qty = item_qty;
    }

    get item_code() {
        return this._item_code;
    }

    set item_code(item_code) {
        this._item_code = item_code;
    }

    get item_name() {
        return this._item_name;
    }

    set item_name(item_name) {
        this._item_name = item_name;
    }

    get item_price() {
        return this._item_price;
    }

    set item_price(item_price) {
        this._item_price = item_price;
    }

    get item_qty() {
        return this._item_qty;
    }

    set item_qty(item_qty) {
        this._item_qty = item_qty;
    }

}