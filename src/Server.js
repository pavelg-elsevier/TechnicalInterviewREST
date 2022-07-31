// constructor function for the Server class
class Server {
    // private datasource;
    constructor(datasource) {
        this.datasource = datasource;
    }
    dispatch (request) {
        const { payload, query, method } = request;
        // Your code comes here...

        return {"body": [], "status": 200};
    }
}

module.exports.Server = Server;
