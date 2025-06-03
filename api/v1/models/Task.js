class Task{
  constructor({description, deadline}){
    this.description = description;
    this.deadline = deadline;
    this.createdAt = Date.now()
  }

  toJSON(){
    return{
      description: this.description,
      deadline: this.deadline,
      createdAt: this.createdAt,
    }
  }
}

module.exports = Task;
