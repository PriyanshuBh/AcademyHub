import { create } from "zustand";

interface CourseState {
  step: number;
  course: any | null;
  editCourse: boolean;
  paymentLoading: boolean;
  setStep: (newstep: number) => void;
  setCourse: (course: any) => void;
  setEditCourse: (editCourse: boolean) => void;
  setPaymentLoading: (loading: boolean) => void;
  resetCourseState: () => void;
}

const useCourseStore = create<CourseState>((set) => ({
  step: 1,
  course: null,
  editCourse: false,
  paymentLoading: false,
  setStep: (newstep) => set({ step: newstep }),
  setCourse: (course: any) => set({ course }),
  setEditCourse: (editCourse) => set({ editCourse }),
  setPaymentLoading: (loading) => set({ paymentLoading: loading }),
  resetCourseState: () =>
    set({
      step: 1,
      course: null,
      editCourse: false,
      paymentLoading: false,
    }),
}));

export default useCourseStore;
