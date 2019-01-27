export default function() {
  let allocations = [];
  return {
    allocate:function(type,value){
      let a = allocations[type]
      if(!a){
        a = allocations[type] = {values:[]}
      }
      let i = a.values.length;
      a.values[i] = value;
      return i;
    }
  }
}
