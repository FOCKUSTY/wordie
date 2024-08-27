import config from '../../../config.json';

class Handler {
    public handlerLogin = () =>
        window.location.href = `${config.server_url}/api/auth/discord`;
};

export default Handler;