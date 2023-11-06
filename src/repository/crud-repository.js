class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      console.log("Error occured in Repository Layer");
      throw error;
    }
  }

  async destroy(id) {
    try {
      const response = await this.model.findByIdAndDelete(id);
      return response;
    } catch (error) {
      console.log("Error occured in Repository Layer");
      throw error;
    }
  }

  async get(id) {
    try {
      const response = await this.model.findbyId(id);
      return response;
    } catch (error) {
      console.log("Error occured in Repository Layer");
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.find({});
      return response;
    } catch (error) {
      console.log("Error occured in Repository Layer");
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.findByIdAndUpdate(id, data, {
        new: true,
      });
      return response;
    } catch (error) {
      console.log("Error occured in Repository Layer");
      throw error;
    }
  }
}

export default CrudRepository;
