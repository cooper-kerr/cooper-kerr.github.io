<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saurabh Loya - Portfolio</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            background-color: rgb(26, 26, 26);
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .vertical-line-top {
            width: 1px;
            height: 100px;
            background-color: white;
            margin-bottom: -1px;
        }

        .logo-circle {
            width: 50px;
            height: 50px;
            border: 1px solid white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 40px;
            background-color: transparent;
        }

        .logo-circle svg {
            width: 20px;
            height: 20px;
            fill: white;
        }

        .name {
            font-size: 36px;
            font-weight: 400;
            margin: 20px 0;
            letter-spacing: 2px;
            text-align: center;
        }

        .info {
            font-size: 13px;
            letter-spacing: 1px;
            text-align: center;
            margin: 8px 0;
            max-width: 800px;
        }

        .social-links {
            display: flex;
            gap: 24px;
            margin: 40px 0 80px 0;
        }

        .social-circle {
            width: 40px;
            height: 40px;
            border: 1px solid white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .social-icon {
            width: 16px;
            height: 16px;
            fill: white;
        }

        .nav-section {
            position: relative;
            text-align: center;
        }

        .nav-line {
            width: 1px;
            height: 100px;
            background-color: white;
            margin: 0 auto 20px;
        }

        .nav-container {
            display: inline-flex;
            border: 1px solid white;
            border-radius: 4px;
        }

        .nav-button {
            padding: 12px 40px;
            background: none;
            border: none;
            color: white;
            font-size: 13px;
            letter-spacing: 1px;
            cursor: pointer;
        }

        .underline {
            width: 100%;
            height: 1px;
            background-color: white;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="vertical-line-top"></div>
    <div class="logo-circle">
        <svg viewBox="0 0 24 24">
            <path d="M12 21L2 7h20L12 21z"/>
        </svg>
    </div>

    <div class="name">SAURABH LOYA</div>
    <div class="info">COMPUTER SCIENCE GRADUATE STUDENT AT THE UNIVERSITY OF UTAH (EXPECTED GRADUATION: MAY 2025)</div>
    <div class="info">CURRENTLY SEEKING NEW GRADUATE ROLES FOR 2025</div>

    <div class="social-links">
        <a href="#" class="social-circle">
            <svg class="social-icon" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
            </svg>
        </a>
        <a href="#" class="social-circle">
            <svg class="social-icon" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
        </a>
        <a href="#" class="social-circle">
            <svg class="social-icon" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.166 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
        </a>
        <a href="#" class="social-circle">
            <svg class="social-icon" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
        </a>
    </div>

    <div class="nav-section">
        <div class="nav-line"></div>
        <div class="nav-container">
            <button class="nav-button">ABOUT</button>
            <button class="nav-button">EDUCATION</button>
            <button class="nav-button">EXPERIENCE</button>
            <button class="nav-button">PROJECTS</button>
        </div>
    </div>
</body>
</html>
