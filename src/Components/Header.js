import React from "react";
import './Header.css';
function Header() {
    return (
        <div class="toll-number">
            <a href="javascript:void(0)">
                <img src="\phone.png" alt="Phone number image" />
                <p class="blink">19123 <span>(24x7 Toll Free)</span></p>
            </a>
            <a href="javascript:void(0)">
                <img src="\phone.png" alt="Whatsapp number image" />
                <p>011-49516707 <span>Fire & Shock/Streetlight No.</span></p>
            </a>
            <a href="javascript:void(0)">
                <img src="\whatsapp.png" alt="Phone number image" />
                <p>8800919123<span> WhatsApp No.</span></p>
            </a>
            <a href="/documents/55701/3672243/New_Connection_Procedure.pdf" target="_blank">
                <img src="\NewConn.png" alt="Phone number image" />
                <p>New Connection Procedure</p>
            </a>
        </div>
        
    );
}
export default Header;