 require('datejs');

function combineUsers(...args) {
  // Initialize the return object with a users array
  const combinedObject = {
    users: []
  };

  // Loop through args and merge arrays using the spread operator
  args.forEach(array => {
    combinedObject.users.push(...array);
  });

  // Add the merge_date attribute using datejs in M/d/yyyy format
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  // Return the final object
  return combinedObject;
}

module.exports = { combineUsers };