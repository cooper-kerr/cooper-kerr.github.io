<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            background-color: #1a1a1a;
            color: white;
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .logo-container {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
            margin-bottom: 80px;
        }

        .vertical-line {
            position: absolute;
            top: 0;
            width: 1px;
            height: 120px;
            background-color: white;
        }

        .logo {
            width: 56px;
            height: 56px;
            border: 2px solid white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #1a1a1a;
            position: relative;
            top: 100px;
        }

        .diamond {
            width: 24px;
            height: 24px;
        }

        .content {
            text-align: center;
            margin-bottom: 60px;
        }

        h1 {
            font-size: 2.5rem;
            font-weight: 300;
            letter-spacing: 0.1em;
            margin: 0 0 20px 0;
        }

        .subtitle {
            font-size: 0.9rem;
            letter-spacing: 0.1em;
            color: #cccccc;
            margin: 10px 0;
        }

        .social-links {
            display: flex;
            gap: 24px;
            margin-bottom: 80px;
        }

        .social-icon {
            width: 40px;
            height: 40px;
            border: 1px solid white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: white;
        }

        .nav-container {
            position: relative;
            width: 100%;
            max-width: 800px;
        }

        .nav-line {
            position: absolute;
            top: 0;
            left: 50%;
            width: 1px;
            height: 120px;
            background-color: white;
        }

        nav {
            display: flex;
            justify-content: center;
            padding-top: 80px;
        }

        .nav-buttons {
            display: inline-flex;
            border: 1px solid white;
            border-radius: 4px;
        }

        .nav-button {
            padding: 8px 32px;
            font-size: 0.9rem;
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            transition: all 0.3s;
        }

        .nav-button:hover {
            background-color: white;
            color: #1a1a1a;
        }
    </style>
</head>
<body>
    <div class="logo-container">
        <div class="vertical-line"></div>
        <div class="logo">
            <svg class="diamond" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 2H3l9 18L21 2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="white"/>
            </svg>
        </div>
    </div>

    <div class="content">
        <h1>SAURABH LOYA</h1>
        <p class="subtitle">COMPUTER SCIENCE GRADUATE STUDENT AT THE UNIVERSITY OF UTAH (EXPECTED GRADUATION: MAY 2025)</p>
        <p class="subtitle">CURRENTLY SEEKING NEW GRADUATE ROLES FOR 2025</p>
    </div>

    <div class="social-links">
        <a href="#" class="social-icon">📄</a>
        <a href="#" class="social-icon">🔗</a>
        <a href="#" class="social-icon">💻</a>
        <a href="#" class="social-icon">✉️</a>
    </div>

    <div class="nav-container">
        <div class="nav-line"></div>
        <nav>
            <div class="nav-buttons">
                <button class="nav-button">ABOUT</button>
                <button class="nav-button">EDUCATION</button>
                <button class="nav-button">EXPERIENCE</button>
                <button class="nav-button">PROJECTS</button>
            </div>
        </nav>
    </div>
</body>
</html>
