import DanhSachMonAn from '../models/DanhSachMonAn.js';
import MonAn from '../models/MonAn.js';

const danhSachMon = new DanhSachMonAn();
// console.log(listFood)

// const getEl = (id) => {
//     return document.getElementById(id);
// }
const getEl = id => document.getElementById(id);

getEl('btnThem').addEventListener('click', () => {
    getEl('btnThemMon').style.display = 'block';
    getEl('btnCapNhat').style.display = 'none';
})

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
                <button class = "btn btn-danger">Xóa</button>
                <button class = "btn btn-success">Sửa</button>
            </td>
        </tr>
        `;
    });
    getEl('tbodyFood').innerHTML = content;
}

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
    danhSachMon.themMonAn(monAn);
    hienThiDanhSach(danhSachMon.mangMonAn);
    setLocalStorage(danhSachMon.mangMonAn);
}
getEl('btnThemMon').addEventListener('click', themMonAn);