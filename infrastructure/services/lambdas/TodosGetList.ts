import { Construct } from '@aws-cdk/core';
import { Code, Function, Runtime } from '@aws-cdk/aws-lambda';

const todosGetList = (scope: Construct, stackName: string, stackStage: string, environment?: { [key: string]: string }) => {
    const lambda = new Function(scope, 'todosGetList', {
        functionName: `${stackStage}-${stackName}-todosGetList`,
        runtime: Runtime.NODEJS_12_X,
        handler: 'bundle.handler',
        code: Code.fromAsset('./build/lambdas/todosGetList'),
        environment,
    });

    return lambda;
};

export default todosGetList;
