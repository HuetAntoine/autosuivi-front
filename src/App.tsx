import { Routes, Route, Navigate } from 'react-router';
import { Tache } from './pages/Tache';
import { ListeTaches } from './pages/ListeTaches';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/taches" replace />} />
        <Route path="/taches" element={<ListeTaches />} />
        <Route path="/taches/nouvelle" element={<Tache titre="Nouvelle tâche" />} />
        <Route path="/taches/:id" element={<Tache titre="Fiche tâche" />} />
        <Route path="/taches/:id/modifier" element={<Tache titre="Modifier la tâche" />} />
        <Route path="/projets/:id/kanban" element={<Tache titre="Kanban" />} />
        <Route path="/idees" element={<Tache titre="Backlog d'idées" />} />
        <Route path="/ma-todo" element={<Tache titre="Ma to-do" />} />
      </Routes>
  );
}