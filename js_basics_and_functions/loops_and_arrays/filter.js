// StrFriendS without Sam
console.log(function filterPersons(str='Tom,Bob,Alice,Sam'){
    return str.split(',').filter(el => el !== 'Sam').join('');
}())