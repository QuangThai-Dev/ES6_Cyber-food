import { MonAn } from '../models/MonAn.js';
import { DanhSachMonAn } from '../models/DanhSachMonAn.js';

const danhSachMon = new DanhSachMonAn();
// console.log(listFood)

// const getEl = (id) => {
//     return document.getElementById(id);
// }
const getEl = id => document.getElementById(id);


// Xóa form
const xoaForm = () => {
    let elements = document.getElementsByClassName('form-control');
    for (let ele of elements) {
        ele.value = '';
    }
    getEl('loai').selectedIndex = 0;
    getEl('khuyenMai').selectedIndex = 0;
    getEl('tinhTrang').selectedIndex = 0;
}


getEl('btnThem').addEventListener('click', () => {
    xoaForm();
    getEl('btnThemMon').style.display = 'block';
    getEl('btnCapNhat').style.display = 'none';
    getEl('exampleModalLabel').innerHTML = 'Thêm món ăn';
})

// Xóa Món Ăn
const xoaMon = (maMon) => {
    danhSachMon.xoaMonAn(maMon);
    hienThiDanhSach(danhSachMon.mangMonAn);
    setLocalStorage(danhSachMon.mangMonAn);
}


// Xem Món Ăn 
const xemMonAn = (maMon) => {
    getEl('btnThem').click();
    getEl('btnThemMon').style.display = 'none';
    getEl('btnCapNhat').style.display = 'block';
    getEl('exampleModalLabel').innerHTML = 'Cập nhật món ăn';

    var monan = danhSachMon.timMonAnTheoMa(maMon);

    getEl('foodID').value = maMon;
    getEl('tenMon').value = monan.tenMon;
    getEl('loai').value = monan.loaiMon;
    getEl('giaMon').value = monan.giaMon;
    getEl('khuyenMai').value = monan.khuyenMai;
    getEl('tinhTrang').value = monan.tinhTrang;
    getEl('hinhMon').value = monan.hinhMon;
    getEl('moTa').value = monan.moTa;
}


// hiển thị danh sách món ăn
const hienThiDanhSach = danhSachMon => {
    let content = '';

    danhSachMon.forEach(mon => {
        const { maMon, hinhMon, tenMon, loaiMon, giaMon, khuyenMai, giaKM, tinhTrang } = mon;
        content += `
        <tr>
            <td>${maMon}</td>
            <td>
                <img src="../../assets/img/${hinhMon}" />
                <span>${tenMon}</span>
            </td>
            <td>${loaiMon === 'loai1' ? 'Chay':'Mặn'}</td>
            <td>${giaMon}VNĐ</td>
            <td>${khuyenMai}%</td>
            <td>${giaKM}VNĐ</td>
            <td>${tinhTrang === '1' ? 'Còn' : 'Hết'}</td>
            <td>
                <button class = "btn btn-danger" onclick="xoaMon('${maMon}')">Xóa</button>
                <button class = "btn btn-success" onclick="xemMonAn('${maMon}')" >Sửa</button>
            </td>
        </tr>
        `;
    });
    getEl('tbodyFood').innerHTML = content;
}
window.xoaMon = xoaMon;
window.xemMonAn = xemMonAn
    // window.xoaMon = xoaMon;
const setLocalStorage = (danhSachMon) => {
    localStorage.setItem('danhSachMon', JSON.stringify(danhSachMon));
}

const getLocalStorage = () => {
    if (localStorage.getItem('danhSachMon')) {
        danhSachMon.mangMonAn = JSON.parse(localStorage.getItem('danhSachMon'))
        hienThiDanhSach(danhSachMon.mangMonAn)
    }
}

getLocalStorage();
// Thêm món ăn
const themMonAn = () => {
    // Lấy thông tin form
    const maMon = getEl('foodID').value;
    const tenMon = getEl('tenMon').value;
    const loaiMon = getEl('loai').value;
    const giaMon = getEl('giaMon').value;
    const khuyenMai = getEl('khuyenMai').value;
    const tinhTrang = getEl('tinhTrang').value;
    const hinhMon = getEl('hinhMon').value;
    const moTa = getEl('moTa').value;

    // Khởi tạo đối tượng món ăn
    // Ép từ chuỗi thành số bằng cách thêm dấu + hoặc thêm Number()
    const monAn = new MonAn(maMon, tenMon, loaiMon, +giaMon, +khuyenMai, tinhTrang, hinhMon, moTa);
    monAn.tinhgiaKhuyenMai();
    console.log(giaMon);
    danhSachMon.themMonAn(monAn);
    hienThiDanhSach(danhSachMon.mangMonAn);
    setLocalStorage(danhSachMon.mangMonAn);
    xoaForm();
}
getEl('btnThemMon').addEventListener('click', themMonAn);

// Cập nhật món ăn
const capNhatMonAn = () => {
    // Lấy thông tin form
    const maMon = getEl('foodID').value;
    const tenMon = getEl('tenMon').value;
    const loaiMon = getEl('loai').value;
    const giaMon = getEl('giaMon').value;
    const khuyenMai = getEl('khuyenMai').value;
    const tinhTrang = getEl('tinhTrang').value;
    const hinhMon = getEl('hinhMon').value;
    const moTa = getEl('moTa').value;

    const monAnMoi = new MonAn(maMon, tenMon, loaiMon, +giaMon, +khuyenMai, tinhTrang, hinhMon, moTa);
    monAnMoi.tinhgiaKhuyenMai();
    danhSachMon.capNhatMonAn(monAnMoi);
    hienThiDanhSach(danhSachMon.mangMonAn);
    setLocalStorage(danhSachMon.mangMonAn);
    xoaForm();
}
getEl('btnCapNhat').addEventListener('click', capNhatMonAn);

const showLoaiMon = () => {
    const mangshow = getLocalStorage();
    const chuoiShow = getEl('selLoai').value;
    const showMon = danhSachMon.showMonAn(mangshow, chuoiShow);
    hienThiDanhSach(showMon);
}
getEl('selLoai').addEventListener('select', showLoaiMon)