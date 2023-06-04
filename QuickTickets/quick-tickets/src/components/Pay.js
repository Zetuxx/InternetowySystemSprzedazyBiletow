import React from "react";
import { GreenInput } from "./GreenInput";
import EventInfo from "./EventInfo";
import '../styles/ChooseTicket.css';
import '../styles/Pay.css';
export default function Pay({counter,eventData}){
    
    const[price,setPrice] = React.useState(80);
    return(
        <div className="choose-ticket">
        <div className="buy-form">
            {
                eventData?
                <>
                    <div className="buy-title">Informacje o płatności</div>
                        <table class="pay-summart-table">
                            <thead>
                                <tr>
                                <th>Ilość bilrtów</th>
                                <th>Cena</th>
                                <th>Suma</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{counter}</td>
                                <td>{eventData.ticketPrice}</td>
                                <td>{counter*eventData.ticketPrice}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="pay-status">Status płatności: Nieopłacone</div>
                        <button className="main-btn">Zapłać online</button>
                </>
                :
                null
            }
             
        </div>
        <EventInfo eventData={eventData}/>
     </div>
    )
}