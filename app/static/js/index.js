var current = "";
var typing = false;

const isFunctionKey = function (keyCode) {
    const functionKeyCodes = [9, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 91, 92, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123];
    return functionKeyCodes.includes(keyCode);
};

const handleKeyDown = function (event) {
    if (!typing || isFunctionKey(event.keyCode)) {
        return;
    }

    if (event.keyCode === 13) {
        alert('Enter key pressed! Current value: ' + current);
    } else if (event.keyCode === 8) {
        current = current.slice(0, -1);
        if (current !== "") {
            document.getElementById("search-text").innerText = current;
        } else {
            document.getElementById("search-text").innerText = "Search";
        }
    } else {
        current += event.key;
        document.getElementById("search-text").innerText = current;
    }
};

const handleClick = function (event) {
    if (event.target.closest('#search-container')) {
        typing = true;
        document.getElementById('search-container').classList.add('typing');
        document.addEventListener('keydown', handleKeyDown);
    } else {
        typing = false;
        document.getElementById('search-container').classList.remove('typing');
        document.removeEventListener('keydown', handleKeyDown);
    }
};

document.getElementById('search-container').addEventListener('click', function () {
    handleClick();
});

document.addEventListener('click', handleClick);

// Call the function to start listening for keyboard input
handleClick();

const handleLoginClick = function (event) {
    // Add your login functionality here
    alert('Login link clicked!');
};

document.getElementById('login').addEventListener('click', function () {
    handleLoginClick();
});
