export default class MonAn {
    constructor(maMon, tenMon, loaiMon, giaMon, khuyenMai, tinhTrang, hinhMon, moTa) {
        this.maMon = maMon;
        this.tenMon = tenMon;
        this.loaiMon = loaiMon;
        this.giamon = giaMon;
        this.khuyenMai = khuyenMai;
        this.tinhTrang = tinhTrang;
        this.hinhMon = hinhMon;
        this.moTa = moTa;
    }
    tinhgiaKhuyenMai() {
        this.giaKM = this.giamon * (100 - this.khuyenMai) / 100;
    }
}