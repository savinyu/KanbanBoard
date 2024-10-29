import { Card } from "./Card";
import { Dp } from "./Dp";


export const Column = ({ title, tickets, userData, index }) => {
    return (
        <div className="mx-2">
            <div className="column-header">
                <div className="column-title">
                    {userData && <Dp name={userData.name} index={index} available={userData.available} />}
                    <div className="title-text">{title}</div>
                    <div className="item-count">{tickets.length}</div>
                </div>
                <div className="column-actions">
                    <div className="action-icon cursor-pointer"><img src={'/assets/add.svg'} alt="add"/></div>
                    <div className="action-icon cursor-pointer"><img src={'/assets/threedot.svg'} alt="threedot"/></div>
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
