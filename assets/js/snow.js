const snowContainer = document.getElementById('snow-container');
const snowflakeCount = 100;

for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');

    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';

    // Random position
    snowflake.style.left = Math.random() * 100 + 'vw';

    // Random size
    const size = Math.random() * 20 + 10;
    snowflake.style.fontSize = size + 'px';

    // Random animation duration
    snowflake.style.animationDuration =
        Math.random() * 10 + 8 + 's';

    // Random delay
    snowflake.style.animationDelay =
        Math.random() * 15 + 's';

    // Random opacity
    snowflake.style.opacity =
        Math.random() * 0.7 + 0.3;

    snowContainer.appendChild(snowflake);
}
