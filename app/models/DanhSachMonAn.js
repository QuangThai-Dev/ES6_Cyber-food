export default class DanhSachMonAn {
    constructor() {
        this.mangMonAn = [];
    }

    themMonAn(monAn) {
        // this.arrayFood.push(monAn);
        this.mangMonAn = [...this.mangMonAn, monAn];
    }
}