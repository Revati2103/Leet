function initcapArray(arr) {
  return arr.map(element => 
    element.charAt(0).toUpperCase() + element.slice(1)
  );
}

initcapArray(["charlie", "duffy", "george"]);
=> ['Charlie', 'Duffy', 'George']
