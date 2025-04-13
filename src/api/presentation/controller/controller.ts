export type ControllerRequest = Request & {
  params?: Record<string, string>;
};
export interface Controller<I> {
  handle(request: ControllerRequest): Promise<Response>;
  validate(request: ControllerRequest): Promise<I | Response>;
}
