<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/ian.css">
    <title>Reserveren</title>
</head>
<body>
    <?php include 'header.php'; ?>
    <main id="reserveren-main">
        <img class="reserveren-img" src="img/restaurant.png" id="reserveren-img-links">
        <article id="reserveren-inhoud">
            <h1>Reserveren</h1>
            <form id="reserveer-form">
                <label>waneer:</label>
                <input type="date">
                <label>hoelaat:</label>
                <input type="time">
                <label>hoeveel mensen:</label>
                <input type="number"><br>
                <input type="submit" value="reserveer">
            </form>
        </article>
        <img class="reserveren-img" src="img/restaurant2.png" id="reserveren-img-rechts">
    </main>
    <?php include 'footer.php' ?>
</body>
</html>