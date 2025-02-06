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
            padding: 40px 20px;
        }

        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .vertical-line {
            width: 1px;
            height: 120px;
            background-color: rgba(255, 255, 255, 0.8);
            margin-bottom: -30px;
        }

        .logo-circle {
            width: 60px;
            height: 60px;
            border: 2px solid rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 40px;
            background-color: rgb(26, 26, 26);
        }

        .logo-circle svg {
            width: 24px;
            height: 24px;
            fill: white;
        }

        h1 {
            font-size: 42px;
            font-weight: 400;
            margin: 0 0 20px 0;
            letter-spacing: 1px;
        }

        .subtitle {
            font-size: 14px;
            letter-spacing: 0.5px;
            text-align: center;
            margin: 8px 0;
            color: rgba(255, 255, 255, 0.9);
        }

        .social-links {
            display: flex;
            gap: 20px;
            margin: 40px 0 80px 0;
        }

        .social-icon {
            width: 45px;
            height: 45px;
            border: 1.5px solid rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }

        .social-icon:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }

        .nav-section {
            position: relative;
            padding-top: 120px;
        }

        .nav-line {
            position: absolute;
            top: 0;
            left: 50%;
            width: 1px;
            height: 120px;
            background-color: rgba(255, 255, 255, 0.8);
            transform: translateX(-50%);
        }

        .nav-container {
            border: 1.5px solid rgba(255, 255, 255, 0.8);
            border-radius: 4px;
            display: inline-flex;
        }

        .nav-button {
            padding: 12px 40px;
            background: none;
            border: none;
            color: white;
            font-size: 14px;
            cursor: pointer;
            transition: all 0.3s ease;
            letter-spacing: 1px;
        }

        .nav-button:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="vertical-line"></div>
        <div class="logo-circle">
            <svg viewBox="0 0 24 24">
                <path d="M12 21L2 7h20L12 21z"/>
            </svg>
        </div>

        <h1>SAURABH LOYA</h1>
        <p class="subtitle">COMPUTER SCIENCE GRADUATE STUDENT AT THE UNIVERSITY OF UTAH (EXPECTED GRADUATION: MAY 2025)</p>
        <p class="subtitle">CURRENTLY SEEKING NEW GRADUATE ROLES FOR 2025</p>

        <div class="social-links">
            <a href="#" class="social-icon" aria-label="Resume">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
            </a>
            <a href="#" class="social-icon" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
            </a>
            <a href="#" class="social-icon" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
            </a>
            <a href="#" class="social-icon" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
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
    </div>
</body>
</html>
