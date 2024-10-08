import { create } from "zustand";

interface ViewCourseState {
  courseSectionData: any[];
  courseEntireData: any[];
  completedLectures: any[];
  totalNoOfLectures: number;
  setCourseSectionData: (data: any[]) => void;
  setEntireCourseData: (data: any[]) => void;
  setTotalNoOfLectures: (total: number) => void;
  setCompletedLectures: (lectures: any[]) => void;
  updateCompletedLectures: (lecture: any) => void;
}

const useViewCourseStore = create<ViewCourseState>((set) => ({
  courseSectionData: [],
  courseEntireData: [],
  completedLectures: [],
  totalNoOfLectures: 0,
  setCourseSectionData: (data: any[]) => set({ courseSectionData: data }),
  setEntireCourseData: (data: any[]) => set({ courseEntireData: data }),
  setTotalNoOfLectures: (total: number) => set({ totalNoOfLectures: total }),
  setCompletedLectures: (lectures: any[]) => set({ completedLectures: lectures }),
  updateCompletedLectures: (lecture: any) =>
    set((state) => ({
      completedLectures: [...state.completedLectures, lecture],
    })),
}));

export default useViewCourseStore;
