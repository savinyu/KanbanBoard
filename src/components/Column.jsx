import { Card } from "./Card";
import add from '/assets/add.svg'
import threedot from '/assets/threedot.svg'
import { useContext } from "react";
import { TicketsContext, UsersContext } from "../App";
import { Dp } from "./Dp";


export const Column = ({ title, tickets, userData, index }) => {
    return (
        <div className="mx-2">
            <div className="column-header">
                <div className="column-title">
                    {userData && <Dp name={userData.name} index={index} available={userData.available} />}
                    <div className="title-text">{title}</div>
                    <div className="item-count text-gray-500">{tickets.length}</div>
                </div>
                <div className="column-actions">
                    <div className="action-icon cursor-pointer"><img src={add} alt="add"/></div>
                    <div className="action-icon cursor-pointer"><img src={threedot} alt="threedot"/></div>
                </div>
            </div>
            {tickets.map((ticket, index) => (
                <div className="mt-2" key={index}>
                    <Card 
                        description={ticket.title}
                        title={ticket.id}
                        priority={ticket.priority}
                        status={ticket.status}
                        tag={ticket.tag}
                    />
                </div>
            ))}
        </div>
    );
};
