export type Book = {
    id?: number,
    year?: number,
    author?: string,
    title?: string,
    isbn?: string
};

export type Request = {
    payload: Book,
    query?: string,
    method: "GET"|"POST"|"PUT"|"DELETE"
}
