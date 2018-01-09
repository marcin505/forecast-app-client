import {fromJS, Map, List, Seq} from 'immutable';
import { initialState } from 'redux/reducers/weatherReducer.js';

const immutableExamples = () =>  {

   let list1 = List([1,2,3]);
   let list2 = List([9,6]);
   console.log(list1.concat(list2).toJS());
   // console.log(9, list1.find(x=>x>1));
   let list4 = list1.withMutations(list =>{
      list.push(4).push(5)});
   console.log(list4.toJS()); // [1,2,3,4,5];

   let list5 = Seq(list4)
      .map(x=>x*3)
      .filter(x => x%2 ===0);

   console.log(18, list5.toJS()); //6, 12

   let a = fromJS({
      a: {b:{c:[3,4,5], d:3}, w:2}
   });

   a = a
      .setIn(['a', 'b', 'd'], 'kurde')
      .updateIn(['a', 'b', 'd'], val => val+val)
      .setIn(['a', 'b', 'c'],
         a.getIn(['a', 'b', 'c'])
            .map(x =>x*x)
      )
      .updateIn(['a', 'b', 'c'], list => list.push(9))
      .updateIn(['a', 'b', 'c', 0], val => val*2); //a: {b:{c:[18,16,25,9], d:'kurde'}}

   console.log(31, a.toJS());


   let list6 = List([ 0, 1, 2, 3, 4 ]).insert(0, 5);//[5, 0, 1, 2, 3, 4]
   let list7 = list6
      .filter(x=> x%2 ===0)
      .reduce((prev, cur)=>prev+cur); //6


   console.log('___________________');


   const alpha = Map({ a: 1, b: 2, c: 3, d: 4 });
   console.log(17, alpha.map((v, k) => k.toUpperCase()).toJS());
   console.log(18, alpha.toArray()); // [1,2,3,4]



   let aMap1 = Map({ a: 1 });
   let aMap2 = fromJS({y:3});
   aMap1 = aMap1
      .set('b', 2)
      .update('c',  1, val=> val+2)
      .update('d', (val = 4) => val)
      .map(x=>x*x)
      // .mapEntries(([ k, v ]) => [ k.toUpperCase(), v * 2 ])
      .set('e', Map({g:2}))
      .setIn(['e', 'h'], 2)
      .updateIn(['e', 'h'], val=> val*2 )
      // .updateIn(['e', 'x'],3,  val =>val)  nic sie nie dzieje bo zwaracana jest ta sama wartosc, rozwizania ponizej, ale lepiej u żywać set do tworzenia nowych kluczy:
      // .updateIn(['e', 'x'], (val = 5) => val);
      .updateIn(['e', 'x'],3,  val =>val*2)
      .mergeIn(['e'], {z:8})
      .concat(aMap2)
      .mapKeys(x=>x.toUpperCase());


   console.log(51, aMap1.toJS()); //{a: 1, b: 4, c: 9, d:16, e:{g:2, h:4, x:6, z:8}

   let merged = aMap1.merge(Map({a: 30, b: 50, c: 60, d: 70}));
   console.log(61, merged.toJS()); //{a: 30, b: 50, c: 60, d: 70}


   const weatherArray = initialState
      .get('weather')
      .map(x=> fromJS({[x.get('surname')]: false,
      }));

   console.log(79, weatherArray.toJS());
};




export default immutableExamples;