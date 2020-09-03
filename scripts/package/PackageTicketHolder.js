const rideContentTarget = document.querySelector(".rides")
const foodContentTarget = document.querySelector(".food")
const gameContentTarget = document.querySelector(".games")
const showContentTarget = document.querySelector(".sideshow")

const eventHub = document.querySelector("#state-fair")

export const PackageTicketHolders = () => {
    eventHub.addEventListener("packageTicketPurchased", customEvent => {
        rideContentTarget.innerHTML += `
        <div class="bigSpender person"></div>
    `
        foodContentTarget.innerHTML += `
        <div class="bigSpender person"></div>
    `
        gameContentTarget.innerHTML += `
        <div class="bigSpender person"></div>
    `
        showContentTarget.innerHTML += `
        <div class="bigSpender person"></div>
    `
        
    })
}