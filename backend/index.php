<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($method === 'POST') {
    // Process multi-step lead form
    $data = json_decode(file_get_contents("php://input"), true);
    
    // In a real scenario, we would validate inputs and insert into DB.
    // E.g., MySQL via PDO
    /*
        $stmt = $pdo->prepare('INSERT INTO leads (name, email, service, country, message) VALUES (?, ?, ?, ?, ?)');
        $stmt->execute([$data['name'], $data['email'], $data['service'], $data['country'], $data['message']]);
    */

    $response = [
        "status" => "success",
        "message" => "Lead received successfully. We will contact you soon.",
        "received_data" => $data
    ];
    
    echo json_encode($response);
} else {
    echo json_encode([
        "name" => "ZAVIROQ Admin API",
        "status" => "active"
    ]);
}
?>
