import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ClassStore implements InMemoryDbService {
  createDb() {
    const classes = [
      {
        id: 1,
        students: [
          'Student 0',
          'Student 1',
          'Student 2',
          'Student 3'
        ],
        name: 'Class 1'
      },
      {
        id: 2,
        students: [
          'Student 4',
          'Student 5',
          'Student 6'
        ],
        name: 'Class 2'
      },
      {
        id: 3,
        students: [
          'Student 5',
          'Student 6',
          'Student 7',
          'Student 8'
        ],
        name: 'Class 3'
      },
      {
        id: 4,
        students: [
          'Student 9',
          'Student 10',
          'Student 11',
          'Student 12'
        ],
        name: 'Class 4'
      }
    ];
    const activities = [
      {
        id: 1,
        content: 'Pile Up',
        attempts: {
          weeks: [
            '12/10/18',
            '08/10/18',
            '04/10/18',
            '29/09/18',
            '27/09/18',
            '23/09/18'
          ],
          values: [
            43,
            67,
            49,
            50,
            87,
            67
          ]
        },
        student: 'Student 0',
        time: '30m',
        skill: 'Count to 10',
        type: 'Activity'
      },
      {
        id: 2,
        content: 'Early Bird',
        attempts: {
          weeks: [
            '15/10/18',
            '18/09/18'
          ],
          values: [
            35,
            72
          ]
        },
        student: 'Student 0',
        time: '1hr 30m',
        skill: 'Count to 10',
        type: 'Activity'
      },
      {
        id: 3,
        content: 'The Monsters Share',
        attempts: {
          weeks: [
            '15/10/18',
            '18/09/18'
          ],
          values: [
            35,
            72
          ]
        },
        student: 'Student 1',
        time: '1hr 30m',
        skill: 'Model Fractions',
        type: 'Activity'
      },
      {
        id: 4,
        content: 'String-a-bead',
        attempts: {
          weeks: [
            '14/10/18',
            '10/10/18',
            '06/10/18',
            '27/09/18',
            '17/09/18',
            '13/09/18',
            '14/09/18',
            '23/09/18'
          ],
          values: [
            53,
            77,
            59,
            60,
            97,
            77,
            38,
            89
          ]
        },
        student: 'Student 2',
        time: '43m',
        skill: 'Count to 10',
        type: 'Activity'
      },
      {
        id: 5,
        content: 'Flying Flocks',
        attempts: {
          weeks: [
            '14/10/18',
            '10/10/18',
            '06/10/18',
            '27/09/18',
            '17/09/18',
            '13/09/18',
            '14/09/18',
            '23/09/18'
          ],
          values: [
            53,
            77,
            59,
            60,
            97,
            77,
            38,
            89
          ]
        },
        student: 'Student 2',
        time: '7m',
        skill: 'Count to 10',
        type: 'Activity'
      },
      {
        id: 6,
        content: 'Spinning Tables',
        attempts: {
          weeks: [
            '12/10/18',
            '08/10/18',
            '04/10/18',
            '29/09/18',
            '27/09/18',
            '23/09/18'
          ],
          values: [
            43,
            67,
            49,
            50,
            87,
            67
          ]
        },
        student: 'Student 3',
        time: '30m',
        skill: 'Multiplication Table',
        type: 'Activity'
      },
      {
        id: 7,
        content: 'Early Bird',
        attempts: {
          weeks: [
            '15/10/18',
            '18/09/18'
          ],
          values: [
            35,
            72
          ]
        },
        student: 'Student 4',
        time: '30m',
        skill: 'Odd and Even',
        type: 'Activity'
      },
      {
        id: 8,
        content: 'Early Bird',
        attempts: {
          weeks: [
            '15/10/18',
            '18/09/18'
          ],
          values: [
            35,
            72
          ]
        },
        student: 'Student 4',
        time: '30m',
        skill: 'Odd and Even',
        type: 'Activity'
      },
      {
        id: 9,
        content: 'Save the Ball',
        attempts: {
          weeks: [
            '15/10/18',
            '18/09/18'
          ],
          values: [
            35,
            72
          ],
          number: 2
        },
        student: 'Student 5',
        time: '1hr 30m',
        skill: 'Add-Subtract',
        type: 'Activity'
      },
      {
        id: 10,
        content: 'String-a-bead',
        attempts: {
          weeks: [
            '14/10/18',
            '10/10/18',
            '06/10/18',
            '27/09/18',
            '17/09/18',
            '13/09/18',
            '14/09/18',
            '23/09/18'
          ],
          values: [
            53,
            77,
            59,
            60,
            97,
            77,
            38,
            89
          ]
        },
        student: 'Student 6',
        time: '43m',
        skill: 'Count to 10',
        type: 'Activity'
      },
      {
        id: 11,
        content: 'Flying Flocks',
        attempts: {
          weeks: [
            '14/10/18',
            '10/10/18',
            '06/10/18',
            '27/09/18',
            '17/09/18',
            '13/09/18',
            '14/09/18',
            '23/09/18'
          ],
          values: [
            53,
            77,
            59,
            60,
            97,
            77,
            38,
            89
          ]
        },
        student: 'Student 6',
        time: '7m',
        skill: 'Count to 10',
        type: 'Activity'
      },
      {
        id: 12,
        content: 'Save the Ball',
        attempts: {
          weeks: [
            '12/10/18',
            '08/10/18',
            '04/10/18',
            '29/09/18',
            '27/09/18',
            '23/09/18'
          ],
          values: [
            43,
            67,
            49,
            50,
            87,
            67
          ]
        },
        student: 'Student 7',
        time: '30m',
        skill: 'Add-Subtract',
        type: 'Activity'
      },
      {
        id: 13,
        content: 'Fair and Square',
        attempts: {
          weeks: [
            '15/10/18',
            '18/09/18'
          ],
          values: [
            35,
            72
          ]
        },
        student: 'Student 8',
        time: '1hr 30m',
        skill: 'Area of Rectangle',
        type: 'Activity'
      },
      {
        id: 14,
        content: 'Early Bird',
        attempts: {
          weeks: [
            '15/10/18',
            '18/09/18'
          ],
          values: [
            35,
            72
          ]
        },
        student: 'Student 8',
        time: '1hr 30m',
        skill: 'Count to 10',
        type: 'Activity'
      },
      {
        id: 15,
        content: 'String-a-bead',
        attempts: {
          weeks: [
            '14/10/18',
            '10/10/18',
            '06/10/18',
            '27/09/18',
            '17/09/18',
            '13/09/18',
            '14/09/18',
            '23/09/18'
          ],
          values: [
            53,
            77,
            59,
            60,
            97,
            77,
            38,
            89
          ]
        },
        student: 'Student 9',
        time: '43m',
        skill: 'Count to 10',
        type: 'Activity'
      },
      {
        id: 16,
        content: 'Flying Flocks',
        attempts: {
          weeks: [
            '14/10/18',
            '10/10/18',
            '06/10/18',
            '27/09/18',
            '17/09/18',
            '13/09/18',
            '14/09/18',
            '23/09/18'
          ],
          values: [
            53,
            77,
            59,
            60,
            97,
            77,
            38,
            89
          ]
        },
        student: 'Student 9',
        time: '7m',
        skill: 'Count to 10',
        type: 'Activity'
      },
      {
        id: 17,
        content: 'Early Bird',
        attempts: {
          weeks: [
            '12/10/18',
            '08/10/18',
            '04/10/18',
            '29/09/18',
            '27/09/18',
            '23/09/18'
          ],
          values: [
            43,
            67,
            49,
            50,
            87,
            67
          ]
        },
        student: 'Student 9',
        time: '30m',
        skill: 'Odd and Even',
        type: 'Activity'
      },
      {
        id: 18,
        content: 'Early Bird',
        attempts: {
          weeks: [
            '15/10/18',
            '18/09/18'
          ],
          values: [
            35,
            72
          ]
        },
        student: 'Student 10',
        time: '30m',
        skill: 'Odd and Even',
        type: 'Activity'
      },
      {
        id: 19,
        content: 'Know the Half of it',
        attempts: {
          weeks: [
            '15/10/18',
            '18/09/18'
          ],
          values: [
            35,
            72
          ]
        },
        student: 'Student 10',
        time: '30m',
        skill: 'Halves',
        type: 'Activity'
      },
      {
        id: 20,
        content: 'Save the Ball',
        attempts: {
          weeks: [
            '15/10/18',
            '18/09/18'
          ],
          values: [
            35,
            72
          ]
        },
        student: 'Student 11',
        time: '1hr 30m',
        skill: 'Add-Subtract',
        type: 'Activity'
      },
      {
        id: 21,
        content: 'String-a-bead',
        attempts: {
          weeks: [
            '14/10/18',
            '10/10/18',
            '06/10/18',
            '27/09/18',
            '17/09/18',
            '13/09/18',
            '14/09/18',
            '23/09/18'
          ],
          values: [
            53,
            77,
            59,
            60,
            97,
            77,
            38,
            89
          ]
        },
        student: 'Student 11',
        time: '43m',
        skill: 'Count to 10',
        type: 'Activity'
      },
      {
        id: 22,
        content: 'Flying Flocks',
        attempts: {
          weeks: [
            '14/10/18',
            '10/10/18',
            '06/10/18',
            '27/09/18',
            '17/09/18',
            '13/09/18',
            '14/09/18',
            '23/09/18'
          ],
          values: [
            53,
            77,
            59,
            60,
            97,
            77,
            38,
            89
          ]
        },
        student: 'Student 12',
        time: '7m',
        skill: 'Count to 10',
        type: 'Activity'
      }
    ];
    return {classes, activities};
  }
}
