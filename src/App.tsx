import { Routes, Route, Navigate } from 'react-router';
import { EcranAVenir } from './pages/Tache';
import { ListeTaches } from './pages/ListeTaches';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/taches" replace />} />
        <Route path="/taches" element={<ListeTaches />} />
        <Route path="/taches/nouvelle" element={<EcranAVenir titre="Nouvelle tâche" />} />
        <Route path="/taches/:id" element={<EcranAVenir titre="Fiche tâche" />} />
        <Route path="/taches/:id/modifier" element={<EcranAVenir titre="Modifier la tâche" />} />
        <Route path="/projets/:id/kanban" element={<EcranAVenir titre="Kanban" />} />
        <Route path="/idees" element={<EcranAVenir titre="Backlog d'idées" />} />
        <Route path="/ma-todo" element={<EcranAVenir titre="Ma to-do" />} />
      </Routes>
  );
}