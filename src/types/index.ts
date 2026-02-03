// ===== Project Types =====
export interface Project {
    id: string;
    slug: string;
    title: string;
    category: 'vlsi' | 'ai-robotics';
    description: string | null;
    content: string | null;
    thumbnail_url: string | null;
    featured: boolean;
    status: 'draft' | 'published';
    created_at: string;
    updated_at: string;
}

export interface ProjectTimelineEvent {
    id: string;
    project_id: string;
    title: string;
    description: string | null;
    date: string;
    order_index: number;
}

export interface ProjectMedia {
    id: string;
    project_id: string;
    type: 'image' | 'video';
    url: string;
    caption: string | null;
    order_index: number;
}

// ===== Team Types =====
export interface TeamMember {
    id: string;
    slug: string;
    name: string;
    role: string | null;
    bio: string | null;
    photo_url: string | null;
    resume_url: string | null;
    email: string | null;
    linkedin_url: string | null;
    github_url: string | null;
    created_at: string;
}

export interface TeamMemberProject {
    id: string;
    team_member_id: string;
    project_id: string;
    contribution: string | null;
}

// ===== Site Settings =====
export interface SiteSetting {
    id: string;
    key: string;
    value: Record<string, unknown>;
}

// ===== Extended Types with Relations =====
export interface ProjectWithRelations extends Project {
    timeline?: ProjectTimelineEvent[];
    media?: ProjectMedia[];
    team_members?: (TeamMember & { contribution?: string })[];
}

export interface TeamMemberWithProjects extends TeamMember {
    projects?: (Project & { contribution?: string })[];
}
