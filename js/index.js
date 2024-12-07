function navigateToBlog() {
    window.location.href = 'blog.html';
}

// utilitis function
function getInputValueById(id) {
    return parseFloat(document.getElementById(id).value);
}



const donationTab = document.getElementById("donation-tab");
const historyTab = document.getElementById("history-tab")

historyTab.addEventListener("click", function(){
    historyTab.classList.add(
        "bg-[#B4F461]",
        "text-gray-700"
    )
    donationTab.classList.remove("bg-[#B4F461]")
    document.getElementById("donate-card").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");
})
donationTab.addEventListener("click", function(){
    donationTab.classList.add("bg-[#B4F461]", "text-gray-700");
    historyTab.classList.remove("bg-[#B4F461]");
    document.getElementById("donate-card").classList.remove("hidden");
    document.getElementById("history-section").classList.add("hidden");
})