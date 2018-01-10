import {fromJS} from 'immutable';
import {monthsArray} from 'components/common/utils/functionUtils.js';
import {

} from 'redux/actions/actionTypes';

export const initialState = fromJS({
   weather: fromJS([
      {
         name: 'Han',
         surname: 'Solo',
         id: 1,
         photoURL: 'e1',
         nominations: []
      },
      {
         name: 'Henryk',
         surname: 'Walezy',
         id: 2,
         photoURL: 'e2',
         nominations: []
      },
      {
         name: 'Konrad',
         surname: 'Walenrod',
         id: 3,
         photoURL: 'e3',
         nominations: [],
      },
      {
         name: 'Darek',
         surname: 'Zielnik',
         id: 4,
         photoURL: 'e3',
         nominations: [],
      },
      {
         name: 'Waldemar',
         surname: 'Kiepski',
         id: 5,
         photoURL: 'e3',
         nominations: []
      },
      {
         name: 'Maxymilian',
         surname: 'Kowalczuk',
         id: 6,
         photoURL: 'e3',
         nominations: [
            {
               id: 101,
               nomination: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
               votes: 99,
               author: 'Mel Gibson'
            },
            {
               id: 102,
               nomination: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
               votes: 9,
               author: 'Mel Gibson'
            },
         ]
      },
      {
         name: 'Grzegorz',
         surname: 'Musial',
         id: 7,
         photoURL: 'e3',
         nominations: [
            {
               id: 101,
               nomination: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
               votes: 11,
               author: 'Mel Gibson'
            },
            {
               id: 102,
               nomination: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
               votes: 30,
               author: 'Mel Gibson'
            },
         ]
      },
      {
         name: 'Maciej',
         surname: 'Waza',
         id: 8,
         photoURL: 'e3',
         nominations: [
            {
               id: 101,
               nomination: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
               votes: 88,
               author: 'Mel Gibson'
            },
            {
               id: 102,
               nomination: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
               votes: 22,
               author: 'Mel Gibson'
            },
         ]
      },
      {
         name: 'Tomasz',
         surname: 'Wieczorek',
         id: 9,
         photoURL: 'e3',
         nominations: [
            {
               id: 101,
               nomination: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
               votes: 52,
               author: 'Mel Gibson'
            },
            {
               id: 102,
               nomination: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
               votes: 1,
               author: 'Mel Gibson'
            },
         ]
      },
      {
         name: 'Adam',
         surname: 'Anioł',
         id: 10,
         photoURL: 'e3',
         nominations: []
      },
      {
         name: 'Adamadeusz',
         surname: '',
         id: 25,
         photoURL: 'e3',
         nominations: []
      },
      {
         name: 'Standard',
         surname: 'Kuflicki',
         id: 11,
         photoURL: 'e3',
         nominations: []
      },
      {
         name: 'Maxymilian',
         surname: 'Amper',
         id: 13,
         photoURL: 'e3',
         nominations: []
      },
      {
         name: 'Ambroży',
         surname: 'Austriacki',
         id: 14,
         photoURL: 'e3',
         nominations: []
      },
      {
         name: 'Maria',
         surname: 'Antonina',
         id: 12,
         photoURL: 'e3',
         nominations: []
      },
      {
         name: 'Maxymilian',
         surname: 'Kwadrat',
         id: 12,
         photoURL: 'e3',
         nominations: []
      }
   ]),
   history: fromJS([
      {
         id: 1,
         date: "September 2017",
         name: 'Ambroży',
         surname: 'Austriacki',
         nomination: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
      },
      {
         id: 3,
         date: "July 2017",
         name: 'Stefan',
         surname: 'Gąbka',
         nomination: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
      },
      {
         id: 4,
         date: "June 2017",
         name: 'Stefan',
         surname: 'Gąbka',
         nomination: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
      },
      {
         id: 5,
         date: "May 2017",
         name: 'Stefan',
         surname: 'Gąbka',
         nomination: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
      },
      {
         id: 6,
         date: "April 2017",
         name: 'Stefan',
         surname: 'Gąbka',
         nomination: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
      },
      {
         id: 7,
         date: "March 2017",
         name: 'Stefan',
         surname: 'Gąbka',
         nomination: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
      },
      {
         id: 9,
         date: "February 2017",
         name: 'Stefan',
         surname: 'Gąbka',
         nomination: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
      },
      {
         id: 10,
         date: "January 2017",
         name: 'Stefan',
         surname: 'Gąbka',
         nomination: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
      },
   ]),
   nominatedPersonId: null,
   nominationAdded: false,
   votingMonth: monthsArray[new Date().getMonth()],
   votingYear: new Date().getFullYear(),
});

export default function weatherReducer(state = initialState, {type, payload}) {
   switch (type) {
      default:{
         return state;
      }
   }
};
