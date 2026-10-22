import React from 'react';
import { Box } from '@mui/material';

/**
 * High-precision vector UI wireframe illustrations that simulate the actual interface
 * structure of each application (Linear/Vercel design system aesthetic).
 */
export default function ProjectIllustration({ type }) {
  const renderContent = () => {
    switch (type) {
      case 'spotify':
        return (
          <svg viewBox="0 0 400 225" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="225" fill="#0c1017" />
            {/* Window titlebar */}
            <rect width="400" height="26" fill="#161b22" />
            <circle cx="16" cy="13" r="4" fill="#ff5f56" />
            <circle cx="28" cy="13" r="4" fill="#ffbd2e" />
            <circle cx="40" cy="13" r="4" fill="#27c93f" />
            <rect x="130" y="7" width="140" height="12" rx="6" fill="#21262d" />
            <text x="160" y="16" fill="#8b949e" fontSize="8" fontFamily="monospace">spotify-app.live</text>

            {/* Left Sidebar */}
            <rect x="0" y="26" width="90" height="159" fill="#11161f" />
            <rect x="12" y="38" width="66" height="8" rx="4" fill="#1db954" opacity="0.9" />
            <rect x="12" y="54" width="50" height="6" rx="3" fill="#30363d" />
            <rect x="12" y="66" width="60" height="6" rx="3" fill="#30363d" />
            <rect x="12" y="78" width="45" height="6" rx="3" fill="#30363d" />
            <line x1="12" y1="94" x2="78" y2="94" stroke="#21262d" strokeWidth="1" />
            <rect x="12" y="104" width="55" height="6" rx="3" fill="#21262d" />
            <rect x="12" y="116" width="62" height="6" rx="3" fill="#21262d" />

            {/* Main Music Grid */}
            <rect x="106" y="38" width="120" height="14" rx="4" fill="#21262d" />
            <text x="110" y="48" fill="#e6edf3" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Now Playing & Featured</text>
            
            {/* Album Tiles */}
            <rect x="106" y="60" width="80" height="60" rx="6" fill="#1f242c" stroke="#30363d" strokeWidth="1" />
            <circle cx="146" cy="85" r="16" fill="#1db954" opacity="0.2" />
            <polygon points="143,77 153,85 143,93" fill="#1db954" />
            <rect x="114" y="106" width="50" height="5" rx="2" fill="#8b949e" />

            <rect x="196" y="60" width="80" height="60" rx="6" fill="#1f242c" stroke="#30363d" strokeWidth="1" />
            <circle cx="236" cy="85" r="16" fill="#06B6D4" opacity="0.2" />
            <polygon points="233,77 243,85 233,93" fill="#06B6D4" />
            <rect x="204" y="106" width="50" height="5" rx="2" fill="#8b949e" />

            <rect x="286" y="60" width="95" height="60" rx="6" fill="#1f242c" stroke="#30363d" strokeWidth="1" />
            <circle cx="333" cy="85" r="16" fill="#a855f7" opacity="0.2" />
            <polygon points="330,77 340,85 330,93" fill="#a855f7" />
            <rect x="294" y="106" width="60" height="5" rx="2" fill="#8b949e" />

            {/* Audio Waveforms */}
            <g transform="translate(106, 134)">
              <rect x="0" y="10" width="4" height="20" rx="2" fill="#1db954" />
              <rect x="7" y="4" width="4" height="26" rx="2" fill="#1db954" />
              <rect x="14" y="12" width="4" height="18" rx="2" fill="#1db954" />
              <rect x="21" y="0" width="4" height="30" rx="2" fill="#1db954" />
              <rect x="28" y="8" width="4" height="22" rx="2" fill="#1db954" />
              <rect x="35" y="14" width="4" height="16" rx="2" fill="#1db954" />
              <rect x="42" y="6" width="4" height="24" rx="2" fill="#1db954" />
              <rect x="49" y="12" width="4" height="18" rx="2" fill="#1db954" />
              <rect x="56" y="2" width="4" height="28" rx="2" fill="#1db954" />
              <rect x="63" y="10" width="4" height="20" rx="2" fill="#1db954" />
              <rect x="70" y="16" width="4" height="14" rx="2" fill="#1db954" />
              <rect x="77" y="8" width="4" height="22" rx="2" fill="#1db954" />
            </g>

            {/* Bottom Audio Player Bar */}
            <rect x="0" y="185" width="400" height="40" fill="#161b22" strokeTop="#21262d" strokeWidth="1" />
            <circle cx="28" cy="205" r="10" fill="#30363d" />
            <rect x="46" y="200" width="60" height="5" rx="2" fill="#e6edf3" />
            <rect x="46" y="208" width="40" height="4" rx="2" fill="#8b949e" />
            {/* Center controls */}
            <circle cx="200" cy="205" r="11" fill="#1db954" />
            <polygon points="198,200 205,205 198,210" fill="#000" />
            {/* Progress line */}
            <line x1="140" y1="219" x2="260" y2="219" stroke="#30363d" strokeWidth="3" strokeLinecap="round" />
            <line x1="140" y1="219" x2="210" y2="219" stroke="#1db954" strokeWidth="3" strokeLinecap="round" />
          </svg>
        );

      case 'safar-crm':
        return (
          <svg viewBox="0 0 400 225" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="225" fill="#0f172a" />
            {/* Titlebar */}
            <rect width="400" height="26" fill="#1e293b" />
            <circle cx="16" cy="13" r="4" fill="#ff5f56" />
            <circle cx="28" cy="13" r="4" fill="#ffbd2e" />
            <circle cx="40" cy="13" r="4" fill="#27c93f" />
            <rect x="130" y="7" width="140" height="12" rx="6" fill="#334155" />
            <text x="153" y="16" fill="#94a3b8" fontSize="8" fontFamily="monospace">safar-crm.vercel.app</text>

            {/* Left Chats Pane */}
            <rect x="0" y="26" width="125" height="199" fill="#1e293b" strokeRight="#334155" strokeWidth="1" />
            <rect x="12" y="36" width="101" height="16" rx="4" fill="#334155" />
            <text x="20" y="47" fill="#94a3b8" fontSize="8">🔍 WhatsApp Inbox</text>

            {/* Chat Items */}
            <g transform="translate(10, 60)">
              <rect width="105" height="28" rx="6" fill="#25d366" fillOpacity="0.12" stroke="#25d366" strokeWidth="0.8" />
              <circle cx="14" cy="14" r="8" fill="#25d366" />
              <rect x="28" y="7" width="45" height="5" rx="2" fill="#f8fafc" />
              <rect x="28" y="16" width="60" height="4" rx="2" fill="#94a3b8" />
              <circle cx="95" cy="14" r="3" fill="#25d366" />
            </g>

            <g transform="translate(10, 94)">
              <rect width="105" height="28" rx="6" fill="#334155" fillOpacity="0.5" />
              <circle cx="14" cy="14" r="8" fill="#64748b" />
              <rect x="28" y="7" width="50" height="5" rx="2" fill="#f8fafc" />
              <rect x="28" y="16" width="55" height="4" rx="2" fill="#64748b" />
            </g>

            <g transform="translate(10, 128)">
              <rect width="105" height="28" rx="6" fill="#334155" fillOpacity="0.5" />
              <circle cx="14" cy="14" r="8" fill="#64748b" />
              <rect x="28" y="7" width="40" height="5" rx="2" fill="#f8fafc" />
              <rect x="28" y="16" width="50" height="4" rx="2" fill="#64748b" />
            </g>

            {/* Active Chat Conversation Area */}
            <rect x="135" y="36" width="255" height="22" rx="4" fill="#1e293b" />
            <circle cx="148" cy="47" r="6" fill="#25d366" />
            <text x="160" y="50" fill="#f8fafc" fontSize="9" fontWeight="bold">Active Lead: Telangana SME</text>
            <rect x="330" y="42" width="50" height="11" rx="5" fill="#25d366" fillOpacity="0.2" />
            <text x="336" y="50" fill="#25d366" fontSize="7" fontWeight="bold">PIPELINE: WON</text>

            {/* Chat Bubbles */}
            <rect x="140" y="70" width="140" height="24" rx="8" fill="#334155" />
            <text x="148" y="82" fill="#cbd5e1" fontSize="8">Inquiry for custom automation?</text>
            <text x="148" y="90" fill="#64748b" fontSize="6">10:42 AM</text>

            <rect x="235" y="102" width="150" height="26" rx="8" fill="#25d366" fillOpacity="0.25" stroke="#25d366" strokeWidth="0.8" />
            <text x="243" y="114" fill="#f8fafc" fontSize="8">Yes! Workflows deployed live.</text>
            <text x="243" y="123" fill="#25d366" fontSize="6">10:43 AM · Delivered ✓✓</text>

            {/* Pipeline Stage Cards */}
            <rect x="140" y="140" width="75" height="40" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="146" y="152" fill="#06B6D4" fontSize="7" fontWeight="bold">NEW LEADS</text>
            <text x="146" y="168" fill="#f8fafc" fontSize="14" fontWeight="bold">42</text>

            <rect x="225" y="140" width="75" height="40" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="231" y="152" fill="#22c55e" fontSize="7" fontWeight="bold">AUTOMATED</text>
            <text x="231" y="168" fill="#f8fafc" fontSize="14" fontWeight="bold">89%</text>

            <rect x="310" y="140" width="80" height="40" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="316" y="152" fill="#a855f7" fontSize="7" fontWeight="bold">RESPONSE TIME</text>
            <text x="316" y="168" fill="#f8fafc" fontSize="14" fontWeight="bold">&lt; 15s</text>

            {/* Input Bar */}
            <rect x="140" y="190" width="250" height="24" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="150" y="205" fill="#64748b" fontSize="8">Type automated WhatsApp response...</text>
            <circle cx="378" cy="202" r="8" fill="#25d366" />
          </svg>
        );

      case 'invofy':
        return (
          <svg viewBox="0 0 400 225" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="225" fill="#0f172a" />
            {/* Titlebar */}
            <rect width="400" height="26" fill="#1e293b" />
            <circle cx="16" cy="13" r="4" fill="#ff5f56" />
            <circle cx="28" cy="13" r="4" fill="#ffbd2e" />
            <circle cx="40" cy="13" r="4" fill="#27c93f" />
            <rect x="130" y="7" width="140" height="12" rx="6" fill="#334155" />
            <text x="158" y="16" fill="#94a3b8" fontSize="8" fontFamily="monospace">invofy.vercel.app</text>

            {/* Invoice Sheet Surface */}
            <g transform="translate(60, 36)">
              <rect width="280" height="175" rx="8" fill="#ffffff" filter="drop-shadow(0 8px 16px rgba(0,0,0,0.3))" />
              {/* Invoice Header */}
              <text x="18" y="24" fill="#0f172a" fontSize="13" fontWeight="900" fontFamily="sans-serif">INVOFY</text>
              <rect x="75" y="13" width="38" height="12" rx="6" fill="#06B6D4" fillOpacity="0.15" />
              <text x="81" y="21" fill="#0891b2" fontSize="6.5" fontWeight="bold">1-TAP PDF</text>

              <rect x="210" y="12" width="52" height="16" rx="4" fill="#22c55e" fillOpacity="0.15" />
              <text x="218" y="23" fill="#15803d" fontSize="8" fontWeight="bold">PAID ✓</text>

              <line x1="18" y1="34" x2="262" y2="34" stroke="#e2e8f0" strokeWidth="1" />

              {/* Client & Metadata */}
              <text x="18" y="47" fill="#64748b" fontSize="7">Billed To: Retail Store & Trade</text>
              <text x="18" y="57" fill="#0f172a" fontSize="8" fontWeight="bold">Invoice #INV-2026-089</text>
              <text x="190" y="57" fill="#64748b" fontSize="7">Date: Oct 2026</text>

              {/* Table Header */}
              <rect x="18" y="65" width="244" height="14" fill="#f8fafc" rx="3" />
              <text x="24" y="75" fill="#475569" fontSize="7" fontWeight="bold">ITEM DESCRIPTION</text>
              <text x="170" y="75" fill="#475569" fontSize="7" fontWeight="bold">QTY</text>
              <text x="220" y="75" fill="#475569" fontSize="7" fontWeight="bold">TOTAL</text>

              {/* Table Rows */}
              <text x="24" y="92" fill="#1e293b" fontSize="7.5">Digital Workflow Setup</text>
              <text x="175" y="92" fill="#64748b" fontSize="7.5">1</text>
              <text x="220" y="92" fill="#0f172a" fontSize="7.5" fontWeight="bold">₹ 14,500</text>
              <line x1="18" y1="99" x2="262" y2="99" stroke="#f1f5f9" strokeWidth="1" />

              <text x="24" y="112" fill="#1e293b" fontSize="7.5">WhatsApp Automation Pipeline</text>
              <text x="175" y="112" fill="#64748b" fontSize="7.5">1</text>
              <text x="220" y="112" fill="#0f172a" fontSize="7.5" fontWeight="bold">₹ 8,200</text>
              <line x1="18" y1="119" x2="262" y2="119" stroke="#f1f5f9" strokeWidth="1" />

              {/* Total & Action */}
              <rect x="160" y="128" width="102" height="20" rx="4" fill="#0f172a" />
              <text x="168" y="141" fill="#94a3b8" fontSize="7">GRAND TOTAL:</text>
              <text x="218" y="142" fill="#38bdf8" fontSize="9" fontWeight="bold">₹ 22,700</text>

              {/* WhatsApp Share Button */}
              <rect x="18" y="130" width="110" height="18" rx="4" fill="#25d366" />
              <text x="32" y="142" fill="#ffffff" fontSize="7.5" fontWeight="bold">💬 Send via WhatsApp</text>
            </g>
          </svg>
        );

      case 'safar':
        return (
          <svg viewBox="0 0 400 225" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="225" fill="#0a101d" />
            {/* Titlebar */}
            <rect width="400" height="26" fill="#162032" />
            <circle cx="16" cy="13" r="4" fill="#ff5f56" />
            <circle cx="28" cy="13" r="4" fill="#ffbd2e" />
            <circle cx="40" cy="13" r="4" fill="#27c93f" />
            <rect x="130" y="7" width="140" height="12" rx="6" fill="#243247" />
            <text x="156" y="16" fill="#94a3b8" fontSize="8" fontFamily="monospace">safar-rouge.vercel.app</text>

            {/* Travel Platform Hero Header */}
            <rect x="20" y="38" width="360" height="50" rx="8" fill="#162032" stroke="#243247" strokeWidth="1" />
            <text x="34" y="56" fill="#38bdf8" fontSize="11" fontWeight="bold">SAFAR N MANZIL</text>
            <text x="34" y="70" fill="#94a3b8" fontSize="8">Verified Housing, Flight Assistance & Relocation Portal</text>
            <rect x="280" y="48" width="85" height="22" rx="6" fill="#0284c7" />
            <text x="292" y="62" fill="#ffffff" fontSize="8" fontWeight="bold">Book Transit ↗</text>

            {/* City Cards */}
            <g transform="translate(20, 100)">
              <rect width="112" height="75" rx="6" fill="#162032" stroke="#243247" strokeWidth="1" />
              <rect x="8" y="8" width="96" height="34" rx="4" fill="#0369a1" fillOpacity="0.3" />
              <text x="12" y="28" fill="#e0f2fe" fontSize="9" fontWeight="bold">HYDERABAD</text>
              <text x="8" y="54" fill="#cbd5e1" fontSize="7.5">120+ Listings</text>
              <text x="8" y="65" fill="#38bdf8" fontSize="7.5" fontWeight="bold">Transit Ready</text>
            </g>

            <g transform="translate(144, 100)">
              <rect width="112" height="75" rx="6" fill="#162032" stroke="#243247" strokeWidth="1" />
              <rect x="8" y="8" width="96" height="34" rx="4" fill="#0d9488" fillOpacity="0.3" />
              <text x="12" y="28" fill="#ccfbf1" fontSize="9" fontWeight="bold">DUBAI / GULF</text>
              <text x="8" y="54" fill="#cbd5e1" fontSize="7.5">Family & Executive</text>
              <text x="8" y="65" fill="#2dd4bf" fontSize="7.5" fontWeight="bold">Relocation Hub</text>
            </g>

            <g transform="translate(268, 100)">
              <rect width="112" height="75" rx="6" fill="#162032" stroke="#243247" strokeWidth="1" />
              <rect x="8" y="8" width="96" height="34" rx="4" fill="#7c3aed" fillOpacity="0.3" />
              <text x="12" y="28" fill="#ede9fe" fontSize="9" fontWeight="bold">JEDDAH / RIYADH</text>
              <text x="8" y="54" fill="#cbd5e1" fontSize="7.5">Verified Stays</text>
              <text x="8" y="65" fill="#a78bfa" fontSize="7.5" fontWeight="bold">Instant Assist</text>
            </g>

            {/* Bottom Filter Strip */}
            <rect x="20" y="186" width="360" height="24" rx="6" fill="#162032" />
            <text x="32" y="201" fill="#94a3b8" fontSize="8">Filters: Direct Airport Pickup · Furnished Apartments · Local Sim Assistance</text>
          </svg>
        );

      case 'dohad':
        return (
          <svg viewBox="0 0 400 225" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="225" fill="#0f172a" />
            {/* Titlebar */}
            <rect width="400" height="26" fill="#1e293b" />
            <circle cx="16" cy="13" r="4" fill="#ff5f56" />
            <circle cx="28" cy="13" r="4" fill="#ffbd2e" />
            <circle cx="40" cy="13" r="4" fill="#27c93f" />
            <rect x="120" y="7" width="160" height="12" rx="6" fill="#334155" />
            <text x="145" y="16" fill="#94a3b8" fontSize="8" fontFamily="monospace">dohadindia.org / phfi</text>

            {/* Institutional Header */}
            <rect x="20" y="38" width="360" height="45" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <circle cx="45" cy="60" r="14" fill="#0284c7" />
            <text x="39" y="64" fill="#ffffff" fontSize="12" fontWeight="bold">D</text>
            <text x="68" y="55" fill="#ffffff" fontSize="10" fontWeight="bold">DOHaD India Official Web Platform</text>
            <text x="68" y="68" fill="#94a3b8" fontSize="7.5">Public Health Foundation of India · Next.js · MongoDB · Vercel</text>
            <rect x="300" y="48" width="65" height="20" rx="4" fill="#0284c7" fillOpacity="0.2" stroke="#0284c7" strokeWidth="1" />
            <text x="308" y="61" fill="#38bdf8" fontSize="7.5" fontWeight="bold">ACTIVE PORTAL</text>

            {/* Research Sections */}
            <rect x="20" y="93" width="172" height="75" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="32" y="110" fill="#38bdf8" fontSize="8" fontWeight="bold">COHORT REPOSITORY</text>
            <text x="32" y="124" fill="#f8fafc" fontSize="11" fontWeight="bold">Maternal Health Data</text>
            <text x="32" y="138" fill="#94a3b8" fontSize="7">Centralized documentation, research studies & datasets.</text>
            <rect x="32" y="148" width="60" height="12" rx="3" fill="#334155" />
            <text x="36" y="157" fill="#cbd5e1" fontSize="6.5">MongoDB Sync</text>

            <rect x="208" y="93" width="172" height="75" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="220" y="110" fill="#22c55e" fontSize="8" fontWeight="bold">DEPLOYMENT PIPELINE</text>
            <text x="220" y="124" fill="#f8fafc" fontSize="11" fontWeight="bold">Vercel & Cloudinary</text>
            <text x="220" y="138" fill="#94a3b8" fontSize="7">Automatic production builds and fast media hosting.</text>
            <rect x="220" y="148" width="65" height="12" rx="3" fill="#334155" />
            <text x="224" y="157" fill="#cbd5e1" fontSize="6.5">GitHub Connected</text>

            {/* System Status Strip */}
            <rect x="20" y="178" width="360" height="32" rx="6" fill="#1e293b" />
            <circle cx="36" cy="194" r="4" fill="#22c55e" />
            <text x="46" y="197" fill="#cbd5e1" fontSize="8">Production Status: 99.98% Uptime · Automated CI/CD Deployments · PHFI Verified</text>
          </svg>
        );

      case 'research-data-studio':
        return (
          <svg viewBox="0 0 400 225" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="225" fill="#0f172a" />
            {/* Titlebar */}
            <rect width="400" height="26" fill="#1e293b" />
            <circle cx="16" cy="13" r="4" fill="#ff5f56" />
            <circle cx="28" cy="13" r="4" fill="#ffbd2e" />
            <circle cx="40" cy="13" r="4" fill="#27c93f" />
            <rect x="120" y="7" width="160" height="12" rx="6" fill="#334155" />
            <text x="142" y="16" fill="#94a3b8" fontSize="8" fontFamily="monospace">phfi-data-studio.py</text>

            {/* Toolbar */}
            <rect x="20" y="36" width="360" height="24" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <rect x="28" y="41" width="70" height="14" rx="3" fill="#0284c7" />
            <text x="34" y="51" fill="#ffffff" fontSize="7" fontWeight="bold">📁 Upload CSV</text>
            <rect x="105" y="41" width="65" height="14" rx="3" fill="#334155" />
            <text x="111" y="51" fill="#cbd5e1" fontSize="7">⚙️ Clean & Filter</text>
            <rect x="178" y="41" width="75" height="14" rx="3" fill="#334155" />
            <text x="184" y="51" fill="#cbd5e1" fontSize="7">🔍 Quality Checks</text>
            <rect x="260" y="41" width="55" height="14" rx="3" fill="#334155" />
            <text x="266" y="51" fill="#cbd5e1" fontSize="7">📊 Visualize</text>
            <rect x="322" y="41" width="50" height="14" rx="3" fill="#22c55e" />
            <text x="328" y="51" fill="#ffffff" fontSize="7" fontWeight="bold">⬇ Export</text>

            {/* Data Grid Simulation */}
            <rect x="20" y="68" width="240" height="140" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <rect x="20" y="68" width="240" height="18" fill="#334155" rx="6" />
            <text x="30" y="80" fill="#f8fafc" fontSize="7" fontWeight="bold">ID</text>
            <text x="60" y="80" fill="#f8fafc" fontSize="7" fontWeight="bold">SUBJECT</text>
            <text x="110" y="80" fill="#f8fafc" fontSize="7" fontWeight="bold">METRIC A</text>
            <text x="160" y="80" fill="#f8fafc" fontSize="7" fontWeight="bold">STATUS</text>
            <text x="210" y="80" fill="#f8fafc" fontSize="7" fontWeight="bold">SCORE</text>

            <g transform="translate(30, 96)">
              <text x="0" y="0" fill="#cbd5e1" fontSize="7">#001</text>
              <text x="30" y="0" fill="#cbd5e1" fontSize="7">Sample-A1</text>
              <text x="80" y="0" fill="#cbd5e1" fontSize="7">14.28</text>
              <text x="130" y="0" fill="#22c55e" fontSize="7" fontWeight="bold">PASSED</text>
              <text x="180" y="0" fill="#cbd5e1" fontSize="7">98.4</text>
            </g>
            <line x1="20" y1="104" x2="260" y2="104" stroke="#334155" strokeWidth="1" />

            <g transform="translate(30, 118)">
              <text x="0" y="0" fill="#cbd5e1" fontSize="7">#002</text>
              <text x="30" y="0" fill="#cbd5e1" fontSize="7">Sample-A2</text>
              <text x="80" y="0" fill="#cbd5e1" fontSize="7">11.90</text>
              <text x="130" y="0" fill="#22c55e" fontSize="7" fontWeight="bold">PASSED</text>
              <text x="180" y="0" fill="#cbd5e1" fontSize="7">94.1</text>
            </g>
            <line x1="20" y1="126" x2="260" y2="126" stroke="#334155" strokeWidth="1" />

            <g transform="translate(30, 140)">
              <text x="0" y="0" fill="#cbd5e1" fontSize="7">#003</text>
              <text x="30" y="0" fill="#cbd5e1" fontSize="7">Sample-A3</text>
              <text x="80" y="0" fill="#cbd5e1" fontSize="7">08.45</text>
              <text x="130" y="0" fill="#eab308" fontSize="7" fontWeight="bold">FLAGGED</text>
              <text x="180" y="0" fill="#cbd5e1" fontSize="7">71.0</text>
            </g>
            <line x1="20" y1="148" x2="260" y2="148" stroke="#334155" strokeWidth="1" />

            <g transform="translate(30, 162)">
              <text x="0" y="0" fill="#cbd5e1" fontSize="7">#004</text>
              <text x="30" y="0" fill="#cbd5e1" fontSize="7">Sample-B1</text>
              <text x="80" y="0" fill="#cbd5e1" fontSize="7">19.04</text>
              <text x="130" y="0" fill="#22c55e" fontSize="7" fontWeight="bold">PASSED</text>
              <text x="180" y="0" fill="#cbd5e1" fontSize="7">99.2</text>
            </g>

            {/* Right Analytics Box */}
            <rect x="270" y="68" width="110" height="140" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="280" y="84" fill="#38bdf8" fontSize="7.5" fontWeight="bold">QUALITY METRICS</text>
            <text x="280" y="102" fill="#94a3b8" fontSize="7">Clean Records:</text>
            <text x="280" y="116" fill="#22c55e" fontSize="13" fontWeight="bold">98.2%</text>

            <text x="280" y="134" fill="#94a3b8" fontSize="7">Null Imputation:</text>
            <text x="280" y="146" fill="#38bdf8" fontSize="10" fontWeight="bold">Automated ✓</text>

            {/* Mini Histogram */}
            <g transform="translate(280, 165)">
              <rect x="0" y="18" width="8" height="16" fill="#0284c7" rx="2" />
              <rect x="12" y="10" width="8" height="24" fill="#0284c7" rx="2" />
              <rect x="24" y="4" width="8" height="30" fill="#06B6D4" rx="2" />
              <rect x="36" y="8" width="8" height="26" fill="#0284c7" rx="2" />
              <rect x="48" y="14" width="8" height="20" fill="#0284c7" rx="2" />
              <rect x="60" y="22" width="8" height="12" fill="#0284c7" rx="2" />
              <rect x="72" y="26" width="8" height="8" fill="#0284c7" rx="2" />
            </g>
          </svg>
        );

      case 'aqi':
        return (
          <svg viewBox="0 0 400 225" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="225" fill="#09131f" />
            {/* Titlebar */}
            <rect width="400" height="26" fill="#122030" />
            <circle cx="16" cy="13" r="4" fill="#ff5f56" />
            <circle cx="28" cy="13" r="4" fill="#ffbd2e" />
            <circle cx="40" cy="13" r="4" fill="#27c93f" />
            <rect x="110" y="7" width="180" height="12" rx="6" fill="#1b2f44" />
            <text x="122" y="16" fill="#94a3b8" fontSize="8" fontFamily="monospace">indian-air-quality-prediction.vercel.app</text>

            {/* City Selector */}
            <rect x="20" y="36" width="160" height="24" rx="4" fill="#122030" stroke="#1b2f44" strokeWidth="1" />
            <text x="30" y="51" fill="#f8fafc" fontSize="8" fontWeight="bold">📍 City: Hyderabad (Telangana)</text>

            <rect x="190" y="36" width="190" height="24" rx="4" fill="#122030" stroke="#1b2f44" strokeWidth="1" />
            <circle cx="202" cy="48" r="4" fill="#eab308" />
            <text x="212" y="51" fill="#eab308" fontSize="8" fontWeight="bold">AQI Status: Moderate Advisory</text>

            {/* Gauge Dial Container */}
            <rect x="20" y="68" width="160" height="140" rx="8" fill="#122030" stroke="#1b2f44" strokeWidth="1" />
            <text x="32" y="88" fill="#38bdf8" fontSize="8" fontWeight="bold">PREDICTIVE AQI INDEX</text>

            {/* Circular Gauge Arc */}
            <circle cx="100" cy="140" r="45" fill="none" stroke="#1b2f44" strokeWidth="10" strokeDasharray="180 360" strokeLinecap="round" transform="rotate(-180 100 140)" />
            <circle cx="100" cy="140" r="45" fill="none" stroke="#eab308" strokeWidth="10" strokeDasharray="110 360" strokeLinecap="round" transform="rotate(-180 100 140)" />
            <text x="100" y="138" textAnchor="middle" fill="#ffffff" fontSize="26" fontWeight="900">118</text>
            <text x="100" y="154" textAnchor="middle" fill="#94a3b8" fontSize="8">AQI SCORE</text>
            <text x="100" y="192" textAnchor="middle" fill="#eab308" fontSize="7.5" fontWeight="bold">Forecast: Next 24 Hours</text>

            {/* Pollutant Grid */}
            <g transform="translate(190, 68)">
              <rect width="90" height="65" rx="6" fill="#122030" stroke="#1b2f44" strokeWidth="1" />
              <text x="10" y="20" fill="#94a3b8" fontSize="7">PM 2.5</text>
              <text x="10" y="42" fill="#f8fafc" fontSize="16" fontWeight="bold">48.2</text>
              <text x="10" y="55" fill="#22c55e" fontSize="6.5">µg/m³ · Standard</text>
            </g>

            <g transform="translate(290, 68)">
              <rect width="90" height="65" rx="6" fill="#122030" stroke="#1b2f44" strokeWidth="1" />
              <text x="10" y="20" fill="#94a3b8" fontSize="7">PM 10</text>
              <text x="10" y="42" fill="#f8fafc" fontSize="16" fontWeight="bold">102.5</text>
              <text x="10" y="55" fill="#eab308" fontSize="6.5">µg/m³ · Elevated</text>
            </g>

            <g transform="translate(190, 143)">
              <rect width="90" height="65" rx="6" fill="#122030" stroke="#1b2f44" strokeWidth="1" />
              <text x="10" y="20" fill="#94a3b8" fontSize="7">NO2</text>
              <text x="10" y="42" fill="#f8fafc" fontSize="16" fontWeight="bold">28.4</text>
              <text x="10" y="55" fill="#22c55e" fontSize="6.5">ppb · Good</text>
            </g>

            <g transform="translate(290, 143)">
              <rect width="90" height="65" rx="6" fill="#122030" stroke="#1b2f44" strokeWidth="1" />
              <text x="10" y="20" fill="#94a3b8" fontSize="7">CO INDEX</text>
              <text x="10" y="42" fill="#f8fafc" fontSize="16" fontWeight="bold">0.82</text>
              <text x="10" y="55" fill="#22c55e" fontSize="6.5">ppm · Normal</text>
            </g>
          </svg>
        );

      case 'terrain-vision':
        return (
          <svg viewBox="0 0 400 225" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="225" fill="#0f172a" />
            {/* Titlebar */}
            <rect width="400" height="26" fill="#1e293b" />
            <circle cx="16" cy="13" r="4" fill="#ff5f56" />
            <circle cx="28" cy="13" r="4" fill="#ffbd2e" />
            <circle cx="40" cy="13" r="4" fill="#27c93f" />
            <rect x="110" y="7" width="180" height="12" rx="6" fill="#334155" />
            <text x="126" y="16" fill="#94a3b8" fontSize="8" fontFamily="monospace">terrain-classification.streamlit.app</text>

            {/* Computer Vision Frame */}
            <rect x="20" y="36" width="220" height="172" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            {/* Mountain / Forest terrain silhouette wireframe */}
            <polygon points="30,170 80,100 130,150 180,85 230,170" fill="#047857" fillOpacity="0.4" />
            <polygon points="60,170 120,115 160,145 200,95 240,170" fill="#065f46" fillOpacity="0.6" />

            {/* Camera crosshairs and telemetry */}
            <line x1="130" y1="50" x2="130" y2="70" stroke="#34d399" strokeWidth="1.5" />
            <line x1="120" y1="60" x2="140" y2="60" stroke="#34d399" strokeWidth="1.5" />
            <circle cx="130" cy="60" r="18" fill="none" stroke="#34d399" strokeWidth="1" strokeDasharray="4 2" />

            {/* Detection Bounding Box */}
            <rect x="70" y="80" width="120" height="80" fill="none" stroke="#34d399" strokeWidth="1.5" strokeDasharray="6 3" />
            <rect x="70" y="68" width="95" height="12" fill="#34d399" />
            <text x="74" y="77" fill="#064e3b" fontSize="7" fontWeight="bold">TARGET: FOREST TERRAIN</text>

            {/* MobileNet Classification Card */}
            <rect x="250" y="36" width="130" height="172" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="260" y="52" fill="#38bdf8" fontSize="8" fontWeight="bold">MOBILENETV2 PREDICTION</text>

            <g transform="translate(260, 68)">
              <text x="0" y="0" fill="#ffffff" fontSize="7.5" fontWeight="bold">Forest</text>
              <text x="95" y="0" fill="#34d399" fontSize="7.5" fontWeight="bold">94.8%</text>
              <rect x="0" y="4" width="110" height="6" rx="3" fill="#334155" />
              <rect x="0" y="4" width="104" height="6" rx="3" fill="#34d399" />
            </g>

            <g transform="translate(260, 95)">
              <text x="0" y="0" fill="#94a3b8" fontSize="7.5">Mountain</text>
              <text x="95" y="0" fill="#94a3b8" fontSize="7.5">3.2%</text>
              <rect x="0" y="4" width="110" height="6" rx="3" fill="#334155" />
              <rect x="0" y="4" width="4" height="6" rx="3" fill="#64748b" />
            </g>

            <g transform="translate(260, 122)">
              <text x="0" y="0" fill="#94a3b8" fontSize="7.5">Desert</text>
              <text x="95" y="0" fill="#94a3b8" fontSize="7.5">1.2%</text>
              <rect x="0" y="4" width="110" height="6" rx="3" fill="#334155" />
              <rect x="0" y="4" width="2" height="6" rx="3" fill="#64748b" />
            </g>

            <g transform="translate(260, 149)">
              <text x="0" y="0" fill="#94a3b8" fontSize="7.5">Plains</text>
              <text x="95" y="0" fill="#94a3b8" fontSize="7.5">0.8%</text>
              <rect x="0" y="4" width="110" height="6" rx="3" fill="#334155" />
              <rect x="0" y="4" width="1" height="6" rx="3" fill="#64748b" />
            </g>

            <rect x="260" y="174" width="110" height="22" rx="4" fill="#047857" fillOpacity="0.25" stroke="#34d399" strokeWidth="0.8" />
            <text x="268" y="188" fill="#34d399" fontSize="7" fontWeight="bold">⚡ Edge Latency: 24ms</text>
          </svg>
        );

      case 'customer-segmentation':
        return (
          <svg viewBox="0 0 400 225" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="225" fill="#0f172a" />
            {/* Titlebar */}
            <rect width="400" height="26" fill="#1e293b" />
            <circle cx="16" cy="13" r="4" fill="#ff5f56" />
            <circle cx="28" cy="13" r="4" fill="#ffbd2e" />
            <circle cx="40" cy="13" r="4" fill="#27c93f" />
            <rect x="110" y="7" width="180" height="12" rx="6" fill="#334155" />
            <text x="122" y="16" fill="#94a3b8" fontSize="8" fontFamily="monospace">customer-segmentation.streamlit.app</text>

            {/* Scatter Clustering Chart */}
            <rect x="20" y="36" width="230" height="172" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="32" y="52" fill="#38bdf8" fontSize="8" fontWeight="bold">PCA 2D SCATTER · K-MEANS (K=4)</text>

            {/* Grid lines */}
            <line x1="32" y1="70" x2="236" y2="70" stroke="#334155" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="32" y1="110" x2="236" y2="110" stroke="#334155" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="32" y1="150" x2="236" y2="150" stroke="#334155" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="32" y1="190" x2="236" y2="190" stroke="#475569" strokeWidth="1" />
            <line x1="32" y1="60" x2="32" y2="190" stroke="#475569" strokeWidth="1" />

            {/* Cluster 1: Cyan (High Value Champions) */}
            <circle cx="70" cy="90" r="4" fill="#06B6D4" opacity="0.8" />
            <circle cx="80" cy="80" r="3.5" fill="#06B6D4" opacity="0.8" />
            <circle cx="65" cy="100" r="4" fill="#06B6D4" opacity="0.8" />
            <circle cx="85" cy="95" r="4.5" fill="#06B6D4" opacity="0.8" />
            <circle cx="75" cy="85" r="8" fill="#06B6D4" opacity="0.2" />

            {/* Cluster 2: Purple (Loyal Customers) */}
            <circle cx="160" cy="90" r="4" fill="#a855f7" opacity="0.8" />
            <circle cx="170" cy="85" r="3.5" fill="#a855f7" opacity="0.8" />
            <circle cx="155" cy="105" r="4.5" fill="#a855f7" opacity="0.8" />
            <circle cx="180" cy="98" r="4" fill="#a855f7" opacity="0.8" />
            <circle cx="166" cy="94" r="8" fill="#a855f7" opacity="0.2" />

            {/* Cluster 3: Green (Recent / Promising) */}
            <circle cx="110" cy="150" r="4" fill="#22c55e" opacity="0.8" />
            <circle cx="120" cy="140" r="3.5" fill="#22c55e" opacity="0.8" />
            <circle cx="105" cy="160" r="4" fill="#22c55e" opacity="0.8" />
            <circle cx="125" cy="155" r="4.5" fill="#22c55e" opacity="0.8" />
            <circle cx="115" cy="150" r="8" fill="#22c55e" opacity="0.2" />

            {/* Cluster 4: Red/Orange (At Risk / Churn) */}
            <circle cx="190" cy="160" r="4" fill="#f97316" opacity="0.8" />
            <circle cx="205" cy="150" r="3.5" fill="#f97316" opacity="0.8" />
            <circle cx="185" cy="170" r="4" fill="#f97316" opacity="0.8" />
            <circle cx="215" cy="165" r="4.5" fill="#f97316" opacity="0.8" />
            <circle cx="198" cy="162" r="8" fill="#f97316" opacity="0.2" />

            {/* Right KPI Sidebar */}
            <rect x="260" y="36" width="120" height="172" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="270" y="52" fill="#38bdf8" fontSize="8" fontWeight="bold">SEGMENT PROFILES</text>

            <rect x="270" y="64" width="100" height="28" rx="4" fill="#06B6D4" fillOpacity="0.15" />
            <text x="276" y="76" fill="#38bdf8" fontSize="7.5" fontWeight="bold">Champions (32%)</text>
            <text x="276" y="86" fill="#94a3b8" fontSize="6.5">High Spend & Frequency</text>

            <rect x="270" y="98" width="100" height="28" rx="4" fill="#a855f7" fillOpacity="0.15" />
            <text x="276" y="110" fill="#c084fc" fontSize="7.5" fontWeight="bold">Loyal Cohort (28%)</text>
            <text x="276" y="120" fill="#94a3b8" fontSize="6.5">Consistent Transactions</text>

            <rect x="270" y="132" width="100" height="28" rx="4" fill="#f97316" fillOpacity="0.15" />
            <text x="276" y="144" fill="#fb923c" fontSize="7.5" fontWeight="bold">Churn Alert (18%)</text>
            <text x="276" y="154" fill="#94a3b8" fontSize="6.5">Reactivation Target</text>

            <rect x="270" y="166" width="100" height="30" rx="4" fill="#334155" />
            <text x="276" y="178" fill="#f8fafc" fontSize="7">Silhouette Score:</text>
            <text x="276" y="190" fill="#22c55e" fontSize="9" fontWeight="bold">0.68 (Optimal)</text>
          </svg>
        );

      case 'nlp-review':
        return (
          <svg viewBox="0 0 400 225" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="225" fill="#0f172a" />
            {/* Titlebar */}
            <rect width="400" height="26" fill="#1e293b" />
            <circle cx="16" cy="13" r="4" fill="#ff5f56" />
            <circle cx="28" cy="13" r="4" fill="#ffbd2e" />
            <circle cx="40" cy="13" r="4" fill="#27c93f" />
            <rect x="110" y="7" width="180" height="12" rx="6" fill="#334155" />
            <text x="126" y="16" fill="#94a3b8" fontSize="8" fontFamily="monospace">nlp-review-intelligence.streamlit.app</text>

            {/* Sentiment Ring Card */}
            <rect x="20" y="36" width="160" height="172" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="32" y="52" fill="#38bdf8" fontSize="8" fontWeight="bold">SENTIMENT DISTRIBUTION</text>

            {/* Doughnut Chart */}
            <circle cx="100" cy="115" r="42" fill="none" stroke="#22c55e" strokeWidth="14" strokeDasharray="190 264" transform="rotate(-90 100 115)" />
            <circle cx="100" cy="115" r="42" fill="none" stroke="#f97316" strokeWidth="14" strokeDasharray="45 264" strokeDashoffset="-190" transform="rotate(-90 100 115)" />
            <circle cx="100" cy="115" r="42" fill="none" stroke="#38bdf8" strokeWidth="14" strokeDasharray="29 264" strokeDashoffset="-235" transform="rotate(-90 100 115)" />
            <text x="100" y="112" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="900">72%</text>
            <text x="100" y="126" textAnchor="middle" fill="#22c55e" fontSize="7.5" fontWeight="bold">POSITIVE</text>

            <g transform="translate(32, 172)">
              <circle cx="4" cy="4" r="3" fill="#22c55e" />
              <text x="12" y="7" fill="#cbd5e1" fontSize="7">Positive (72%)</text>
              <circle cx="68" cy="4" r="3" fill="#f97316" />
              <text x="76" y="7" fill="#cbd5e1" fontSize="7">Negative (17%)</text>
            </g>

            {/* Live Transformer Inference Box */}
            <rect x="190" y="36" width="190" height="172" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="202" y="52" fill="#38bdf8" fontSize="8" fontWeight="bold">DISTILBERT CLASSIFIER INFERENCE</text>

            <rect x="202" y="64" width="166" height="42" rx="4" fill="#334155" />
            <text x="210" y="78" fill="#e2e8f0" fontSize="7.5">"Fast delivery, outstanding quality!"</text>
            <rect x="210" y="86" width="70" height="12" rx="3" fill="#22c55e" fillOpacity="0.2" />
            <text x="214" y="95" fill="#22c55e" fontSize="6.5" fontWeight="bold">SENTIMENT: POSITIVE (99.4%)</text>

            <rect x="202" y="114" width="166" height="42" rx="4" fill="#334155" />
            <text x="210" y="128" fill="#e2e8f0" fontSize="7.5">"Packaging was damaged on arrival."</text>
            <rect x="210" y="136" width="70" height="12" rx="3" fill="#f97316" fillOpacity="0.2" />
            <text x="214" y="145" fill="#f97316" fontSize="6.5" fontWeight="bold">SENTIMENT: NEGATIVE (94.1%)</text>

            <rect x="202" y="164" width="166" height="34" rx="4" fill="#0284c7" fillOpacity="0.15" stroke="#0284c7" strokeWidth="0.8" />
            <text x="210" y="177" fill="#38bdf8" fontSize="7" fontWeight="bold">BERTopic Topic Clusters:</text>
            <text x="210" y="188" fill="#cbd5e1" fontSize="6.5">#ShippingSpeed · #CustomerService · #ProductBuild</text>
          </svg>
        );

      case 'repcount':
        return (
          <svg viewBox="0 0 400 225" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="225" fill="#0f172a" />
            {/* Titlebar */}
            <rect width="400" height="26" fill="#1e293b" />
            <circle cx="16" cy="13" r="4" fill="#ff5f56" />
            <circle cx="28" cy="13" r="4" fill="#ffbd2e" />
            <circle cx="40" cy="13" r="4" fill="#27c93f" />
            <rect x="110" y="7" width="180" height="12" rx="6" fill="#334155" />
            <text x="120" y="16" fill="#94a3b8" fontSize="8" fontFamily="monospace">repcount-gym-manager.vercel.app</text>

            {/* Gym CRM Header */}
            <rect x="20" y="36" width="360" height="44" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="32" y="52" fill="#38bdf8" fontSize="10" fontWeight="bold">REPCOUNT GYM CRM & FEE MANAGER</text>
            <text x="32" y="66" fill="#94a3b8" fontSize="7.5">Active Members: 184 · Attendance Check-In · WhatsApp Dues Notification</text>
            <rect x="300" y="44" width="70" height="26" rx="4" fill="#22c55e" />
            <text x="308" y="60" fill="#ffffff" fontSize="8" fontWeight="bold">+ Add Member</text>

            {/* Member Attendance Rows */}
            <g transform="translate(20, 88)">
              <rect width="360" height="34" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />
              <circle cx="18" cy="17" r="9" fill="#0284c7" />
              <text x="14" y="21" fill="#fff" fontSize="8" fontWeight="bold">A</text>
              <text x="36" y="15" fill="#f8fafc" fontSize="8.5" fontWeight="bold">Ahmed Khan</text>
              <text x="36" y="26" fill="#94a3b8" fontSize="7">Membership: Annual Plan · Checked-in 06:30 AM</text>
              <rect x="220" y="10" width="46" height="14" rx="3" fill="#22c55e" fillOpacity="0.2" />
              <text x="226" y="20" fill="#22c55e" fontSize="7" fontWeight="bold">PAID ✓</text>
              <rect x="275" y="10" width="75" height="14" rx="3" fill="#334155" />
              <text x="282" y="20" fill="#cbd5e1" fontSize="7">View Profile</text>
            </g>

            <g transform="translate(20, 128)">
              <rect width="360" height="34" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />
              <circle cx="18" cy="17" r="9" fill="#f97316" />
              <text x="14" y="21" fill="#fff" fontSize="8" fontWeight="bold">R</text>
              <text x="36" y="15" fill="#f8fafc" fontSize="8.5" fontWeight="bold">Rahul Verma</text>
              <text x="36" y="26" fill="#94a3b8" fontSize="7">Membership: Monthly · Fee Due in 2 Days</text>
              <rect x="220" y="10" width="46" height="14" rx="3" fill="#f97316" fillOpacity="0.2" />
              <text x="226" y="20" fill="#f97316" fontSize="7" fontWeight="bold">DUE</text>
              <rect x="275" y="10" width="75" height="14" rx="3" fill="#25d366" />
              <text x="281" y="20" fill="#ffffff" fontSize="7" fontWeight="bold">💬 Remind WA</text>
            </g>

            <g transform="translate(20, 168)">
              <rect width="360" height="34" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />
              <circle cx="18" cy="17" r="9" fill="#a855f7" />
              <text x="14" y="21" fill="#fff" fontSize="8" fontWeight="bold">M</text>
              <text x="36" y="15" fill="#f8fafc" fontSize="8.5" fontWeight="bold">Mohammed Zafar</text>
              <text x="36" y="26" fill="#94a3b8" fontSize="7">Membership: Quarterly · Checked-in 07:15 AM</text>
              <rect x="220" y="10" width="46" height="14" rx="3" fill="#22c55e" fillOpacity="0.2" />
              <text x="226" y="20" fill="#22c55e" fontSize="7" fontWeight="bold">PAID ✓</text>
              <rect x="275" y="10" width="75" height="14" rx="3" fill="#334155" />
              <text x="282" y="20" fill="#cbd5e1" fontSize="7">View Profile</text>
            </g>
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 400 225" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="225" fill="#0f172a" />
            <rect width="400" height="26" fill="#1e293b" />
            <circle cx="16" cy="13" r="4" fill="#ff5f56" />
            <circle cx="28" cy="13" r="4" fill="#ffbd2e" />
            <circle cx="40" cy="13" r="4" fill="#27c93f" />
            <rect x="130" y="7" width="140" height="12" rx="6" fill="#334155" />
            <text x="156" y="16" fill="#94a3b8" fontSize="8" fontFamily="monospace">github.com/project</text>
            <rect x="40" y="50" width="320" height="140" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="60" y="80" fill="#38bdf8" fontSize="12" fontWeight="bold">Application System Architecture</text>
            <text x="60" y="100" fill="#94a3b8" fontSize="9">Modern full-stack web and data analytics platform.</text>
          </svg>
        );
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#0a0f1d',
        overflow: 'hidden',
        '& svg': {
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }
      }}
    >
      {renderContent()}
    </Box>
  );
}
