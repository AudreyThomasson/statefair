const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolders = () => {
    eventHub.addEventListener("showTicketPurchased", customEvent => {
        contentTarget.innerHTML += `
        <div class="gawker person"></div>
    `
    })
}