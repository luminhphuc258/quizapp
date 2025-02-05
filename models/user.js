// ========================================== Base Class ========================================
class User {
  // Private fields
  #username;
  #email;
  #role;

  constructor(username, email, role = 'User') {
    this.#username = username;
    this.#email = email;
    this.#role = role;
  }

  // Getters for encapsulated properties
  get username() {
    return this.#username;
  }

  get email() {
    return this.#email;
  }

  get role() {
    return this.#role;
  }

  // Polymorphism.
  showUserInfo() {
    return `Username: ${this.username}, Email: ${this.email}, Role: ${this.role}`;
  }
}

// ========================================== Premium User Class ====================================
class PremiumUser extends User {
  #subscriptionLevel;
  #benefits;

  constructor(username, email, subscriptionLevel, benefits = []) {
    super(username, email, 'Premium');
    this.#subscriptionLevel = subscriptionLevel;
    this.#benefits = benefits;
  }

  get subscriptionLevel() {
    return this.#subscriptionLevel;
  }

  get benefits() {
    return this.#benefits;
  }

  // Polymorphism
  showUserInfo() {
    return `${super.showUserInfo()}, Subscription Level: ${this.subscriptionLevel}, Benefits: ${this.benefits.join(', ')}`;
  }
}

// ========================================== Super User Class ====================================

class SuperUser extends User {
  #accessLevel;

  constructor(username, email, accessLevel) {
    // Set role to 'SuperUser'
    super(username, email, 'Super');
    this.#accessLevel = accessLevel;
  }

  get accessLevel() {
    return this.#accessLevel;
  }

  // Overriding the showUserInfo() method
  showUserInfo() {
    return `${super.showUserInfo()}, Access Level: ${this.accessLevel}`;
  }
}

// ========================================== Admin User Class ====================================
class AdminUser extends User {
  #adminPrivileges;

  constructor(username, email, adminPrivileges = []) {
    super(username, email, 'Admin');
    this.#adminPrivileges = adminPrivileges;
  }

  get adminPrivileges() {
    return this.#adminPrivileges;
  }

  // Overriding the showUserInfo() method
  showUserInfo() {
    return `${super.showUserInfo()}, Admin Privileges: ${this.adminPrivileges.join(', ')}`;
  }
}

export {
  User,
  PremiumUser,
  SuperUser,
  AdminUser
};



