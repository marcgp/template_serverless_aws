import { Construct } from '@aws-cdk/core';
import { Code, Function, Runtime } from '@aws-cdk/aws-lambda';

const todosWebAppHandler = (scope: Construct, stackName: string, stackStage: string, environment?: { [key: string]: string }) => {
    const lambda = new Function(scope, 'todosWebAppHandler', {
        functionName: `${stackStage}-${stackName}-todosWebAppHandler`,
        runtime: Runtime.NODEJS_12_X,
        handler: 'bundle.handler',
        code: Code.fromAsset('./build/webapps/todos_webapp'),
        environment,
    });

    return lambda;
};

export default todosWebAppHandler;
