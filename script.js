const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultOutput = document.getElementById("result");


const isPalindrome = (input) => {
    const OGInput = input
    // Checks if text-input is empty, and throws an alert.
    if (inputText.value === ""){
        window.alert("Please input a value");
        return;
    }

    // Remove other results
    resultOutput.replaceChildren();

    // Converting inputText into lowercase for easier determination.
    const lowerCaseText = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let resultMessage = `<strong>${OGInput}</strong> ${lowerCaseText === [...lowerCaseText].reverse().join('') ? 'is' : 'is not'} a palindrome.`;

    const pTag = document.createElement('p');
    pTag.className = 'user-input';
    pTag.innerHTML = resultMessage;
    resultOutput.appendChild(pTag);

    //Un-hide result
    resultOutput.classList.remove('hidden');

}

// Event Listener for clicking the "Check Button"
checkButton.addEventListener("click", () => {
    isPalindrome(inputText.value);
    inputText.value = "";
});


// Event Listener for hitting the "Enter Button"
inputText.addEventListener("keydown", e => {
    if (e.key === "Enter"){
        isPalindrome(inputText.value);
        inputText.value = "";
    }
});
