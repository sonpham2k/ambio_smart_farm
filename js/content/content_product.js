var product = {
    guarantee_content:
        `
        - Bảo hành 12 tháng 1 đổi 1 trong vòng 7 ngày. </br>
        - Bảo hành đối với các lỗi hỏng hóc của nhà sản xuất. </br>
        - Bảo hành tại farm của khách với phần cứng, các linh kiện rời theo thỏa thuận. </br>
        - Không bảo hành với các vật tư tiêu hao. </br>
        - Không bảo hành với các lỗi do người sử dùng. </br>
        `,
    uses_content:
        `
        - Hạn chế thay nước. </br>
        - Loại bỏ các protein và chất thải hữu cơ trong nước nguyên nhân bùng phát khí độc, tảo độc, khuẩn gây bệnh. </br>
        - Giảm tích tụ nitơ, photpho. </br>
        - Cải thiện độ trong nước, kiểm soát tảo. </br>
        - Tăng hàm lượng oxi hòa tan trong nước. </br>
        - Ổn định chất lượng nước nuôi. </br>
        `,
    user_manual_content:
        `
        - ASFa180 sử dụng cho cả ao sẵn sàng, ao nuôi, ao bạt, ao đất.. </br>
        - Chạy định kỳ ...ngày/lần. </br>
        - Ao tôm mởi thả, đang gây màu nước thì không nên chạy máy. </br>
        - Khi ao xuất hiện khí độc, tảo dày thì có thể tăng tần suất chạy máy. </br>
        - Vận hành.......... </br>
        `,
    different:
        `
        - ASF180 hoạt động theo cơ chế tuyển nổi, bằng cách tạo ra hàng triệu bọt khí với 
            kích thước nano, bọt khí cuốn theo chất ô nhiễm, theo đường ống thải ra ngoài, 
            nước sau tách bẩn được tuàn hoàn lại ao. Chính vì cơ chế này mà ASF180 có thể 
            hoạt động ổn định, bền bỉ mà không cần thay thế các phụ kiện màng lọc như các 
            thiết bị lọc khác. Bên cạnh đó ASFa180 sử dụng máy nén khí có sẵn tại các farm 
            để thực hiện tuyển nổi nên nước nuôi sau khi qua thiết bị đã được làm giàu thêm 
            đáng kể lượng oxi hòa tan. (show kết quả test DO, hiệu quả loại bỏ ô nhiễm). </br>
        </br>
        - ASFa180 thiết lập 2 chế độ chạy: chạy tự động và điều khiển bằng tay, tùy thuộc 
            vào tình trạng ao mà người điều khiển có thể lựa chọn chế độ. ASFa180 thiết kế 
            thuận lợi dễ dàng thao tác, điều chỉnh, lắp đặt và vệ sinh. </br>
        </br>
        - Song song với việc sử dụng chế phẩm sinh học xử lý, khi sử dụng ASF180 sẽ giảm ô 
            nhiễm trong ao một cách nhanh chóng trong thời gian ngắn, dễ dàng kiểm soát được 
            mức độ ô nhiễm, giảm stress cho tôm, đặc biệt với các ao nuôi mật độ quá dày, tình 
            trạng nước ao xấu đi rất nhanh. </br>
        `
}

document.getElementById('guarantee_content').innerHTML = product.guarantee_content;
document.getElementById('uses-content').innerHTML = product.uses_content;
document.getElementById('user-manual-content').innerHTML = product.user_manual_content;
document.getElementById('different').innerHTML = product.different;
