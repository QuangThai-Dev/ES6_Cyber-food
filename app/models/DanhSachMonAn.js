class DanhSachMonAn {
    constructor() {
        this.mangMonAn = [];
    }

    themMonAn(monAn) {
        // this.arrayFood.push(monAn);
        this.mangMonAn = [...this.mangMonAn, monAn];
    }

    timMonAnTheoMa(maMon) {
        for (let monan of this.mangMonAn) {
            if (monan.maMon === maMon) {
                return monan;
                break;
            }
        }
    }

    timViTri(maMon) {
        return this.mangMonAn.findIndex((item) => {
            return maMon === item.maMon;
        })
    }

    xoaMonAn(maMon) {
        const viTri = this.timViTri(maMon);
        if (viTri !== 1) {
            this.mangMonAn.splice(viTri, 1);
        }
    }

    capNhatMonAn(monAn) {
        const viTriCapNhat = this.timViTri(monAn.maMon);
        this.mangMonAn[viTriCapNhat] = monAn;
    }

    showMonAn(dsShow, chuoiShow) {
        // console.log(monAn);
        return dsShow.filter((monAn) => {
            return monAn.loaiMon.indexOf(chuoiShow) !== -1
        })
    }


}
export {
    DanhSachMonAn
}