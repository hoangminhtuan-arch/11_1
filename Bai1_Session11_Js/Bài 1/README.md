# Phân tích lỗi & Bảng Test Cases (Falsy Values)

## Phân tích lỗi
Trong quá trình cập nhật đối tượng, việc kiểm tra điều kiện xem người dùng có truyền dữ liệu mới vào hay không rất quan trọng.
- **Dòng lệnh sai logic:** 
  `if (updatedData.isActive)` và `if (updatedData.powerWatts)`
- **Nguyên nhân kỹ thuật:** Trong JavaScript, các giá trị như `0`, `false`, `""` (chuỗi rỗng), `null`, `undefined`, và `NaN` đều bị trình duyệt đánh giá là **Falsy**. Khi hàm nhận được yêu cầu cập nhật là `{ isActive: false }` hoặc `{ powerWatts: 0 }`, câu lệnh điều kiện sẽ biến thành `if (false)` và `if (0)`. Theo luật Falsy, điều kiện này sẽ trả về sai, dẫn đến việc bỏ qua hoàn toàn các dòng lệnh cập nhật bên trong khối `if`. Do đó, hệ thống không thể tắt điều hòa hay chỉnh công suất đèn về 0.
- **Cách khắc phục:** Ta cần kiểm tra xem thuộc tính đó có tồn tại bên trong đối tượng `updatedData` hay không, tức là giá trị của nó có khác `undefined` hay không, chứ không phải kiểm tra bản thân giá trị đó là đúng hay sai. Sửa lại thành: `if (updatedData.isActive !== undefined)`.

## Bảng Test Cases

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế (khi có lỗi) | Kết quả đúng mong đợi |
| :--- | :--- | :--- | :--- |
| Tắt điều hòa phòng khách | `targetId: "D01"`, `updatedData: { isActive: false }` | Bị bỏ qua, biến `isActive` vẫn giữ giá trị cũ (VD: `true`) | Lệnh được áp dụng, `isActive` của `D01` thành `false` |
| Hạ công suất đèn ngủ về 0W | `targetId: "D02"`, `updatedData: { powerWatts: 0 }` | Bị bỏ qua, mức công suất không thay đổi | Lệnh được áp dụng, `powerWatts` của `D02` trở thành `0` |
