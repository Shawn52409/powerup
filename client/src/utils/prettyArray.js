class ArrayHelpers{
    printArray(x){
        let results = x[0];
        for (let i = 1; i < x.length; i++){
          results += ', ' + x[i];
        }
        return results;
      }
};

export default new ArrayHelpers();