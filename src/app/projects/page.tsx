import ProjectTabs from '../components/projectTabs/ProjectTabs_Master'
import styles from './page.module.css';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'AlphaRedux | Projects',
    description: 'Current Projects By Alpha Redux'
}

export default function Projects() {
    return (
        <main>
            <h1 className="pageMainTitle"> PROJECTS </h1>
            {/* Tabs */}
            <ProjectTabs />
        </main>
    );
}
