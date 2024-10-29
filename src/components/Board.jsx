import { useContext } from "react";
import { GroupContext, OrderContext } from "../App";
import { Column } from "./Column";

export const Board = ({ tickets, users }) => {
    const { grouping } = useContext(GroupContext);
    const { ordering } = useContext(OrderContext);

    const getGroupedData = () => {
        let groupedData = [];

        switch(grouping) {
            case "Status":
                const statusGroups = ["Backlog", "Todo", "In progress", "Done"];
                groupedData = statusGroups.map(status => ({
                    title: status,
                    items: tickets.filter(ticket => ticket.status === status)
                }));
                break;

            case "User":
                groupedData = users.map(user => ({
                    title: user.name,
                    items: tickets.filter(ticket => ticket.userId === user.id),
                    userData: user
                }));
                break;

            case "Priority":
                const priorities = [
                    { id: 4, name: "Urgent" },
                    { id: 3, name: "High" },
                    { id: 2, name: "Medium" },
                    { id: 1, name: "Low" },
                    { id: 0, name: "No Priority" }
                ];
                groupedData = priorities.map(priority => ({
                    title: priority.name,
                    items: tickets.filter(ticket => ticket.priority === priority.id)
                }));
                break;

            default:
                groupedData = [];
        }

        // Apply ordering
        groupedData.forEach(group => {
            if (ordering === "Priority") {
                group.items.sort((a, b) => b.priority - a.priority);
            } else if (ordering === "Title") {
                group.items.sort((a, b) => a.title.localeCompare(b.title));
            }
        });

        return groupedData;
    };

    const groupedData = getGroupedData();

    return (
        <div className='bg-slate-100 h-screen'>
            <div className='grid grid-cols-5 mx-4'>
                {groupedData.map((group, index) => (
                    <Column 
                        key={index}
                        title={group.title}
                        tickets={group.items}
                        userData={group.userData}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};