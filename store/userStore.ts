import { create } from 'zustand'
import { UserProfile, WeeklyPackage } from '@/types'

interface UserStore {
    profile: UserProfile | null
    currentPackage: WeeklyPackage | null
    setProfile: (profile: UserProfile | null) => void
    setCurrentPackage: (pkg: WeeklyPackage | null) => void
    clearUser: () => void
}

export const useUserStore = create<UserStore>((set) => ({
    profile: null,
    currentPackage: null,
    setProfile: (profile) => set({ profile }),
    setCurrentPackage: (pkg) => set({ currentPackage: pkg }),
    clearUser: () => set({ profile: null, currentPackage: null }),
}))
