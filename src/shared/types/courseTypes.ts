export interface CourseType {
  title: string;
  courseCode: string;
  dateUploaded: string;
  studentRatings: RatingsType[];
  progress: number;
  courseImage: string;
  courseThumbnail: string;
  previewUrl: string;
  curriculum: CurriculumType[];
  courseDescription: string;
  level: string;
  //   tutor: TutorType;
}
export interface RatingsType {
  rating: number;
  comment: string;
  rater: string;
}

export interface CurriculumType {
  title: string;
  videoUrl: string;
}
export interface TutorType {
  profileUrl: string;
  name: string;
}
