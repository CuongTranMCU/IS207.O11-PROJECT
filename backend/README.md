<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hướng dẫn Cài đặt Laravel</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            margin: 40px;
            background-color: #f5f5f5;
        }

        h1, h2 {
            color: #333;
        }

        p, ul {
            color: #777;
        }

        code, pre {
            background-color: #f8f8f8;
            padding: 10px;
            border-radius: 4px;
        }

        a {
            color: #3498db;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <h1>Hướng dẫn Cài đặt Laravel</h1>

    <p>Hướng dẫn này sẽ giúp bạn cài đặt Laravel, một framework PHP mạnh mẽ và linh hoạt, trên máy tính của bạn.</p>

    <h2>Yêu Cầu Hệ Thống</h2>
    <p>Trước khi bắt đầu, đảm bảo rằng máy tính của bạn đáp ứng các yêu cầu hệ thống sau:</p>
    <ul>
        <li>PHP >= 7.4</li>
        <li>Composer</li>
        <li>Node.js và NPM</li>
        <li>MySQL hoặc SQLite</li>
    </ul>

    <h2>Bước 1: Tải Composer</h2>
    <p>Để cài đặt Laravel, bạn cần Composer. Nếu bạn chưa cài đặt, hãy tải Composer từ <a href="https://getcomposer.org/" target="_blank">https://getcomposer.org/</a> và cài đặt theo hướng dẫn trên trang web.</p>

    <h2>Bước 2: Pull file từ project.</h2>
    

    <h2>Bước 3: Cấu hình Môi trường</h2>
    <p>Tạo database mới từ file sql trong mục database.</p>
    <p>Sao chép tệp .env.example thành một tệp mới có tên .env:</p>
    <pre><code>cp .env.example .env</code></pre>
    <p>Mở tệp .env và cấu hình thông tin database đúng với database mới tạo.</p>
    <pre><code>DB_CONNECTION=mysql</code></pre>
    <pre><code>DB_HOST=127.0.0.1</code></pre>
    <pre><code>DB_PORT=3306</code></pre>
    <pre><code>DB_DATABASE=v1</code></pre>
    <pre><code>DB_USERNAME=root</code></pre>
    <pre><code>DB_PASSWORD=</code></pre>

    <h2>Bước 4: Chạy Ứng Dụng</h2>
    <p>Chạy lệnh sau để khởi động máy chủ phát triển của Laravel:</p>
    <pre><code>php artisan serve</code></pre>
    <p>Lúc này máy chủ laravel sẽ được chạy trên host và port cố định được config trong .env.</p>
    <p>Để thay đổi port theo ý muốn, ví dụ chạy máy chủ trên port 8080 thì ta chạy lệnh sau:</p>
    <pre><code>php artisan serve --port=8080</code></pre>
    <p>Mở trình duyệt và truy cập <a href='http://localhost:8000'>http://localhost:8080</a> để xem ứng dụng Laravel.</p>

    <h2>Hỗ trợ và Liên Hệ</h2>
    <p>Nếu bạn gặp vấn đề hoặc có bất kỳ câu hỏi nào, hãy kiểm tra tài liệu chính của Laravel hoặc liên hệ với cộng đồng Laravel.</p>
</body>
</html>
