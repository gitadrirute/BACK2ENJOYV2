<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenida</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f8ff;
            color: #333;
            margin: 0;
            padding: 0;
        }

        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .header {
            background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 50%, rgba(63, 160, 180, 1) 100%);
            padding: 10px 20px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            text-align: center;
        }

        .header img {
            width: 100px;
            height: auto;
            margin-bottom: 10px;
        }

        .header h1 {
            margin: 0;
            color: #fff;
            font-size: 24px;
        }

        .content {
            padding: 20px;
        }

        .content p {
            margin: 0 0 10px;
        }

        .footer {
            text-align: center;
            padding: 10px 0;
            background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 50%, rgba(63, 160, 180, 1) 100%);
            color: #fff;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
        }
    </style>
</head>
<!-- C:\Users\6003076\Documents\EVO411.0 -Email Bienvenida\resources\views\mails\welcome.blade.php -->
<body>
    <div class="container">
        <div class="header">
            <img src="{{ asset('/storage/Emails/logoMejorado.png') }}" alt="Logo de la empresa">
            <!-- <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="250.000000pt" height="258.000000pt" viewBox="0 0 250.000000 258.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,258.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M1331 1814 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
                    <path d="M1610 1746 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21 -21
13z" />
                    <path d="M948 1630 c12 -5 22 -15 22 -21 0 -7 3 -9 6 -6 10 10 -16 37 -35 36
-11 0 -9 -3 7 -9z" />
                    <path d="M890 1609 c-7 -11 -9 -23 -6 -27 3 -3 6 0 6 6 0 6 7 18 16 26 8 9 11
16 5 16 -6 0 -15 -9 -21 -21z" />
                    <path d="M1136 1583 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z" />
                    <path d="M1379 1573 c-13 -16 -12 -17 4 -4 9 7 17 15 17 17 0 8 -8 3 -21 -13z" />
                    <path d="M936 1525 c-3 -9 -6 -24 -5 -33 0 -9 5 -4 10 12 9 32 6 48 -5 21z" />
                    <path d="M995 1498 l-40 -43 43 40 c39 36 47 45 39 45 -2 0 -21 -19 -42 -42z" />
                    <path d="M863 1455 c0 -33 2 -45 4 -27 2 18 2 45 0 60 -2 15 -4 0 -4 -33z" />
                    <path d="M1223 1445 c0 -38 2 -53 4 -32 2 20 2 52 0 70 -2 17 -4 1 -4 -38z" />
                    <path d="M930 1460 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
-4 -4 -4 -10z" />
                    <path d="M1542 1435 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z" />
                    <path d="M950 1383 c8 -3 22 -11 30 -17 13 -10 13 -9 1 7 -7 9 -21 17 -30 16
-13 0 -14 -1 -1 -6z" />
                    <path d="M1206 1343 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z" />
                    <path d="M1408 1333 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
                    <path d="M970 1315 c-7 -9 -11 -17 -9 -20 3 -2 10 5 17 15 14 24 10 26 -8 5z" />
                    <path d="M1174 1298 l-19 -23 23 19 c21 18 27 26 19 26 -2 0 -12 -10 -23 -22z" />
                    <path d="M1679 1294 c-23 -25 -23 -26 -2 -13 13 7 25 19 27 26 8 19 2 16 -25
-13z" />
                    <path d="M1249 1273 l-34 -38 40 35 c22 19 42 36 44 38 2 1 0 2 -5 2 -6 0 -26
-17 -45 -37z" />
                    <path d="M975 1240 c10 -11 20 -20 23 -20 3 0 -3 9 -13 20 -10 11 -20 20 -23
20 -3 0 3 -9 13 -20z" />
                    <path d="M1180 1220 c-23 -7 -23 -8 -3 -9 12 -1 25 4 28 9 3 6 5 10 3 9 -2 -1
-14 -5 -28 -9z" />
                    <path d="M1001 1184 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
                    <path d="M1599 1153 l-34 -38 38 34 c20 19 37 36 37 38 0 8 -8 0 -41 -34z" />
                    <path d="M1309 1123 l-34 -38 38 34 c20 19 37 36 37 38 0 8 -8 0 -41 -34z" />
                    <path d="M990 1146 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21 -21
13z" />
                    <path d="M457 923 c-4 -3 -7 -39 -7 -80 l0 -73 39 0 c30 0 44 6 55 22 8 12 12
26 9 32 -4 5 -6 27 -4 47 1 29 -3 40 -18 48 -22 12 -64 14 -74 4z m68 -43 c0
-8 -10 -16 -22 -18 -18 -3 -23 2 -23 18 0 16 5 21 23 18 12 -2 22 -10 22 -18z
m-6 -49 c12 -8 12 -12 2 -25 -20 -24 -41 -19 -41 9 0 26 14 31 39 16z" />
                    <path d="M612 853 c-20 -52 -27 -79 -19 -82 6 -2 13 1 15 8 5 14 55 14 69 0
28 -28 27 2 -2 74 l-32 77 -31 -77z m47 -35 c1 -5 -6 -8 -14 -8 -15 0 -21 31
-8 44 7 6 20 -17 22 -36z" />
                    <path d="M775 918 c-30 -18 -44 -40 -45 -71 0 -38 40 -77 80 -77 42 0 41 28
-1 32 -38 4 -54 26 -45 61 4 18 15 29 36 34 17 5 31 13 33 18 3 15 -35 17 -58
3z" />
                    <path d="M877 923 c-4 -3 -7 -39 -7 -80 0 -57 3 -73 14 -73 9 0 16 12 18 33
l3 32 20 -32 c10 -18 28 -33 38 -33 16 0 15 4 -10 36 l-27 36 22 41 c29 52 19
62 -19 17 l-28 -35 -1 33 c0 30 -9 40 -23 25z" />
                    <path d="M1060 915 c0 -8 9 -15 20 -15 18 0 20 -7 20 -65 0 -37 4 -65 10 -65
6 0 10 27 10 61 0 52 3 62 20 66 11 3 20 12 20 19 0 10 -14 14 -50 14 -38 0
-50 -4 -50 -15z" />
                    <path d="M1231 916 c-71 -40 -40 -146 43 -146 79 0 106 109 35 145 -34 18 -47
18 -78 1z m70 -26 c29 -16 25 -65 -6 -86 -23 -15 -27 -15 -50 0 -44 29 -28 95
23 96 7 0 22 -5 33 -10z" />
                    <path d="M1450 850 l0 -80 35 0 c39 0 48 17 13 22 -15 2 -23 10 -23 23 0 13 8
21 23 23 12 2 22 7 22 12 0 5 -10 10 -22 12 -13 2 -23 10 -23 18 0 8 10 16 23
18 37 6 27 32 -13 32 l-35 0 0 -80z" />
                    <path d="M1650 883 l-1 -48 -37 43 c-21 23 -41 42 -45 42 -4 0 -7 -34 -7 -75
0 -60 3 -75 15 -75 11 0 15 11 15 40 0 22 3 40 6 40 4 0 24 -19 45 -42 l38
-43 1 83 c0 66 -3 82 -15 82 -11 0 -15 -12 -15 -47z" />
                    <path d="M1758 868 c-3 -54 -6 -64 -25 -73 -30 -13 -29 -25 2 -25 37 0 57 38
53 101 -4 78 -26 76 -30 -3z" />
                    <path d="M1865 918 c-49 -26 -59 -77 -24 -122 37 -47 119 -28 133 30 9 36 -9
79 -40 93 -31 14 -43 14 -69 -1z m69 -34 c24 -24 20 -61 -9 -80 -23 -15 -27
-15 -50 0 -17 11 -25 26 -25 46 0 45 52 66 84 34z" />
                    <path d="M2010 923 c0 -5 11 -26 25 -48 13 -22 25 -55 25 -72 0 -18 5 -33 10
-33 6 0 10 16 10 36 0 21 10 50 25 72 28 41 31 52 13 52 -7 0 -21 -14 -31 -32
l-18 -32 -19 32 c-18 29 -40 43 -40 25z" />
                    <path d="M1952 560 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" />
                    <path d="M1991 554 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
                </g>
            </svg> -->
            <h1>Bienvenido a Back2Enjoy</h1>
        </div>
        <div class="content">
            <p>Hola, {{ $user->nombre }} ({{ $user->nombreUsuario }})!</p>
            <p>Estamos muy contentos de tenerte con nosotros. Gracias por unirte a nuestra comunidad.</p>
            <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos.</p>
        </div>
        <div class="footer">
            <p>&copy; {{ date('Y') }} Back2Enjoy. Todos los derechos reservados.</p>
        </div>
    </div>
</body>

</html>