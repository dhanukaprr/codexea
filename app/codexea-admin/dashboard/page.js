'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../admin.module.css';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('projects');
    const [projects, setProjects] = useState([]);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);

    // Form management
    const [editingItem, setEditingItem] = useState(null);
    const [projectFormData, setProjectFormData] = useState({ client: '', category: '', link: '', theme: 'dark' });
    const [serviceFormData, setServiceFormData] = useState({
        title: '',
        description: '',
        theme: 'dark',
        longDescription: '',
        features: '',
        benefits: ''
    });

    const router = useRouter();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [projRes, servRes] = await Promise.all([
                fetch('/api/projects'),
                fetch('/api/services')
            ]);

            const [projData, servData] = await Promise.all([
                projRes.json(),
                servRes.json()
            ]);

            setProjects(Array.isArray(projData) ? projData : []);
            setServices(Array.isArray(servData) ? servData : []);
        } catch (err) {
            console.error('Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/codexea-admin');
    };

    const openAddModal = () => {
        setEditingItem(null);
        if (activeTab === 'projects') {
            setProjectFormData({ client: '', category: '', link: '', theme: 'dark' });
        } else {
            setServiceFormData({ title: '', description: '', theme: 'dark', longDescription: '', features: '', benefits: '' });
        }
        setModalOpen(true);
    };

    const openEditModal = (item) => {
        setEditingItem(item);
        if (activeTab === 'projects') {
            setProjectFormData({
                client: item.client,
                category: item.category,
                link: item.link,
                theme: item.theme
            });
        } else {
            setServiceFormData({
                title: item.title,
                description: item.description,
                theme: item.theme,
                longDescription: item.longDescription || '',
                features: Array.isArray(item.features) ? item.features.join('\n') : '',
                benefits: Array.isArray(item.benefits) ? item.benefits.join('\n') : ''
            });
        }
        setModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (!confirm(`Are you sure you want to delete this ${activeTab === 'projects' ? 'project' : 'service'}?`)) return;

        try {
            const url = activeTab === 'projects' ? `/api/projects/${id}` : `/api/services/${id}`;
            const res = await fetch(url, { method: 'DELETE' });
            if (res.ok) fetchData();
        } catch (err) {
            alert('Failed to delete item');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isProject = activeTab === 'projects';
        const url = isProject
            ? (editingItem ? `/api/projects/${editingItem.id}` : '/api/projects')
            : (editingItem ? `/api/services/${editingItem.id}` : '/api/services');
        const method = editingItem ? 'PUT' : 'POST';

        let body;
        if (isProject) {
            body = projectFormData;
        } else {
            // Process comma-separated strings back to arrays
            body = {
                ...serviceFormData,
                features: serviceFormData.features.split('\n').filter(f => f.trim()),
                benefits: serviceFormData.benefits.split('\n').filter(b => b.trim())
            };
        }

        try {
            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            if (res.ok) {
                setModalOpen(false);
                fetchData();
            } else {
                const data = await res.json();
                alert(`Error: ${data.error || 'Failed to save item'}`);
            }
        } catch (err) {
            alert('An unexpected error occurred. Please try again.');
        }
    };

    if (loading) return <div className={styles.loading}>Loading Dashboard...</div>;

    return (
        <div className={styles.dashboardPage}>
            <header className={styles.dashboardHeader}>
                <h1>Codexea<span>.</span> Admin</h1>
                <div className={styles.headerActions}>
                    <button onClick={openAddModal} className={styles.addBtn}>+ Add {activeTab === 'projects' ? 'Project' : 'Service'}</button>
                    <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
                </div>
            </header>

            <div className={styles.tabContainer}>
                <button
                    className={`${styles.tab} ${activeTab === 'projects' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('projects')}
                >
                    Projects
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'services' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('services')}
                >
                    Services
                </button>
            </div>

            <div className={styles.projectGrid}>
                {activeTab === 'projects' ? (
                    projects.map((project) => (
                        <div key={project.id} className={styles.adminCard}>
                            <div className={styles.cardTop}>
                                <div className={styles.clientInfo}>
                                    <h2>{project.client}</h2>
                                    <span className={styles.categoryTag}>{project.category}</span>
                                </div>
                                <span className={styles.themeBadge}>{project.theme}</span>
                            </div>
                            <div className={styles.cardActions}>
                                <button onClick={() => openEditModal(project)} className={styles.editBtn}>Edit</button>
                                <button onClick={() => handleDelete(project.id)} className={styles.deleteBtn}>Delete</button>
                            </div>
                        </div>
                    ))
                ) : (
                    services.map((service) => (
                        <div key={service.id} className={styles.adminCard}>
                            <div className={styles.cardTop}>
                                <div className={styles.clientInfo}>
                                    <h2>{service.title}</h2>
                                    <p style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '5px' }}>{service.description.substring(0, 60)}...</p>
                                </div>
                                <span className={styles.themeBadge}>{service.theme}</span>
                            </div>
                            <div className={styles.cardActions}>
                                <button onClick={() => openEditModal(service)} className={styles.editBtn}>Edit</button>
                                <button onClick={() => handleDelete(service.id)} className={styles.deleteBtn}>Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {modalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal} style={{ maxWidth: activeTab === 'services' ? '700px' : '500px' }}>
                        <h2>{editingItem ? 'Edit' : 'Add'} {activeTab === 'projects' ? 'Project' : 'Service'}</h2>
                        <form onSubmit={handleSubmit}>
                            {activeTab === 'projects' ? (
                                <>
                                    <div className={styles.formGroup}>
                                        <label>Client Name</label>
                                        <input
                                            type="text"
                                            value={projectFormData.client}
                                            onChange={(e) => setProjectFormData({ ...projectFormData, client: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Category</label>
                                        <input
                                            type="text"
                                            value={projectFormData.category}
                                            onChange={(e) => setProjectFormData({ ...projectFormData, category: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Website Link</label>
                                        <input
                                            type="url"
                                            value={projectFormData.link}
                                            onChange={(e) => setProjectFormData({ ...projectFormData, link: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Card Theme</label>
                                        <select
                                            value={projectFormData.theme}
                                            onChange={(e) => setProjectFormData({ ...projectFormData, theme: e.target.value })}
                                        >
                                            <option value="dark">Dark</option>
                                            <option value="lilac">Lilac</option>
                                            <option value="light">Light</option>
                                        </select>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                        <div className={styles.formGroup}>
                                            <label>Title</label>
                                            <input
                                                type="text"
                                                value={serviceFormData.title}
                                                onChange={(e) => setServiceFormData({ ...serviceFormData, title: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Theme</label>
                                            <select
                                                value={serviceFormData.theme}
                                                onChange={(e) => setServiceFormData({ ...serviceFormData, theme: e.target.value })}
                                            >
                                                <option value="dark">Dark</option>
                                                <option value="lilac">Lilac</option>
                                                <option value="light">Light</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Short Description</label>
                                        <input
                                            type="text"
                                            value={serviceFormData.description}
                                            onChange={(e) => setServiceFormData({ ...serviceFormData, description: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Long Description</label>
                                        <textarea
                                            style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }}
                                            rows="4"
                                            value={serviceFormData.longDescription}
                                            onChange={(e) => setServiceFormData({ ...serviceFormData, longDescription: e.target.value })}
                                        ></textarea>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                        <div className={styles.formGroup}>
                                            <label>Features (one per line)</label>
                                            <textarea
                                                style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }}
                                                rows="5"
                                                value={serviceFormData.features}
                                                onChange={(e) => setServiceFormData({ ...serviceFormData, features: e.target.value })}
                                            ></textarea>
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Benefits (one per line)</label>
                                            <textarea
                                                style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }}
                                                rows="5"
                                                value={serviceFormData.benefits}
                                                onChange={(e) => setServiceFormData({ ...serviceFormData, benefits: e.target.value })}
                                            ></textarea>
                                        </div>
                                    </div>
                                </>
                            )}
                            <div className={styles.modalActions}>
                                <button type="button" onClick={() => setModalOpen(false)} className={styles.cancelBtn}>Cancel</button>
                                <button type="submit" className={styles.saveBtn}>Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
