"use client";

import { useState, useEffect } from 'react';
import styles from '../page.module.css';

interface Lead {
  date: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  country: string;
  message: string;
  status: string;
}

export default function LeadsDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/leads')
      .then(res => res.json())
      .then(data => {
        setLeads(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className={styles.pageHeader}>
        <h1>CRM Incoming Leads</h1>
        <p>Real-time extraction of data entered via the Contact module.</p>
      </div>

      {loading ? (
        <p>Syncing Database...</p>
      ) : (
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Contact Node</th>
              <th>Service Target</th>
              <th>Location</th>
              <th>Data Payload</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 ? (
              <tr><td colSpan={6} style={{textAlign:'center'}}>No leads intercepted yet.</td></tr>
            ) : (
              leads.map((lead, i) => (
                <tr key={i}>
                  <td style={{color: '#8892B0'}}>{new Date(lead.date).toLocaleDateString()}</td>
                  <td>
                    <strong>{lead.name}</strong><br/>
                    <small style={{color: 'var(--primary-blue)'}}>{lead.email}</small><br/>
                    <small>{lead.phone}</small>
                  </td>
                  <td style={{textTransform: 'uppercase', color: '#A0A5B1'}}>{lead.service}</td>
                  <td>{lead.country}</td>
                  <td style={{maxWidth: '300px'}}>{lead.message}</td>
                  <td>
                    <span className={`${styles.statusPill} ${styles[`status-${lead.status}`] || styles['status-closed']}`}>
                       {lead.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
