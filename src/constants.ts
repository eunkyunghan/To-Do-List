import { AgendaItem, DaySummary } from './types';

export const TODAY_AGENDA: AgendaItem[] = [
  {
    id: '1',
    title: 'School Drop-off & Morning Prep',
    stakeholders: ['Kids', 'Teachers'],
    duration: '45 mins',
    materials: ['Backpacks', 'Lunchboxes', 'Gym Kits'],
    status: 'pending',
    time: '07:30 AM',
    isCurrent: true,
    memo: 'Double check the permission slip for the field trip.'
  },
  {
    id: '2',
    title: 'Library Study Session: Logo design',
    stakeholders: ['Self', 'Study Group'],
    duration: '120 mins',
    materials: ['Laptop', 'Textbook', 'Calculator'],
    status: 'pending',
    time: '09:30 AM',
    memo: 'Work on the initial sketches for the brand identity project.'
  },
  {
    id: '3',
    title: 'Attending an Internship class',
    stakeholders: ['Internship Coordinator', 'Cohort'],
    duration: '90 mins',
    materials: ['Internship Log', 'Weekly Report'],
    status: 'pending',
    time: '01:00 PM',
    memo: 'Discuss the mid-term evaluation and site supervisor feedback.'
  },
  {
    id: '4',
    title: 'School Pick-up & Park Time',
    stakeholders: ['Kids', 'Other Parents'],
    duration: '60 mins',
    materials: ['Water Bottles', 'Healthy Snacks', 'Soccer Ball'],
    status: 'pending',
    time: '03:30 PM',
    memo: 'Let the kids play for an hour before starting homework.'
  },
  {
    id: '5',
    title: 'Dinner Prep & Homework Help',
    stakeholders: ['Family'],
    duration: '90 mins',
    materials: ['Groceries', 'Math Workbook', 'Spelling List'],
    status: 'pending',
    time: '05:30 PM',
    memo: 'Prep the lasagna while checking 3rd-grade math problems.'
  }
];

export const UPCOMING_DAYS: DaySummary[] = [
  {
    id: 'd1',
    date: 'Mar 27',
    dayName: 'Tomorrow',
    taskCount: 6,
    topTask: 'Group Project Meeting'
  },
  {
    id: 'd2',
    date: 'Mar 28',
    dayName: 'Saturday',
    taskCount: 4,
    topTask: 'Family Outing & Exam Prep'
  },
  {
    id: 'd3',
    date: 'Mar 29',
    dayName: 'Sunday',
    taskCount: 5,
    topTask: 'Meal Prep & Weekly Review'
  }
];
