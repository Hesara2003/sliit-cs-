// Utility functions for making API calls to admin endpoints

const API_BASE = '/api/admin';

// Generic API call function
async function apiCall(endpoint: string, options: RequestInit = {}) {
  const url = `${API_BASE}${endpoint}`;
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const mergedOptions = { ...defaultOptions, ...options };

  try {
    const response = await fetch(url, mergedOptions);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || `HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}

// Authentication API
export const authAPI = {
  login: async (credentials: { username: string; password: string }) => {
    return apiCall('/auth', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });
  },
  
  logout: async () => {
    return apiCall('/auth', {
      method: 'DELETE'
    });
  }
};

// Blog Posts API
export const blogAPI = {
  getAll: async (params?: { page?: number; limit?: number; status?: string; search?: string }) => {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.set('page', params.page.toString());
    if (params?.limit) searchParams.set('limit', params.limit.toString());
    if (params?.status) searchParams.set('status', params.status);
    if (params?.search) searchParams.set('search', params.search);
    
    return apiCall(`/blog?${searchParams.toString()}`);
  },
  
  getById: async (id: string) => {
    return apiCall(`/blog/${id}`);
  },
  
  create: async (data: {
    title: string;
    content: string;
    author: string;
    status?: string;
    excerpt?: string;
    tags?: string[];
  }) => {
    return apiCall('/blog', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  
  update: async (id: string, data: any) => {
    return apiCall(`/blog/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },
  
  delete: async (id: string) => {
    return apiCall(`/blog/${id}`, {
      method: 'DELETE'
    });
  }
};

// Events API
export const eventsAPI = {
  getAll: async (params?: { page?: number; limit?: number; status?: string }) => {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.set('page', params.page.toString());
    if (params?.limit) searchParams.set('limit', params.limit.toString());
    if (params?.status) searchParams.set('status', params.status);
    
    return apiCall(`/events?${searchParams.toString()}`);
  },
  
  getById: async (id: string) => {
    return apiCall(`/events/${id}`);
  },
  
  create: async (data: {
    title: string;
    date: string;
    type: string;
    description?: string;
    location?: string;
    maxAttendees?: number;
  }) => {
    return apiCall('/events', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  
  update: async (id: string, data: any) => {
    return apiCall(`/events/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },
  
  delete: async (id: string) => {
    return apiCall(`/events/${id}`, {
      method: 'DELETE'
    });
  }
};

// News API
export const newsAPI = {
  getAll: async (params?: { page?: number; limit?: number; priority?: string }) => {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.set('page', params.page.toString());
    if (params?.limit) searchParams.set('limit', params.limit.toString());
    if (params?.priority) searchParams.set('priority', params.priority);
    
    return apiCall(`/news?${searchParams.toString()}`);
  },
  
  getById: async (id: string) => {
    return apiCall(`/news/${id}`);
  },
  
  create: async (data: {
    title: string;
    priority: string;
    content?: string;
    author?: string;
  }) => {
    return apiCall('/news', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  
  update: async (id: string, data: any) => {
    return apiCall(`/news/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },
  
  delete: async (id: string) => {
    return apiCall(`/news/${id}`, {
      method: 'DELETE'
    });
  }
};

// Form Submissions API
export const submissionsAPI = {
  getAll: async (params?: { page?: number; limit?: number; status?: string }) => {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.set('page', params.page.toString());
    if (params?.limit) searchParams.set('limit', params.limit.toString());
    if (params?.status) searchParams.set('status', params.status);
    
    return apiCall(`/submissions?${searchParams.toString()}`);
  },
  
  getById: async (id: string) => {
    return apiCall(`/submissions/${id}`);
  },
  
  update: async (id: string, data: { status?: string }) => {
    return apiCall(`/submissions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },
  
  delete: async (id: string) => {
    return apiCall(`/submissions/${id}`, {
      method: 'DELETE'
    });
  }
};

// Dashboard Statistics API
export const statsAPI = {
  get: async () => {
    return apiCall('/stats');
  }
};

// Users API
export const usersAPI = {
  getAll: async () => {
    return apiCall('/users');
  },
  
  create: async (data: {
    name: string;
    email: string;
    studentId?: string;
    role?: string;
  }) => {
    return apiCall('/users', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
};
