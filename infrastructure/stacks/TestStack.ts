import { App, Stack } from '@aws-cdk/core';
import { todosRestApi } from '../services/restapis';
import { todosWebApp } from '../services/webapps';

class TestStack extends Stack {
    constructor(scope: App, stackName: string, stackStage: string, stackRegion: string) {
        super(scope, `${stackStage}-${stackName}`, { env: { region: stackRegion } });

        const stackEnvironment = {
            APP_NAME: stackName,
            APP_STAGE: stackStage,
            APP_REGION: stackRegion,
        };

        const restApi = todosRestApi(this, stackName, stackStage, stackEnvironment);
        const webApp = todosWebApp(this, stackName, stackStage, { ...stackEnvironment, APP_TODOS_REST_API: restApi.url });
    }
}

const testStack = (scope: App, stackName: string, stackStage: string, stackRegion: string) => {
    return new TestStack(scope, stackName, stackStage, stackRegion);
};

export default testStack;
