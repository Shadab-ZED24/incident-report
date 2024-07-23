import React, { createContext, useState } from 'react';

export const IncidentContext = createContext();

export const IncidentProvider = ({ children }) => {
  const [incidents, setIncidents] = useState([]);

  const addIncident = (incident, userId) => {
    setIncidents([...incidents, { ...incident, id: new Date().getTime(), userId, status: 'pending' }]);
  };

  const updateIncident = (updatedIncident) => {
    setIncidents(
      incidents.map((incident) =>
        incident.id === updatedIncident.id ? updatedIncident : incident
      )
    );
  };

  const updateIncidentStatus = (id, status) => {
    setIncidents(
      incidents.map((incident) =>
        incident.id === id ? { ...incident, status } : incident
      )
    );
  };

  return (
    <IncidentContext.Provider value={{ incidents, addIncident, updateIncident, updateIncidentStatus }}>
      {children}
    </IncidentContext.Provider>
  );
};
