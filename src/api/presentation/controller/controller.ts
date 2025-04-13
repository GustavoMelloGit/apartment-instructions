export interface Controller<I> {
  handle(request: Request): Promise<Response>;
  validate(request: Request): Promise<I | Response>;
}
