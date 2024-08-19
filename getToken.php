<?php
// getToken.php
include('config.php');

header('Content-Type: application/json');
echo json_encode([
    'chatId' => TELEGRAM_CHAT_ID,
    'token' => TELEGRAM_TOKEN
]);
?>
