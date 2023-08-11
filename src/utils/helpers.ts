export const getLastId = (treeData: any) => {
  // Create a copy of the treeData array and sort it in descending order by the 'id' property.
  const reversedArray = [...treeData].sort((a, b) => {
    if (a.id < b.id) {
      return 1; // Return a positive value if 'a' should come after 'b'.
    } else if (a.id > b.id) {
      return -1; // Return a negative value if 'a' should come before 'b'.
    }

    return 0; // Return 0 if 'a' and 'b' have the same 'id'.
  });

  // Check if there are any elements in the sorted array.
  if (reversedArray.length > 0) {
    // Return the 'id' of the first element in the sorted array (which has the highest 'id' value).
    return reversedArray[0].id;
  }
  // If the array is empty, return 0 as the last ID.
  return 0;
};
