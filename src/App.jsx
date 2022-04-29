import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import { useAppStore } from './store';
import { useEffect } from 'react';
import ListItem from './ListItem';

function App() {
  const isLoggedIn = useAppStore((state) => state.isLoggedIn);
  const navigate = useNavigate();
  const projects = useAppStore((state) => state.projects);
  const getProjects = useAppStore((state) => state.getProjects);
  console.log(projects);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      getProjects();
    }
  }, []);

  return (
    <div className="App">
      <div className="projects h-[80vh] w-10/12 relative z-10 bg-white rounded-xl ring-1 ring-slate-900/5 divide-y divide-slate-100 my-auto xl:mt-18 dark:bg-slate-800 dark:divide-slate-200/5 dark:highlight-white/10">
        <div className="list divide-y divide-slate-100 gap-4 grid grid-cols-1 md:grid-cols-2">
          {projects.map((project) => (
            <ListItem item={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
