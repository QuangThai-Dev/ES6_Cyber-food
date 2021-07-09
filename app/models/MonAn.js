class MonAn {
    constructor(maMon, tenMon, loaiMon, giaMon, khuyenMai, tinhTrang, hinhMon, moTa) {
        this.maMon = maMon;
        this.tenMon = tenMon;
        this.loaiMon = loaiMon;
        this.giaMon = giaMon;
        this.khuyenMai = khuyenMai;
        this.tinhTrang = tinhTrang;
        this.hinhMon = hinhMon;
        this.moTa = moTa;
    }
    tinhgiaKhuyenMai() {
        this.giaKM = this.giaMon * (100 - this.khuyenMai) / 100;
    }
}

export {
    MonAn
}