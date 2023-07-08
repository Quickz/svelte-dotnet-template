import { config } from "./config";

export module Api
{
    export function fetch(
        input: RequestInfo | URL,
        init?: RequestInit): Promise<Response>
    {
        let targetInput = `${config.apiEndpoint}/${input}`;
        return globalThis.fetch(targetInput, init);
    }
}
