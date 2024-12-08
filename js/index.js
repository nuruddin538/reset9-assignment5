function navigateToBlog() {
    window.location.href = 'blog.html';
}

// utilitis function

function getInputValueById(id) {
    const inputValue = document.getElementById(id).value.trim();
    const parsedValue = parseFloat(inputValue);
    return isNaN(parsedValue) || parsedValue <= 0 ? null : parsedValue;
}

function updateBalances(donationAmount, totalBalanceId, donateBalanceId) {
    const totalBalanceElement = document.getElementById(totalBalanceId);
    const donateBalanceElement = document.getElementById(donateBalanceId);

    const currentTotalBalance = parseFloat(totalBalanceElement.textContent) || 0;
    const currentDonateBalance = parseFloat(donateBalanceElement.textContent) || 0;

    if(donationAmount > currentTotalBalance) {
        alert("Insufficient balance to donate!");
        return false;
    }

    totalBalanceElement.textContent = currentTotalBalance - donationAmount;
    donateBalanceElement.textContent = currentDonateBalance + donationAmount;
    return true;
}

// Error Removal on Typing

function clearInputField(id) {
    document.getElementById(id).value = "";
}
function showErrorMessage(errorId) {
    document.getElementById(errorId).classList.remove("hidden");
}

function hideErrorMessage(errorId) {
    document.getElementById(errorId).classList.add("hidden");
}

function showPopupCard(message) {
    const popup = document.createElement("div");
    popup.className = "fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-white p-6 shadow-lg border rounded-lg text-center z-50";
    popup.innerHTML = `
        <h2 class="text-lg font-bold text-green-600 mb-3">🎉Congratulations!</h2>
        <div class="flex justify-center items-center my-3">
            <img src="assets/coin.png" alt="coin">
        </div>
        <p class="my-2">${message}</p>
        <span class="text-xl text-[#3A434F] block text-center my-1">Successfully</span>
        <button class="bg-[#B4F461] mt-4 p-3 rounded-md" id="popup-close-btn">Close confirmation</button>
    `;
    document.body.appendChild(popup)

    // close button functionality
    document.getElementById("popup-close-btn").addEventListener("click", function(){
        popup.remove();
    })
}

function addToHistory(message){
    const historySection = document.getElementById("history-section");
    const historyCard = document.createElement("div");
    historyCard.className = "py-6 border border-solid mt-4 rounded-md";
    historyCard.innerHTML = `
        <div class="p-4">
            <h3>${message}</h3>
            <span>Date: ${new Date().toLocaleDateString()}</span>
        </div>
    `;
    historySection.appendChild(historyCard);
    historySection.classList.remove("hidden");
}

function addInputEventListener(inputId, errorId) {
    const inputElement = document.getElementById(inputId);
    inputElement.addEventListener("input", function() {
        hideErrorMessage(errorId)
    });
}

// Add Input Event Listeners to remove errors
addInputEventListener("noakhali-donate-balance", "noakhali-error");
addInputEventListener("feni-donate-balance", "feni-error");
addInputEventListener("quota-donate-balance", "quota-error");

// Event Listeners for Donation Buttons
document.getElementById("noakhali-donate-btn").addEventListener("click", function(){
    const donationAmount = getInputValueById("noakhali-donate-balance");
    if(donationAmount !== null) {
        const isSuccess = updateBalances(donationAmount, "total-balance", "noakhali-donate-add");
        if(isSuccess) {
            const message =  `${donationAmount} BDT is donated for Flood Relief in Noakhali, Bangladesh`
            showPopupCard(`${donationAmount} BDT donated for flood relief in Noakhali!`);
            addToHistory(message);
            clearInputField("noakhali-donate-balance");
        }
    }else {
        showErrorMessage("noakhali-error");
    }
})

document.getElementById("feni-donate-btn").addEventListener("click", function(){
    const donationAmount = getInputValueById("feni-donate-balance");
    if(donationAmount !== null) {
        const isSuccess = updateBalances(donationAmount, "total-balance", "feni-donate-add");
        if(isSuccess) {
            const message =  `${donationAmount} BDT is donated for Flood Relief in Feni, Bangladesh`
            showPopupCard(`${donationAmount} BDT donated for famine-2024 at Feni, Bangladesh`);
            addToHistory(message)
            clearInputField("feni-donate-balance");
        }
    } else {
        showErrorMessage("feni-error")
    }
})

document.getElementById("quota-donate-btn").addEventListener("click", function(){
    const donationAmount = getInputValueById("quota-donate-balance");
    if(donationAmount !== null){
        const isSuccess = updateBalances(donationAmount, "total-balance", "quota-donate-add");
        if(isSuccess) {
            const message =  `${donationAmount} BDT is donated for injured in the Quota Movement!, Bangladesh`
            showPopupCard(`${donationAmount} BDT donated for injured in the Quota Movement!`);
            addToHistory(message)
            clearInputField("quota-donate-balance");
        }
    } else {
        showErrorMessage("quota-error");
    }
})

// donation and history tab toggle 

const donationTab = document.getElementById("donation-tab");
const historyTab = document.getElementById("history-tab")

historyTab.addEventListener("click", function(){
    historyTab.classList.add(
        "bg-[#B4F461]",
        "text-gray-700"
    )
    donationTab.classList.remove("bg-[#B4F461]")
    document.getElementById("donate-card").classList.add("hidden");
    // document.getElementById("history-section").classList.remove("hidden");

    // check if there are any history cards
    const historySection = document.getElementById("history-section");
    if(!historySection.querySelector(".py-6")){
        historySection.innerHTML = `<p class="text-center text-gray-500 mt-4">No donation history available yet.</p>`
    } else {
        historySection.querySelector("p")?.remove();
    }
    historySection.classList.remove("hidden");

})
donationTab.addEventListener("click", function(){
    donationTab.classList.add("bg-[#B4F461]", "text-gray-700");
    historyTab.classList.remove("bg-[#B4F461]");
    document.getElementById("donate-card").classList.remove("hidden");
    document.getElementById("history-section").classList.add("hidden");
})