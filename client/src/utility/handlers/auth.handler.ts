import Api from "@/api/api";

const api = new Api();

class Handler {
    public handlerLogin = () =>
        window.location.href = `${api.url}/auth/discord`;
};

export default Handler;