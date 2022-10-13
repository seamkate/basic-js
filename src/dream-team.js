const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members == null) {
    return false
  }

  let secretName = [];
  for (i = 0; i < members.length; i++){
    if (members[i] == null) {
      continue
    } else if (members[i].constructor === String) {
      secretName.push(String(members[i]).replace(/\s/g, "").toUpperCase().charAt(0));
    }
  }
  return secretName.sort().join('')
}

module.exports = {
  createDreamTeam
};
