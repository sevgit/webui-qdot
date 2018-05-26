const stringShortener = (name:string, value:number) => {
  if (name.length >= value) {
    return name.substring(0,value)+'...';
  }
  return name; 
} 

export default stringShortener;