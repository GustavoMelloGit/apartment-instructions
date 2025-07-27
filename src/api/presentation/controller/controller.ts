export type ControllerRequest = Request & {
  params?: Record<string, string>;
};
export interface Controller {
  handle(request: ControllerRequest): Promise<Response>;
}
