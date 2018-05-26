export const stringShortener = (name:string, value:number) => {
  if (name.length >= value) {
    return name.substring(0,value)+'...';
  }
  return name; 
} 

export const toTitleCase = (str:string) => {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
} 