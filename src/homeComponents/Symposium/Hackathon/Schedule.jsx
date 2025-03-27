// Schedule.jsx
import React from 'react';
import scheduleData from './ScheduleData';

const Schedule = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white">
            <h2 className="text-2xl font-bold  text-gray-900 mb-6">
                2nd Hackathon Schedule
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-blue-100">
                            <th className="border border-blue-400 p-3 text-left">Date</th>
                            <th className="border border-blue-400 p-3 text-left">Time</th>
                            <th className="border border-blue-400 p-3 text-left">Event</th>
                            <th className="border border-blue-400 p-3 text-left">Venue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scheduleData.map((daySchedule, dayIndex) => (
                            daySchedule.events.map((event, eventIndex) => (
                                <tr
                                    key={`${dayIndex}-${eventIndex}`}
                                    className={eventIndex % 2 === 0 ? 'bg-white' : 'bg-blue-100'}
                                >
                                    {eventIndex === 0 && (
                                        <td
                                            className="border border-blue-400 p-3"
                                            rowSpan={daySchedule.events.length}
                                        >
                                            {daySchedule.date}
                                        </td>
                                    )}
                                    <td className="border border-blue-400 p-3">{event.time}</td>
                                    <td className="border border-blue-400 p-3">{event.event}</td>
                                    <td className="border border-blue-400 p-3">{event.venue}</td>
                                </tr>
                            ))
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Schedule;
