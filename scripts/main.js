console.log("you got this -main.js linked")
// Import and invoke the ticket booth component function

import {TicketBooth} from "./TicketBooth.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { FoodTicketHolders } from "./food/FoodTicketHolder.js";
import { GameTicketHolders } from "./games/GameTicketHolder.js";
import { SideshowTicketHolders } from "./sideshows/SideshowTicketHolder.js";
import { PackageTicketHolders } from "./package/PackageTicketHolder.js";

TicketBooth();
RideTicketHolders();
FoodTicketHolders();
GameTicketHolders();
SideshowTicketHolders();
PackageTicketHolders();