# TicketFlow – React Version

**Live URL**: https://react-ticketflow.vercel.app  
**Repository**: https://github.com/Joshdigitalconcept/react-ticketflow  

---

## Tech Stack
- **React** + **Vite**  
- **React Router v6** (client-side routing & protected routes)  
- **Tailwind CSS** (utility-first styling)  
- **react-hot-toast** (toast notifications)  

---

## Features (identical across React / Vue / Twig)

| Feature | Implementation |
|---------|----------------|
| **Landing page** | Hero with wavy SVG, 3 decorative circles, CTA buttons, max-width 1440px |
| **Auth** | Login / Signup with form validation, `ticketapp_session` in `localStorage`, 1-hour expiry |
| **Dashboard** | Stats cards (Total, Open, In-Progress, Closed) |
| **Ticket CRUD** | List, Create, Edit, Delete with real-time validation & toast feedback |
| **Status colors** | `open` → green, `in_progress` → amber, `closed` → gray |
| **Protected routes** | Unauthorized → redirect to `/auth/login` |
| **Responsive** | Mobile-first, tablet & desktop grids |
| **Accessibility** | Semantic HTML, focus rings, sufficient contrast |

---

## Test Account

Email:    test@example.com
Password: password123

---

## Local Development
```bash
npm install
npm run dev

Build & Deploy (Vercel)bash

npm run build   # creates ./dist
vercel          # or import repo on vercel.com

Vercel automatically detects Vite → uses npm run build and serves dist.Project Structure

src/
 ├─ pages/          # Landing, Login, Signup, Dashboard, Tickets, CreateTicket, EditTicket
 ├─ App.jsx         # Router + ProtectedRoute wrapper
 ├─ main.jsx        # ReactDOM + Toaster
 └─ index.css       # Tailwind imports

