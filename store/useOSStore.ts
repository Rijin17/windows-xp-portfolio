import { create } from 'zustand';

export type AppId = 'profile' | 'projects' | 'experience' | 'skills' | 'contact' | 'internet';

interface WindowState {
    isOpen: boolean;
    isMinimized: boolean;
    zIndex: number;
}

interface OSState {
    windows: Record<AppId, WindowState>;
    activeWindow: AppId | null;
    maxZIndex: number;
    bootPhase: 'BIOS' | 'LOADING' | 'WELCOME' | 'DESKTOP';
    isStartMenuOpen: boolean;

    openWindow: (id: AppId) => void;
    closeWindow: (id: AppId) => void;
    minimizeWindow: (id: AppId) => void;
    focusWindow: (id: AppId) => void;
    setBootPhase: (phase: 'BIOS' | 'LOADING' | 'WELCOME' | 'DESKTOP') => void;
    toggleStartMenu: () => void;
}

export const useOSStore = create<OSState>((set) => ({
    windows: {
        profile: { isOpen: true, isMinimized: false, zIndex: 1 },
        projects: { isOpen: false, isMinimized: false, zIndex: 0 },
        experience: { isOpen: false, isMinimized: false, zIndex: 0 },
        skills: { isOpen: false, isMinimized: false, zIndex: 0 },
        contact: { isOpen: false, isMinimized: false, zIndex: 0 },
        internet: { isOpen: false, isMinimized: false, zIndex: 0 },
    },
    activeWindow: 'profile',
    maxZIndex: 1,
    bootPhase: 'BIOS',
    isStartMenuOpen: false,

    setBootPhase: (phase) => set({ bootPhase: phase }),
    toggleStartMenu: () => set((state) => ({ isStartMenuOpen: !state.isStartMenuOpen })),

    openWindow: (id) =>
        set((state) => {
            const newZ = state.maxZIndex + 1;
            return {
                windows: {
                    ...state.windows,
                    [id]: { isOpen: true, isMinimized: false, zIndex: newZ },
                },
                activeWindow: id,
                maxZIndex: newZ,
            };
        }),

    closeWindow: (id) =>
        set((state) => ({
            windows: {
                ...state.windows,
                [id]: { ...state.windows[id], isOpen: false },
            },
            activeWindow: state.activeWindow === id ? null : state.activeWindow,
        })),

    minimizeWindow: (id) =>
        set((state) => ({
            windows: {
                ...state.windows,
                [id]: { ...state.windows[id], isMinimized: true },
            },
            activeWindow: null,
        })),

    focusWindow: (id) =>
        set((state) => {
            const newZ = state.maxZIndex + 1;
            return {
                windows: {
                    ...state.windows,
                    [id]: { ...state.windows[id], isMinimized: false, zIndex: newZ },
                },
                activeWindow: id,
                maxZIndex: newZ,
            };
        }),
}));
