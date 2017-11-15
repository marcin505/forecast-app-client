export const sum = (a, b) => {
   return a + b;
};

export function selectImage({image}) {
   return {
      type: 'IMAGE_SELECTED',
      payload:{
         image,
      },
   }
}

export function fetchData() {
   let promise = new Promise((resolve) => {
      setTimeout(()=>{
         resolve('peanut butter');
      }, 3000)
   });
   return promise;
}

export function failFetchData() {
   let promise2 = new Promise((resolve, reject) => {
      setTimeout(()=>{
         reject('error leci');
      }, 300)
   });
   return promise2;
}

