import { App, Stack } from '@aws-cdk/core';
import { todosRestApi } from '../services/restapis';
import { todosWebApp } from '../services/webapps';

class TestStack extends Stack {
    constructor(scope: App, stackName: string, stackStage: string, stackRegion: string) {
        super(scope, `${stackStage}-${stackName}`, { env: { region: stackRegion } });

        todosRestApi(this, stackName, stackStage, {});
        todosWebApp(this, stackName, stackStage, {});
    }
}

const testStack = (scope: App, stackName: string, stackStage: string, stackRegion: string) => {
    return new TestStack(scope, stackName, stackStage, stackRegion);
};

export default testStack;
