let me = {
  firstName: 'Raymond',
  lastName: 'Saade',
};

let friend = {
  firstName: 'John',
  lastName: 'Smith',
};

let mother = {
  firstName: 'Amber',
  lastName: 'Doe',
};

let father = {
  firstName: 'Shane',
  lastName: 'Doe',
};

let people = {
  collection: [me, friend, mother, father],
  fullName: function (person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall: function () {
    this.collection.forEach(people.fullName);
  },

  add: function (person) {
    if (this.isInvalidPerson(person)) {
      return;
    }
    this.collection.push(person);
  },

  getIndex: function (person) {
    let index = -1;
    this.collection.forEach(function (comparator, i) {
      if (comparator.firstName === person.firstName &&
        comparator.lastName === person.lastName) {
        index = i;
      }
    });

    return index;
  },

  isInvalidPerson: function (person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  },

  remove: function (person) {
    if (!this.isInvalidPerson(person)) {
      return;
    }
    
    let index = this.getIndex(person);

    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },

  get: function (person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },

  update: function (person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
};

people.rollCall();
people.remove({ firstName: 'John', lastName: 'Smith' });
