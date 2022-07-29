import { Book, Request } from "./util";

export class Server {
    constructor(dataSource: Book[]) {
        this.dataSource = dataSource;
    }

    dataSource: Book[] = [];
    ERROR_RESPONSE = { status: 400, body: [] };

    dispatch(obj: Request) {
        const { payload, query, method } = obj;
        // Your code comes here...

    }
}
