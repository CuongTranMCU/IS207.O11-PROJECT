  Laravel Installation Guide body { font-family: 'Arial', sans-serif; line-height: 1.6; margin: 40px; background-color: #f5f5f5; } h1, h2 { color: #333; } p, ul { color: #777; } code, pre { background-color: #f8f8f8; padding: 10px; border-radius: 4px; } a { color: #3498db; text-decoration: none; } a:hover { text-decoration: underline; }

Installation Guide
==========================

System Requirements
-------------------

Before you begin, make sure your computer meets the following system requirements:

*   PHP >= 7.4
*   Composer
*   Node.js and NPM
*   MySQL or SQLite

Step 1: Download Composer
-------------------------

To install Laravel, you need Composer. If not installed, download Composer from [https://getcomposer.org/](https://getcomposer.org/) and follow the instructions on the website.

Step 2: Pull Files from the Project
-----------------------------------

Step 3: Configure Environment
-----------------------------

Create a new database using the SQL file in the database folder.

If the .env file does not exist, copy the .env.example file to a new file named .env:

    cp .env.example .env

Open the .env file and configure the database information according to the newly created database.

    DB_CONNECTION=mysql

    DB_HOST=127.0.0.1

    DB_PORT=3306

    DB_DATABASE=v1

    DB_USERNAME=root

    DB_PASSWORD=

In the /config folder, select the cors file and change:

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

to

    'paths' => ['*', 'sanctum/csrf-cookie'],

Step 4: Run the Application
---------------------------

Run the following command to start the Laravel development server:

    php artisan serve

The Laravel server will now run on the specified host and port configured in .env.

To change the port, for example, run the server on port 8080, use the following command:

    php artisan serve --port=8080

Open your browser and go to [http://localhost:8080](http://localhost:8080) to view the Laravel application.

Support and Contact
-------------------

If you encounter issues or have any questions, check the official Laravel documentation or contact the Laravel community.