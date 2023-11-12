   Hướng dẫn Cài đặt Laravel body { font-family: 'Arial', sans-serif; line-height: 1.6; margin: 40px; background-color: #f5f5f5; } h1, h2 { color: #333; } p, ul { color: #777; } code, pre { background-color: #f8f8f8; padding: 10px; border-radius: 4px; } a { color: #3498db; text-decoration: none; } a:hover { text-decoration: underline; }

Hướng dẫn Cài đặt Laravel
=========================

Hướng dẫn này sẽ giúp bạn cài đặt Laravel, một framework PHP mạnh mẽ và linh hoạt, trên máy tính của bạn.

Yêu Cầu Hệ Thống
----------------

Trước khi bắt đầu, đảm bảo rằng máy tính của bạn đáp ứng các yêu cầu hệ thống sau:

*   PHP >= 7.4
*   Composer
*   Node.js và NPM
*   MySQL hoặc SQLite

Bước 1: Tải Composer
--------------------

Để cài đặt Laravel, bạn cần Composer. Nếu bạn chưa cài đặt, hãy tải Composer từ [https://getcomposer.org/](https://getcomposer.org/) và cài đặt theo hướng dẫn trên trang web.

Bước 2: Pull file từ project.
-----------------------------

Bước 3: Cấu hình Môi trường
---------------------------

Tạo database mới từ file sql trong mục database.

Sao chép tệp .env.example thành một tệp mới có tên .env:

    cp .env.example .env

Mở tệp .env và cấu hình thông tin database đúng với database mới tạo.

    DB_CONNECTION=mysql

    DB_HOST=127.0.0.1

    DB_PORT=3306

    DB_DATABASE=v1

    DB_USERNAME=root

    DB_PASSWORD=

Bước 4: Chạy Ứng Dụng
---------------------

Chạy lệnh sau để khởi động máy chủ phát triển của Laravel:

    php artisan serve

Lúc này máy chủ laravel sẽ được chạy trên host và port cố định được config trong .env.

Để thay đổi port theo ý muốn, ví dụ chạy máy chủ trên port 8080 thì ta chạy lệnh sau:

    php artisan serve --port=8080

Mở trình duyệt và truy cập [http://localhost:8080](http://localhost:8000) để xem ứng dụng Laravel.

Hỗ trợ và Liên Hệ
-----------------

Nếu bạn gặp vấn đề hoặc có bất kỳ câu hỏi nào, hãy kiểm tra tài liệu chính của Laravel hoặc liên hệ với cộng đồng Laravel.
