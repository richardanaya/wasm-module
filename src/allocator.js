export default function() {
  let allocations = [];
  return {
    allocate:function(type,value){
      let a = allocations[type]
      if(!a){
        a = allocations[type] = {values:[],empty:[]}
      }
      let i = a.values.length;
      if(a.empty.length > 0) {
        i = a.empty.pop();
      }
      a.values[i] = value;
      return i;
    },
    release(type,handle){
        allocations[type].values[handle] = undefined;
        allocations[type].empty.push(handle);
    },
    get(type,handle){
      let ret =  allocations[type].values[handle];
      if(!ret){
        console.error(`Asked for ${type}:${handle} after it was released.`)
      }
      return ret;
    }
  }
}
