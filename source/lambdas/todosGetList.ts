// import Logger from '../common/logger/Logger';

// const log = Logger.getLogger('todoGetList');

const todoGetList = async (): Promise<any[]> => {
    return [
        { id: '1', name: 'Todo 1' },
        { id: '2', name: 'Todo 2' },
    ];
};

const handler = async (event: any, context: any) => {
    console.info('received event=%j with context=%j', event, context);

    const response = await todoGetList();

    console.info('returning %j', response);

    return { statusCode: 200, body: JSON.stringify(response) };
};

export { handler };
