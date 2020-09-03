const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", event => {
    if (event.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(rideEvent)
    }
})

eventHub.addEventListener("click", event => {
    if (event.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(foodEvent)
    }
})

eventHub.addEventListener("click", event => {
    if (event.target.id === "gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased")
        eventHub.dispatchEvent(gameEvent)
    }
})

eventHub.addEventListener("click", event => {
    if (event.target.id === "showTicket") {
        const showEvent = new CustomEvent("showTicketPurchased")
        eventHub.dispatchEvent(showEvent)
    }
})

eventHub.addEventListener("click", event => {
    if (event.target.id === "packageTicket") {
        const packageEvent = new CustomEvent("packageTicketPurchased")
        eventHub.dispatchEvent(packageEvent)
    }
})



export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
        <button id="showTicket">Sideshow Ticket</button>
        <button id="packageTicket">Full Package Ticket</button>
        </div>
    `
}

