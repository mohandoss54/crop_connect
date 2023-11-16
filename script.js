function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform login authentication logic here (can be server-side or mocked for this example)

    // If authentication is successful, redirect to the dashboard
    window.location.href = 'dashboard.html';
}

function updateCrop() {
    var cropName = document.getElementById('cropName').value;
    var quantity = document.getElementById('quantity').value;

    // Perform crop update logic here (can be server-side or mocked for this example)
    alert('Crop information updated successfully!');
}
