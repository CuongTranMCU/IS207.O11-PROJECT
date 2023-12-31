<!DOCTYPE html>
<html>

<head>
    <title>Yêu cầu thiết lập lại mật khẩu</title>
</head>

<body>
    <p>Xin chào dyeqlbaq7v,</p>
    <p>Chúng tôi nhận được yêu cầu thiết lập lại mật khẩu cho tài khoản Shopee của bạn.</p>
    <p>Nhấn tại đây để thiết lập mật khẩu mới cho tài khoản Shopee của bạn:</p>
    <a href="<?php echo e(route('reset.password', ['token' => $token, 'email' => $email])); ?>">
        Thiết lập mật khẩu mới
    </a>

    <p>Nếu bạn không yêu cầu thiết lập lại mật khẩu, vui lòng liên hệ Bộ phận Chăm sóc Khách hàng tại đây.</p>
    <br>
    <p>Trân trọng,</p>
    <p>Đội ngũ Shopee</p>
    <p>Bạn có thắc mắc? Liên hệ chúng tôi tại <a href="#">đây</a>.</p>
</body>

</html><?php /**PATH D:\Study\UIT\IS207\project\cayxinh\v1\resources\views/forget-password.blade.php ENDPATH**/ ?>