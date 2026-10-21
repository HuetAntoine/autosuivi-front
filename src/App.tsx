import { Routes, Route, Navigate } from 'react-router';
import { Placeholder } from './pages/ListeTaches';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/taches" replace />} />
        <Route path="/taches" element={<Placeholder titre="Liste des tâches" />} />
        <Route path="/taches/nouvelle" element={<Placeholder titre="Nouvelle tâche" />} />
        <Route path="/taches/:id" element={<Placeholder titre="Fiche tâche" />} />
        <Route path="/taches/:id/modifier" element={<Placeholder titre="Modifier la tâche" />} />
        <Route path="/projets/:id/kanban" element={<Placeholder titre="Kanban" />} />
        <Route path="/idees" element={<Placeholder titre="Backlog d'idées" />} />
        <Route path="/ma-todo" element={<Placeholder titre="Ma to-do" />} />
      </Routes>
  );
}