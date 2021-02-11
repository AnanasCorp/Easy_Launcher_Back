module.exports = {

  convertSnapshotToArray: (snapshot) => {
    let returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr
  }

}
