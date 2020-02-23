import { Construct } from '@aws-cdk/core';
import { RestApi, LambdaIntegration, LambdaRestApi } from '@aws-cdk/aws-apigateway';
import { todosWebAppHandler } from '../lambdas';

const todosWebApp = (scope: Construct, stackName: string, stackStage: string, environment?: { [key: string]: string }) => {
    const lambda_todosGetList = todosWebAppHandler(scope, stackName, stackStage);

    const webapp = new LambdaRestApi(scope, 'todosWebApp', {
        restApiName: `${stackStage}-${stackName}-todosWebApp`,
        deploy: true,
        deployOptions: { stageName: stackStage },
        handler: lambda_todosGetList,
    });

    return webapp;
};

export default todosWebApp;
