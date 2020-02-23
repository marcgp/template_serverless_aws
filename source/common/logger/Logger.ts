import logger from 'log4js';

const configured: boolean = false;

export default class Logger {
    public static getLogger(name: string): logger.Logger {
        if (!configured) {
            logger.configure({
                appenders: { out: { type: 'stdout' } },
                categories: { default: { appenders: ['out'], level: 'info' } },
            });
        }
        return this.getLogger(name);
    }
}
