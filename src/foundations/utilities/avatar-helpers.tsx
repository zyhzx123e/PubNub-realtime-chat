export const getUniqueColor = (string: string, colorSet: string[]) => {
  const getNumericHash = (string: string) => {
    let hash = 0;
    if (string && string.length === 0) return hash;
    if(string && string.length){
      for (let i = 0; i < string.length; i++) {
        let char = string.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
      }

    }
    
    return hash;
  };
  const modulo = colorSet.length;
  const colorIndex = ((getNumericHash(string) % modulo) + modulo) % modulo;
  return colorSet[colorIndex];
};

export const getInitials = (name: string) => {
  return name.match(/\b\w/g) || [];
};
