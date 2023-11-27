<!DOCTYPE html>
<html>

<head>
    <title>Xác minh email</title>
</head>

<body>
    <p>Xin chào,</p>
    <p>Chúng tôi nhận được yêu cầu xác minh email cho tài khoản của bạn.</p>
    
    <p>Nhấn tại đây để xác minh email cho tài khoản của bạn:</p>
    <a href="{{ route('verify.email', ['token' => $token, 'email' => $email]) }}">
        Xác minh email
    </a>

    <p>Nếu không click được link trên, xin hãy copy và past URL dưới đây để được xác minh email</p>
    <a href="{{ route('verify.email', ['token' => $token, 'email' => $email]) }}">
        {{ route('verify.email', ['token' => $token, 'email' => $email]) }}
    </a>

    <p>Nếu bạn không yêu cầu xác minh email, vui lòng liên hệ Bộ phận Chăm sóc Khách hàng tại đây.</p>
    <br>
    <p>Trân trọng,</p>
    <br>
    <p>Bạn có thắc mắc? Liên hệ chúng tôi tại <a href="example.com">đây</a>.</p>
</body>

</html>
